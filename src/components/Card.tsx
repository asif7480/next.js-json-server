import { deleteProductAction } from "@/actions/productAction";
import { Product } from "@/types/product";
import Link from "next/link";

function Card({ product }: { product: Product }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-sm max-w-80">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
        alt="officeImage"
      />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {product.productName}
      </p>
      <p className="text-gray-500 mt-3 ml-2">{product.price}</p>
      <div className="flex items-center gap-2">
        <Link
          href={`/editProduct/${product.id}`}
          type="button"
          className="bg-indigo-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
        >
          Edit
        </Link>
        <form action={deleteProductAction.bind(null, product.id!)}>
          <button className="bg-red-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
