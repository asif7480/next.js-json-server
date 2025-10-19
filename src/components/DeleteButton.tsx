"use client"
import { Product } from "@/types/product";
import React from "react";

interface DeleteButtonProp {
    action: (formData: FormData) => Promise<void>
    product: Product
}

export default function DeleteButton({ action, product}: DeleteButtonProp) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={product.id} />
      <button type="submit" className="bg-red-500 text-white px-5 py-2 rounded">
        Delete
      </button>
    </form>
  );
}
