import { useRef, useEffect, useState } from 'react'

import type { ImgHTMLAttributes } from 'react'

type LazyImageProps = {
  src: string,
  onLazyLoad?: (imagen: HTMLImageElement) => void
}

type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = LazyImageProps & ImageNative

export const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    //Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })

    //Observe node
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    //Disconnect
    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      {...imgProps}
    />
  )
}