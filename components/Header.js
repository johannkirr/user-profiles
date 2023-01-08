import Image from "next/image"
import React from "react"
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid"

export default function Header() {
  return (
  
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid hover:scale-125 transision-transform duration-200 ease-out">
            <Image src="/../public/bilder/logo.jpg" 
                   layout='fill'
                   className="object-contain">
            </Image>
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden hover:scale-125 transision-transform duration-200 ease-out">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                   layout='fill'
                   className="object-contain">
            </Image>
        </div>
        <div className="relative mt-1">
          <div className="absolute mt-3 ml-2">
            <SearchIcon className="h-5 text-gray-500 "/>
          </div>
          <input className="bg-gray-100 pl-10 border-transparent focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search"></input>
        </div>

        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transision-transform duration-200 ease-out"/>
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transision-transform duration-200 ease-out"/>
          <Image className="rounded-full cursor-pointer hover:scale-125 transision-transform duration-200 ease-out" src="/../public/bilder/foto.jpg" width={20} height={20} alt="user-image"/>
        </div>

      </div>
   
  )
}
