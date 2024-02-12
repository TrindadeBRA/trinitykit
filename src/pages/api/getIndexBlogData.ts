export const getIndexBlogData = async () => {
  try {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/latest-posts`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post slugs from API');
    }
    
    const postData = await response.json();

    return postData;

  } catch (error) {
    console.error('Error fetching post slugs:', error);
    throw error;
  }
};