import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getProductById,
    getProducts,
    login,
    register,
    getUserInfo,
    updateUserInfo,
    toggleFavoriteProduct,
    addComment,
    logout,
  } from "../api";

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

export const useToggleFavoriteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(toggleFavoriteProduct, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };

export const useUserInfo = () => {
    return useQuery({
      queryKey: ["uid"],
      queryFn: getUserInfo,
      initialData: {},
    });
  };
  
  export const useSignInWithEmailPassword = () => {
    const queryClient = useQueryClient();
    return useMutation(login, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useRegisterWithEmailPassword = () => {
    const queryClient = useQueryClient();
    return useMutation(register, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUserInfo, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useLogout = () => {
    const queryClient = useQueryClient();
    return useMutation(logout, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation(addComment, {
      onSuccess: () => {
        queryClient.invalidateQueries("comments");
      },
    });
  };


