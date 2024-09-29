import Category from "../components/Category";

const categories = await (
  await fetch("https://fakestoreapi.com/products/categories")
).json();

const menClothes = await (
  await fetch("https://fakestoreapi.com/products/category/men's clothing")
).json();

const womenClothes = await (
  await fetch("https://fakestoreapi.com/products/category/women's clothing")
).json();

const Shop = () => {
  return (
    <>
      <div className='shop'>
        <Category
          data={[categories.slice(2), menClothes, womenClothes.slice(2)]}
        ></Category>
      </div>
    </>
  );
};

export default Shop;
