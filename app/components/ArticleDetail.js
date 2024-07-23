import Image from 'next/image';
import styles from '../Articles.module.css';

const ArticleDetail = ({ article }) => {
  const vancouverTimeZone = 'America/Vancouver';

// updatedAtの日付を変換
const updatedDate = new Date(article.updatedAt);
const options = { timeZone: vancouverTimeZone, year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedUpdatedDate = new Intl.DateTimeFormat('ja-JP', options).format(updatedDate);

// createdAtの日付を変換
const createdDate = new Date(article.createdAt);
const formattedCreatedDate = new Intl.DateTimeFormat('ja-JP', options).format(createdDate);

  return (
    <main className="w-full mx-auto bg-graph-paper py-4 px-0">
     <div className="flex justify-center">
        <div className="text-center py-4 m-4 w-full relative">
          <div className="absolute inset-x-0 top-0 border-t-4 border-red-300 mx-auto rounded-lg"></div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold relative inline-block bg-white px-4 z-10 ">
            {article.title}
          </h1>
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-red-300 mx-auto rounded-lg"></div>
        </div>
      </div>
        {article.img && article.img.url && (
          <div className="flex justify-center w-full p-4">
            <Image
              src={article.img.url}
              alt={article.title}
              width={article.img.width}
              height={article.img.height}
              className="rounded-lg "
              priority
            />
          </div>
        )}
        <div className="flex justify-center">
        <div className={`articleContent m-4 p-4 bg-white rounded-lg prose prose-lg w-full max-w-4xl border border-gray-600 ${styles.articleContent}`} >
          <p className="text-sm text-center text-gray-500">作成日：{formattedCreatedDate}　更新日：{formattedUpdatedDate}</p>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
        </div>
    </main>
  );
};

export default ArticleDetail;
