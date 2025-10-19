import { allProductsAction, updateProductAction } from "@/actions/product";
import ProductForm from "@/components/ProductForm";
import { Product } from "@/types/product";

export default async function EditProduct({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const products = await allProductsAction()
  const product = products.find( (product: Product) => product.id === id)
  console.log(product);
  
  return (
    <div className="container w-2/3 mx-auto space-y-10">
      <h1 className="text-center text-3xl">Edit Product</h1>
      <ProductForm
        product={product}
        action={updateProductAction}
        btnLabel="click to update product"
      />
    </div>
  );
}
