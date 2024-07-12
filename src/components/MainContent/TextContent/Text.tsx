import product from '@/data/products'

const { brand, name, desc } = product

function Text() {
  return (
    <>
      <h2>{brand}</h2>
      <h1 className="mb-4 mt-3 lg:mb-9 lg:mt-5">{name}</h1>
      <p>{desc}</p>
    </>
  )
}
export default Text
