import Image from 'next/image'
import livingRoomImg from '../assets/img2.png'
import Link from 'next/link'

export function Design() {
  return (
    <div className="px-80 flex items-center gap-28 mb-20">
      <Image 
        src={livingRoomImg}
        alt="Imagem de uma sala"
        className="w-[537px] h-[507px] shadow-negative mt-[180px]"
      />

      <div className='flex flex-col gap-6'>
        <div className='max-w-xl bg-dark100 p-7'>
          <span className='font-semibold text-white text-2xl'>
            Design Minimalista
          </span>

          <p className='font-medium text-white text-base leading-6 mt-5'>
            Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.
          </p>
        </div>

        <Link href="#" className='font-medium text-lg text-dark100 underline'>
          Quero saber mais sobre os designs
        </Link>
      </div>
    </div>
  )
}