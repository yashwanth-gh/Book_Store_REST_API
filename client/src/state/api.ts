import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponseKPIData, ApiResponseProductData } from "./types";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<ApiResponseKPIData, void>({
            query: () => 'kpi/kpis/',
            providesTags: ['Kpis']
        }),
        getProducts: build.query<ApiResponseProductData, void>({
            query: () => 'product/products',
            providesTags: ['Products']
        })
    })
})

export const { useGetKpisQuery, useGetProductsQuery } = api