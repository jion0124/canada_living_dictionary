import Link from 'next/link';

const Breadcrumbs = ({ category, articleTitle }) => {
  const getCategoryName = (value) => {
    switch (value) {
      case 'living':
        return '生活図鑑';
      case 'gourmet':
        return 'グルメ図鑑';
      case 'amusement':
        return '娯楽図鑑';
      // 必要に応じて他のカテゴリを追加
      default:
        return value;
    }
  };

  const categoryName = getCategoryName(category);

  return (
    <nav className="bg-gray-100 p-3 rounded text-xs sm:text-sm md:text-lg">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <Link href="/" className="text-blue-600 hover:text-blue-700">ホーム</Link>
        </li>
        {category && (
          <>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              {articleTitle ? (
                <Link href={`/category/${category}`} className="text-blue-600 hover:text-blue-700">
                  {categoryName}
                </Link>
              ) : (
                <span className="text-gray-500">{categoryName}</span>
              )}
            </li>
            {articleTitle && (
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-500">{articleTitle}</span>
              </li>
            )}
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
