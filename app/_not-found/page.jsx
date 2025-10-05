// app/_not-found/page.jsx

export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f9f9f9',
      color: '#333'
    }}>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, o conteúdo que você procura não existe.</p>
    </main>
  );
}

