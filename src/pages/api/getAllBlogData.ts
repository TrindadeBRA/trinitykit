import { getIndexBlogData } from "../api/getIndexBlogData";

export const getAllBlogData = async (perPage: number) => {
  try {
    // Faz uma solicitação para o endpoint que retorna o número total de páginas
    const totalPagesResponse = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/total-pages?per_page=${perPage}`);
    const totalPagesData = await totalPagesResponse.json();
    const totalPages = totalPagesData.total_pages;

    return totalPages;

  } catch (error) {
    console.error('Error fetching all post data:', error);
    throw error;
  }
};
