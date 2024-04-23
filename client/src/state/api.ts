import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponseKPIData, ApiResponseProductData, ApiResponseTransactionData } from "./types";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products","Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<ApiResponseKPIData, void>({
            query: () => 'kpi/kpis/',
            providesTags: ['Kpis']
        }),
        getProducts: build.query<ApiResponseProductData, void>({
            query: () => 'product/products',
            providesTags: ['Products']
        }),
        getTransaction: build.query<ApiResponseTransactionData, void>({
            query: () => 'transaction/transactions',
            providesTags: ['Transactions']
        })
    })
})

export const { useGetKpisQuery, useGetProductsQuery,useGetTransactionQuery } = api