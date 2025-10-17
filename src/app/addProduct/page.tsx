import { addProductAction } from "@/actions/productAction"
import ProductForm from "@/components/ProductForm"

function AddProduct() {
  return (
    <>
      <h1 className='text-center text-2xl text-blue-600 my-4'>Add new Product</h1>
      <ProductForm action={addProductAction} buttonText="Click to add new product" />
    </>
  )
}

export default AddProduct