export const revalidate = 60;
import ProductListing from '@/components/ProductListing/ProductListing';
import styles from './page.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('API Error:', res.status);
      return []; 
    }

    return res.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return []; 
  }
}

export default async function Home() {
  const products = await getProducts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageWrapper}>
        <ProductListing products={products} />
      </div>
    </>
  );
}

