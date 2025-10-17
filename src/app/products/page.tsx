import { getAllProductsAction } from "@/actions/productAction";
import CardList from "@/components/CardList";
import React from "react";

async function Product() {
  const products = await getAllProductsAction()
  
  return (
    <div>
      <h1 className="text-center text-4xl my-4">Products</h1>
      <div className="container w-2/3 mx-auto flex flex-wrap justify-center gap-6">
        <CardList products={products}/>
      </div>
    </div>
  );
}

export default Product;
