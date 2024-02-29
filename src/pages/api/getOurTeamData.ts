export const getOurTeamData = async () => {
  try {
    // Realiza a requisição para a API no WordPress
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/page/nosso-time/`);

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

export type OurTeamDataType = {
  id: number;
  title: string;
  date: string;
  our_team: {
    title: string;
    description: string;
    our_professionals: Array<{
      name_professional: string;
      role_professional: string;
      image_professional: {
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        sizes: {
          thumbnail: string;
          medium: string;
          medium_large: string;
          large: string;
        };
      };
    }>;
  };
};
