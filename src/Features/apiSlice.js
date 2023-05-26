import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AllProducts = createApi({
  reducerPath: "AllProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["info"],
  endpoints: (builder) => ({
    addContacts: builder.mutation({
      query: (newData) => ({
        url: "users",
        method: "POST",
        body: newData,

        providesTags: ["info"],
      }),
    }),
    invalidatesTags: ["info"],
  }),
});

export const { useAddContactsMutation } = AllProducts;
