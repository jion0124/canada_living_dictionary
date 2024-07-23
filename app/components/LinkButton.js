import Link from 'next/link';

export default function LinkButton({ href, color, text }) {
  const baseStyle = 'max-w-sm text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center';
  const colorClass = `bg-${color}-500 hover:bg-${color}-600`;
  const mobileStyle = 'sm:py-2 sm:px-4'; // スマホサイズでのスタイル

  return (
    <Link href={href} className={`${baseStyle} ${colorClass} ${mobileStyle}`}>
        {text}
    </Link>
  );
}
