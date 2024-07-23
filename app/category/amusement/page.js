import ItemList from '../../components/ItemList';
import { getAllArticles } from '../../../lib/microcms';
import Breadcrumbs from '../../components/Breadcrumbs';

export default async function NewsPage() {
  const allArticles = await getAllArticles();
  const newsArticles = allArticles.filter(article => article.category === 'amusement');
  
  return(
    <div>
      <Breadcrumbs category='amusement' />
      <ItemList items={newsArticles} title="娯楽図鑑" />
     </div>
    );
}
