import Image from "next/image"

export default function Header() {
  return (
    <div>
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

        <h1>Right sides</h1>

      </div>
    </div>
  )
}
