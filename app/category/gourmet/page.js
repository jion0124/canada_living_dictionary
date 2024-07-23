import ItemList from '../../components/ItemList';
import { getAllArticles } from '../../../lib/microcms';
import Breadcrumbs from '../../components/Breadcrumbs';

export default async function NewsPage() {
  const allArticles = await getAllArticles();
  const newsArticles = allArticles.filter(article => article.category === 'gourmet');
  
  return(
    <div>
      <Breadcrumbs category='gourmet' />
      <ItemList items={newsArticles} title="グルメ図鑑" />
     </div>
    );
}
