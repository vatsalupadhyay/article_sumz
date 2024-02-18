// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


// export const articleApi = createApi({
//   reducerPath: "articleApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
//     prepareHeaders: (headers) => {
//       // headers: {
//       //   'X-RapidAPI-Key': '2897d8f7d6msh3f6d28d839999f6p1fb058jsn9961b39b6fe2',
//       //   'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//       // }
//       headers.set("X-RapidAPI-Key",rapidApiKey );
//       headers.set(
//         "X-RapidAPI-Host",
//         "article-extractor-and-summarizer.p.rapidapi.com"
//       );

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getSummary: builder.query({
//       query: (params) =>
//         `/summarize?url =${encodeURIComponent(params.articleUrl)}&length=3`, //might contain some special characters so we need to include the encode for that purpose
//     }),
//   }),
// });

// export const { useLazyGetSummaryQuery } = articleApi;
// // allows to use it when once the user performs it therefore lazy



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=5`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi