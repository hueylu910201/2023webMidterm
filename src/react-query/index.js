import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from "../api";

export const useProducts = (category) => {
    const { data, isLoading } = useQuery([category], getProducts, {
        onSuccess: (data) => {
            console.log("獲取到的資料：", data);
        },
    })
    return { data, isLoading };
};

export const useProductById = (productId) => {
    const { data, isLoading } = useQuery([productId], getProductById)
    return { data, isLoading };
}