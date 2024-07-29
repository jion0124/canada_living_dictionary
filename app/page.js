// app/page.js
import Image from 'next/image';
import LinkButton from './components/LinkButton';
import SnsArea from './components/SnsArea';
import PhotoButton from './components/PhotoButton';
import AboutUs from './components/AboutUs';

export const revalidate = 60;

async function Home() {

  return (
    <main>
    <div className="py-6">

    <div className="mx-4 md:mx-auto bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl text-center border border-red-500">
      <div className="p-4">
        <div className='image_container'>
          <Image
            src="/images/title.png"
            alt="カナダ生活図鑑"
            width={300}
            height={50}
            className="max-w-xs sm:max-w-md"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-base font-bold mt-10 mb-3 text-left">
            <span className='marker'>これさえあればガイドブックがいらない</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-base text-left">
            買い物・節約術・基礎情報まで全てここで手に入る！
          </p>
        </div>
      </div>
    </div>

    <SnsArea />

    <div className="container mx-auto p-1">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 fade-in-up">
        <PhotoButton 
          href="./category/living" 
          src="/images/living.png"
          alt="生活図鑑"
        />
        <PhotoButton 
          href="./category/gourmet" 
          src="/images/gourmet.png"
          alt="グルメ図鑑"
        />
        <PhotoButton 
          href="./category/amusement" 
          src="/images/amusement.png"
          alt="娯楽図鑑"
        />
        <PhotoButton 
          href="./category/living" 
          src="/images/living.png"
          alt="生活図鑑"
        />
        <PhotoButton 
          href="./category/gourmet" 
          src="/images/gourmet.png"
          alt="グルメ図鑑"
        />
        <PhotoButton 
          href="./category/amusement" 
          src="/images/amusement.png"
          alt="生活図鑑"
        />
      </div>
     </div>
    </div>

    <AboutUs />
    </main>
  );
}

export default Home;
