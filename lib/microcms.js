import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

const client = axios.create({
  baseURL: 'https://canadaliving.microcms.io/api/v1',
  headers: {
    'X-API-KEY': apiKey,
  },
});

export const getAllArticles = async () => {
  const response = await client.get('/articles');  // すべての記事を取得するエンドポイント
  return response.data.contents;
};

export const getArticleDetail = async (id) => {
  try {
    const response = await client.get(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllArticleIds = async () => {
  const articles = await getAllArticles();
  return articles.map(article => ({ id: article.id }));
};
