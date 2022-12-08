import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '248d0d31e6msh3dbc20f058754e0p1d102cjsn3059651e6587',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
});
