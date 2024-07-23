import Link from 'next/link';
import Image from 'next/image';

export default function Item({ item }) {

  const vancouverTimeZone = 'America/Vancouver';

  // Convert the date to Vancouver time zone
  const date = new Date(item.updatedAt);
  const options = { timeZone: vancouverTimeZone, year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(date);

  return (
    <li className="bg-gray-100 p-4 rounded shadow">
    <Link href={`/category/${item.category}/${item.id}`} passHref>
        <div className="flex flex-col items-center">
          {item.img && item.img.url && (
            <div className="relative w-full h-32 sm:h-40 mb-2 overflow-hidden">
              <Image
                src={item.img.url}
                alt={item.title}
                className="rounded-lg object-cover"
                fill
                sizes="100vw, 50vw"
              />
            </div>
          )}
          <h3 className="text-lg font-semibold text-center">{item.title}</h3>
          <p className="text-sm text-center text-gray-500">{formattedDate}</p>
        </div>
    </Link>
  </li>
  );
}
