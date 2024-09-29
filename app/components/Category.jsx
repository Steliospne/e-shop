import { capitalize } from "../lib/utils";
import Product from "./Products";

const Category = ({ data }) => {
  const [categories, men, women] = data;

  return (
    <>
      {data &&
        categories.map((category) => {
          return (
            <div key={category} className='category'>
              <h2>{capitalize(category)}</h2>
              <div className='products'>
                <Product data={category.includes("women") ? women : men} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Category;
