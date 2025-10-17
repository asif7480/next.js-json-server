import React from "react";
import Card from "./Card";
import { Product } from "@/types/product";

function CardList({ products }: { products: Product[]}) {
  return (
    <>
      {products.map((product, index) => (
        <Card key={index} product={product}/>
      ))}
    </>
  );
}

export default CardList;
