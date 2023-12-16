import Image from "next/image";
import { Button } from "./Button";
import { Property } from "@/models/Property";

interface PropertyCardProps {
  data: Property;
}

export function PropertyCard({ data }: PropertyCardProps) {  
  return (
    <div className="max-w-sm h-[550px] border border-dark100 p-5 flex items-center flex-col">
      <Image 
        src={data.imageUrl}
        alt="Imagem de uma sala"
        className="w-[400px] h-[280px]"
        width={400}
        height={280}
      />

      <div className="flex-1">
        <h1 className="font-semibold text-xl text-dark100 mt-2">
          {data.name}
        </h1>

        <p className="text-lg font-normal text-dark200 mt-2">
          {data.description}
        </p>

        <p className="text-lg font-medium text-dark200 mt-1">
          Endereço: {data.address}
        </p>

        <p className="font-semibold text-xl text-dark100 mt-5">
          Preço: R${data.rentAmount} - Diária
        </p>
      </div>

      <Button>
        Ver mais
      </Button>
    </div>
  )
}