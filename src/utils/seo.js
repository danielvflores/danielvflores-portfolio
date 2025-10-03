// Ping Google cuando hay cambios
export async function pingGoogle() {
  const url = 'https://danielvflores-portfolio.vercel.app/sitemap-index.xml';
  
  try {
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`);
    console.log('Sitemap enviado a Google');
  } catch (error) {
    console.error('Error enviando sitemap:', error);
  }
}

// También ping a Bing
export async function pingBing() {
  const url = 'https://danielvflores-portfolio.vercel.app/sitemap-index.xml';
  
  try {
    await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(url)}`);
    console.log('Sitemap enviado a Bing');
  } catch (error) {
    console.error('Error enviando sitemap a Bing:', error);
  }
}