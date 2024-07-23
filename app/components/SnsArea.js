import SnsIcon from './SnsIcon'

const SnsArea = () => {
  return (
    <div className="bg-red-100 py-6 mt-8 w-full flex flex-col items-center">
      <div className='mb-3'>
        ↓SNSはこちらから↓
      </div>
      <div className="flex space-x-6">
      <SnsIcon href="https://www.instagram.com/ca_seikatsu/" src="/images/snsIcons/instagram.png" alt="Instagram" />
      <SnsIcon href="https://www.instagram.com/ca_seikatsu/" src="/images/snsIcons/instagram.png" alt="Instagram" />
      <SnsIcon href="https://www.instagram.com/ca_seikatsu/" src="/images/snsIcons/instagram.png" alt="Instagram" />
      <SnsIcon href="https://www.instagram.com/ca_seikatsu/" src="/images/snsIcons/instagram.png" alt="Instagram" />
      </div>
    </div>
  )
}

export default SnsArea
