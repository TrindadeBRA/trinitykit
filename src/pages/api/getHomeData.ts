export const getHomeData = async () => {
  try {
    // Realiza a requisição para a API no WordPress
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/page/home/`);
  
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

export type HomeDataType = {
  id: number;
  title: string;
  yoast_title: string;
  yoast_description: string;
  content: string;
  date: string;
  hero: {
    title: string;
    description: string;
    cta_text: string;
    cta_url: string;
  };
}