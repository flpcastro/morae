import Image from "next/image";

import roomImage from '../assets/img3.png';
import kitchenImage from '../assets/img4.png';
import bathroomImage from '../assets/img5.png';

export function Gallery() {
  return (
    <section className="px-80 py-11 bg-dark300 flex items-center flex-col">
      <h1 className="font-semibold text-dark100 text-[32px]">
        Galeria
      </h1>

      <p className="text-center font-medium text-dark200 text-lg leading-7 mt-5">
        Se você está entediado com a aparência da decoração de interiores da casa comuns, <br/>
        trabalhamos com designs diferentes e inovadores.
      </p>

      <div className="flex mt-8 gap-5">
        <Image 
          src={roomImage}
          alt="Imagem de uma sala"
          className="w-[396px] h-[550px]"
        />

        <Image 
          src={kitchenImage}
          alt="Imagem de uma cozinha"
          className="w-[396px] h-[550px]"
        />

        <Image 
          src={bathroomImage}
          alt="Imagem de um banheiro"
          className="w-[396px] h-[550px]"
        />
      </div>
    </section>
  )
}