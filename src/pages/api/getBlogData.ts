export const getTotalPages = async () => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1`);

    if (!response.ok) {
      throw new Error('Failed to fetch total pages from API');
    }

    const totalPages: any = response.headers.get('X-WP-TotalPages');

    return parseInt(totalPages);
  } catch (error) {
    console.error('Error fetching total pages:', error);
    throw error;
  }
};

export const getAllPostSlugs = async () => {
  try {
    const url = `${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/all-slugs`;
    // console.log(`Fetching slugs from ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch post slugs from API`);
    }
    const responseData = await response.json();

    // Extrair os slugs do array de slugs retornado pela API
    const slugs = responseData.slugs;

    return slugs;
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    throw error;
  }
};



export const getPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/post/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post data from API XXXXXXXX');
    }
    const postData = await response.json();

    // Verifica se algum post foi encontrado com o slug fornecido
    if (postData.length === 0) {
      throw new Error('Post not found');
    }

    // Retorna os dados do primeiro post encontrado (supondo que há apenas um post com um determinado slug)
    return postData[0];


  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error);
    throw error;
  }
};