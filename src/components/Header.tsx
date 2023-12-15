import Link from "next/link";
import { Heart, Home, Search, User } from "react-feather";

export function Header() {
  return (
    <header className="flex py-7 justify-between px-80">
      <div className="flex items-center gap-4">
        <Link href="/" className="bg-dark100 p-2">
          <Home 
            size={24} 
            className="text-dark300" 
          />
        </Link>

        <h1 className="font-semibold text-2xl">
          MORAÊ
        </h1>
      </div>

      <div className="flex items-center gap-14">
        <nav>
          <ul className="flex gap-12">
            <li>
              <a
                className="font-medium text-lg leading-5 text-dark100" 
                href="#"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="font-medium text-lg leading-5 text-dark100"  
                href="#"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                className="font-medium text-lg leading-5 text-dark100"  
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-8">
          <User size={20} className="cursor-pointer" />
          <Heart size={20} className="cursor-pointer" />
          <Search size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  )
}