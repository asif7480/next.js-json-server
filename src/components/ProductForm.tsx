import { Product } from "@/types/product"

interface AddProductFormProps {
  product?: Product;
  action: (formData: FormData) => Promise<void>;
  buttonText?: string;
}
function ProductForm({ product, action, buttonText }: AddProductFormProps) {
    return (
        <form className="w-1/3 mx-auto" action={action}>
            <div className="mb-5">
                <input type="text" name="productName" className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4" placeholder='Enter product name' />
            </div>

            <div className="mb-5">
                <input type="text" name="price" className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4" placeholder='Enter product price' />
            </div>
            <div>
                <button className="w-full my-3 bg-blue-600 active:scale-95 transition py-2.5 rounded text-white" type='submit'>{buttonText}</button>
            </div>
        </form>
    )
}

export default ProductForm