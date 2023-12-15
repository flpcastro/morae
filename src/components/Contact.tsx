import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import houseOutdoorImg from '../assets/img1.png';

export function Contact() {
  return (
    <section className="bg-dark300 flex w-full px-80 items-center gap-16">
      <div className="flex flex-col">
        <h1
          className="font-semibold text-[40px] text-dark100 leading-[48px]"
        >
          Ajudar você a encontrar o melhor conforto, 
          é nossa prioridade.
        </h1>

        <p
          className="font-medium text-lg text-dark200 leading-7 mt-4"
        >
          Encontre uma variedade de propriedades que combinam com 
          você. Esqueça todas as dificuldades em encontrar uma residência.
        </p>

        <div className="flex items-center gap-10 mt-8">
          <Button>
            Entre em contato
          </Button>

          <Link
            className="font-medium text-lg leading-5 text-dark100 underline" 
            href='#'
          >
            Mais sobre nós
          </Link>
        </div>
      </div>

      <Image 
        src={houseOutdoorImg}
        alt="Imagem de uma casa"
        className="w-[660px] h-[850px]"
      />
    </section>
  )
}