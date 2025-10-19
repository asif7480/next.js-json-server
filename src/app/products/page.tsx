import { allProductsAction, deleteProductAction } from "@/actions/product";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";

export default async function Products() {
      const products = await allProductsAction();
  return (
    <div className="container w-2/3 mx-auto space-y-10">
      <h1 className="text-center text-3xl">All Products</h1>
      <div>
        <Link
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          href={`/add`}
        >
          Add new product
        </Link>
      </div>
      <div className="">
        {products.map((product, index) => (
          <div className="shadow-lg px-10 py-5 mb-3 flex justify-between items-center" key={index}>
            <div>
              <p>Product Id: {product.id}</p>
              <p>Product Name: {product.productName}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="flex gap-5">
              <Link className="bg-indigo-500 text-white px-5 py-2 rounded" href={`/edit/${product.id}`}>Edit</Link>
              <DeleteButton action={deleteProductAction} product={product}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
