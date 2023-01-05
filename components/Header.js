import Image from "next/image"
import React from "react"
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
  
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image src="/../public/bilder/logo.jpg" 
                   layout='fill'
                   className="object-contain">
            </Image>
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
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

        <h1>Right sides</h1>

      </div>
   
  )
}
