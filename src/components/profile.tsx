import Image from 'next/image'
import Photojf from '../assets/photojf.svg'

export default function Profile() {
  return (
    <div className="m-4 flex items-center justify-center">
      <div className="h-screen justify-center opacity-20 brightness-100">
        <Image src="" alt="perfil" className='rounded-full'/>
      </div>
    </div>
  )
}