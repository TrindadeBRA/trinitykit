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
    const totalPages = await getTotalPages();
    let allSlugs: any = [];

    // Se houver mais de uma página de posts, faça várias solicitações
    if (Number(totalPages) > 1) {
      for (let page = 1; page <= Number(totalPages); page++) {
        const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1&page=${page}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch post slugs from API ZZZZZZZZZzz');
        }
        
        const postData = await response.json();
        
        // Mapeia os slugs dos posts da página atual e adiciona ao array
        const slugs = postData.map((post: any) => post.slug);
        allSlugs = allSlugs.concat(slugs);
      }
    } else {
      // Se houver apenas uma página de posts, faça uma única solicitação
      const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch post slugs from API YYYYYYYY');
      }
      
      const postData = await response.json();
      
      // Mapeia os slugs dos posts e adiciona ao array
      allSlugs = postData.map((post: any) => post.slug);
    }

    return allSlugs;
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    throw error;
  }
};


export const getPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/post/${slug}`);    
    if (!response.ok) {
      throw new Error('Failed to fetch post data from API XXXXXXXX' );
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