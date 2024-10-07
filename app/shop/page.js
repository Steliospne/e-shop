import { notFound } from "next/navigation";
import Category from "../components/Category";
import { fetchData } from "../lib/utils";

const getData = async () => {
  try {
    const categories = await fetchData(
      "https://fakestoreapi.com/products/categories"
    );
    const men = await fetchData(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const women = await fetchData(
      "https://fakestoreapi.com/products/category/women's clothing"
    );

    if (!categories || !men || !women) {
      notFound();
    }

    const data = await Promise.all([categories, men, women]);

    return data;
  } catch (error) {
    console.error(error);
  }
};

const Shop = async ({ searchParams }) => {
  const [categories, menClothes, womenClothes] = await getData();
  return (
    <>
      <div className='shop'>
        {searchParams.category !== "men" ? (
          <Category
            data={[
              categories.slice(2).reverse(),
              menClothes,
              womenClothes.slice(2),
            ]}
          />
        ) : (
          <Category
            data={[categories.slice(2), menClothes, womenClothes.slice(2)]}
          />
        )}
      </div>
    </>
  );
};

export default Shop;
