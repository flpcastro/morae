import Link from "next/link";
import { Home } from "react-feather";

export function Footer() {
  return (
    <footer className="px-80 py-24 flex gap-[69px]">
      <div>
        <Link href="/" className="bg-dark100 p-2 flex items-center">
          <Home 
            size={24} 
            className="text-dark300" 
          />
        </Link>
      </div>

      <div className="flex gap-28">
        <div className="flex flex-col gap-4">
          <h2 className="mb-3 font-semibold text-dark100 text-lg">
            Produtos
          </h2>
          
          <Link href="#">Mobilia</Link>
          <Link href="#">Segurança</Link>
          <Link href="#">Design Interior</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="mb-3 font-semibold text-dark100 text-lg">
            Mais Informações
          </h2>

          <Link href="#">Contrato</Link>
          <Link href="#">Sobre nós</Link>
          <Link href="#">Termos e Condições</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="mb-3 font-semibold text-dark100 text-lg">
            Redes Sociais
          </h2>

          <Link href="#">Pinterest</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
        </div>
      </div>
    </footer>
  )
}