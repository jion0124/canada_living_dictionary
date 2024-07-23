import ItemList from '../../components/ItemList';
import { getAllArticles } from '../../../lib/microcms';
import Breadcrumbs from '../../components/Breadcrumbs';

export default async function NewsPage() {
  const allArticles = await getAllArticles();
  const newsArticles = allArticles.filter(article => article.category === 'living');
  
  return(
    <div>
      <Breadcrumbs category='living' />
      <ItemList items={newsArticles} title="生活図鑑" />
     </div>
    );
}
