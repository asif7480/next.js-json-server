import { createProductAction } from "@/actions/product";
import ProductForm from "@/components/ProductForm";

export default function AddProduct() {
  return (
    <div className="container w-2/3 mx-auto space-y-10">
     <h1 className="text-center text-3xl">Add new Product</h1>
     <ProductForm action={createProductAction} btnLabel="click to add product" />
    </div>
  )
}
