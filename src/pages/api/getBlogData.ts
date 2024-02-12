export const getPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post data from API');
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

export const getAllPostSlugs = async () => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/latest-posts`); // ajuste per_page conforme necessário
    
    if (!response.ok) {
      throw new Error('Failed to fetch post slugs from API');
    }
    
    const postData = await response.json();

    // Mapeia os slugs dos posts
    const slugs = postData.map((post: any) => post.slug);

    return slugs;
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    throw error;
  }
};
