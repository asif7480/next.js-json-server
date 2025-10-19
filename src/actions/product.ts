"use server"

import { revalidatePath } from "next/cache"
import { Product } from "@/types/product"
import axios from "axios"
import { redirect } from "next/navigation"

const BASE_URL = `http://localhost:3001/products`

export async function allProductsAction(): Promise<Product[]>{
    const response = await axios.get(`${BASE_URL}`)
    
    return response.data
}

export async function createProductAction(formData: FormData){
    const productName = formData.get("productName") as string
    const price = Number(formData.get("price"))

    const response = await axios.post(`${BASE_URL}`, { productName, price })
    revalidatePath("/")
    redirect('/')
}

export async function updateProductAction(formData: FormData){
    const id = formData.get(`id`) as string
    const productName = formData.get("productName") as string
    const price = Number(formData.get("price"))

    const response = await axios.put(`${BASE_URL}/${id}`, { productName, price })
    revalidatePath("/")
    redirect('/')
}

export async function deleteProductAction(formData: FormData){
    const id = formData.get(`id`)
    await axios.delete(`${BASE_URL}/${id}`)
    revalidatePath('/')
}