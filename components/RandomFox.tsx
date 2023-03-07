type Props = {
  image: string
}

export const RandomFox = ({ image }: Props) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <img className="rounded" src={image} />
    </div>
  )
}