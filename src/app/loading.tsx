export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      padding: '4rem 1rem',
      gap: '1.5rem',
      backgroundColor: 'var(--background)'
    }}>
      <div 
        style={{
          width: '50px',
          height: '50px',
          border: '3px solid var(--border-color)',
          borderTop: '3px solid var(--foreground)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <h2 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'var(--foreground)'
      }}>
        Loading collection...
      </h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
