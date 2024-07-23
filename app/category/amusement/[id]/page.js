import { getArticleDetail } from '../../../../lib/microcms';
import ArticleDetail from '../../../components/ArticleDetail';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default async function NewsDetail({ params }) {
  const article = await getArticleDetail(params.id);
  
  return (
    <div>
      <Breadcrumbs category={article.category} articleTitle={article.title} />
      <ArticleDetail article={article} />
    </div>
  );
}
