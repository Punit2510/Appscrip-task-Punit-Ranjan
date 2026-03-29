"use client";

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Failed to fetch store products:', error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
      gap: '1.5rem',
      backgroundColor: 'var(--background)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--foreground)' }}>
          Something went wrong loading products.
        </h2>
        <p style={{ color: 'var(--gray-text)', marginBottom: '2rem' }}>
          We could not reach the server at this time.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '0.8rem 2rem',
            backgroundColor: 'currentColor',
            color: 'var(--background)',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
