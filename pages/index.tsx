import { useState } from 'react'
import type { MouseEventHandler } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { LazyImage } from '../components/LazyImage'

const random = () => Math.floor(Math.random() * 123) + 1

const generateId = () => Math.random().toString(36).substring(2, 15)

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([
    {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    },
  ])

  const onAddNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImage: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }

    setImages([
      ...images,
      newImage
    ])
  }

  return (
    <div>
      <Head>
        <title>Random Fox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-12 items-center gap-y-4">
        <h1 className="text-4xl font-sans">Hola NextJS</h1>

        <button
          className="bg-sky-500 p-2 text-white rounded mt-6 hover:bg-sky-700 focus:ring"
          onClick={onAddNewFox}
        >
          Agregar un nuevo zorro
        </button>

        {
          images.map(({ id, url }) => (
            <div key={id} className="p-4 rounded-xl shadow-lg">
              <LazyImage
                src={url}
                width={320}
                height="auto"
                className="rounded"
                title="Random fox"
                onClick={() => console.log('hey')}
                onLazyLoad={(img) => {
                  console.log('Imagen cargada, ', img)
                }}
              />
            </div>
          ))
        }
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
