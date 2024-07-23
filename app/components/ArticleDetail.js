import Image from 'next/image';
import styles from '../Articles.module.css';

const ArticleDetail = ({ article }) => {
  return (
    <main className="w-full mx-auto bg-graph-paper py-4 px-0">
     <div className="flex justify-center">
        <div className="text-center py-4 m-4 w-full max-w-sm relative">
          <div className="absolute inset-x-0 top-0 border-t-4 border-red-300 mx-auto rounded-lg"></div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold relative inline-block bg-white px-4 z-10 ">
            {article.title}
          </h1>
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-red-300 mx-auto rounded-lg"></div>
        </div>
      </div>
        {article.img && article.img.url && (
          <div className="flex justify-center">
            <Image
              src={article.img.url}
              alt={article.title}
              width={article.img.width}
              height={article.img.height}
              className="rounded-lg max-w-xs sm:max-w-md"
              priority
            />
          </div>
        )}
        <div className="flex justify-center">
        <div className={`articleContent m-4 p-4 bg-white rounded-lg prose prose-lg w-full max-w-4xl border border-gray-300 ${styles.articleContent}`} dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
    </main>
  );
};

export default ArticleDetail;
