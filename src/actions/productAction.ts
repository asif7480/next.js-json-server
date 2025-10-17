"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001/products";

export const getAllProductsAction = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export const addProductAction = async (formData: FormData) => {
  try {
    const productName = formData.get("productName");
    const price = formData.get("price");

    await axios.post(`${API_URL}`, { productName, price });
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
  redirect("/products");
};

export const updateProductAction = async (id: string, formData: FormData) => {
  try {
    const productName = formData.get("productName");
    const price = formData.get("price");

    await axios.put(`${API_URL}/${id}`, { productName, price });
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
  redirect("/products");
};

export const deleteProductAction = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
  redirect("/products");
};
