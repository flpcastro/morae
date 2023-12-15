import Image from 'next/image'
import livingRoomImg from '../assets/img2.png'
import Link from 'next/link'

export function Design() {
  return (
    <div className="px-80">
      <Image 
        src={livingRoomImg}
        alt="Imagem de uma sala"
        className="w-[537px] h-[507px] shadow-negative mt-[180px]"
      />

      <div>
        <div>
          <span>
            Design Minimalista
          </span>

          <p>
            Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.
          </p>
        </div>

        <Link href="#">
          Quero saber mais sobre os designs
        </Link>
      </div>
    </div>
  )
}