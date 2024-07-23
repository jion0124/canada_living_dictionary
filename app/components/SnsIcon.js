import Image from 'next/image'
import PropTypes from 'prop-types'

const SnsIcon = ({ href, src, alt }) => {
  return (
    <a href={href} target='_blank' className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
      <Image src={src} alt={alt} width={24} height={24} />
    </a>
  )
}

SnsIcon.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default SnsIcon
