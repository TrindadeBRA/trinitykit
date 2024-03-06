import { getIndexBlogData } from "../api/getIndexBlogData";

export const getAllBlogData = async (perPage: number) => {
  try {
    // Faz uma solicitação para o endpoint que retorna o número total de páginas
    const totalPagesResponse = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/total-pages?per_page=${perPage}`);
    const totalPagesData = await totalPagesResponse.json();
    const totalPages = totalPagesData.total_pages;

    // Inicializa um array para armazenar os dados de todos os posts
    let allPostsData: any = [];

    // Itera por todas as páginas e faz solicitações para o endpoint que retorna os dados dos posts
    for (let i = 1; i <= totalPages; i++) {
      const postData = await getIndexBlogData(i, perPage);
      allPostsData = [...allPostsData, ...postData.recent_posts]; // Concatena os dados dos posts à medida que são obtidos
    }

    return allPostsData;

  } catch (error) {
    console.error('Error fetching all post data:', error);
    throw error;
  }
};
