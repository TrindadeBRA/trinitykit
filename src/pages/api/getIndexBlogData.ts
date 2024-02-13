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

export type IndexBlogDataType = {
  custom_fields: {
    title: string;
    subtitle: string;
  };
  recent_posts: {
    id: number;
    title: string;
    content: string;
    thumbnail_url: string;
    date: string;
    category: string;
    author_name: string;
    author_photo: string;
    slug: string;
  }[];
};
