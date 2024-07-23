// app/components/PhotoButton.js
import Link from 'next/link';
import Image from 'next/image';

const PhotoButton = ({ href, src, alt }) => {
  return (
    <div className="w-full md:w-44 p-2 mx-auto">
      <Link href={href}>
        <Image src={src} alt={alt} className="w-full h-auto rounded-lg" width={100} height={100} />
      </Link>
    </div>
  );
};

export default PhotoButton;
