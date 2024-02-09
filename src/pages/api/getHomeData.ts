export const getHomeData = async () => {
  try {
    // Realiza a requisição para a API no WordPress
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/home/`);
  
    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Failed to fetch header data from API');
    }

    // Converte a resposta para JSON e retorna os dados
    return await response.json();
  } catch (error) {
    console.error('Error fetching header data:', error);
    throw error;
  }
};
