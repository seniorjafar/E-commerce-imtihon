import { api } from '../../Api'
export const productApi = api.injectEndpoints({

  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products?limit=8', 
        params 
      }),
      providesTags:["Product"]
    }),

  
    getDetialProduct:build.query({
      query: (id) => ({ 
        url: `/products/${id}`, 
      }),
    }),

    createProduct: build.mutation({
      query: (body)=> ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: build.mutation({
      query: ({_id, body})=> ({
        url: `/`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetDetialProductQuery,
} = productApi