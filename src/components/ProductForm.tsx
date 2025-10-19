import { Product } from "@/types/product";

interface FormProp {
  product?: Product;
  action: (formData: FormData) => Promise<void>;
  btnLabel: string;
}

export default function ProductForm({ product, action, btnLabel }: FormProp) {
  return (
    <form action={action} className="container w-1/2 mx-auto space-y-5">
      <input type="hidden" name="id" defaultValue={product?.id || ""} />
      <div>
        <input
          type="text"
          name="productName"
          placeholder="Enter product name"
          defaultValue={product?.productName || ""}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div>
        <input
          type="text"
          name="price"
          defaultValue={product?.price || ""}
          placeholder="Enter product price"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
}
