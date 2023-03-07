import { useRef, useEffect, useState } from 'react'

type Props = {
  image: string
}

export const RandomFox = ({ image }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    //Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image)
        }
      })
    })
  
    //Observe node
    if(imgRef.current) {
      observer.observe(imgRef.current)
    }
  
    //Disconnect
    return () => {
      observer.disconnect()
    }
  }, [image])

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <img ref={imgRef} className="rounded" src={src} />
    </div>
  )
}