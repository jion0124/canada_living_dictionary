import Item from './Item';

export default function ItemList({ items, title }) {
  return (
    <div className="container mx-auto p-4">
     <div className="text-center">
      <h2 className="text-3xl font-bold mb-10 inline-block relative">
        {title}
        <span className="absolute left-[-20px] right-[-20px] bottom-[-8px] h-1 bg-red-300 rounded-lg"></span>
      </h2>
    </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">該当の記事が見つかりません</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
