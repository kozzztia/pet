import {createApi, BaseQueryFn} from '@reduxjs/toolkit/query/react';
import {GraphQLClient, ClientError} from 'graphql-request';

interface Location {
  id: number;
  name: string;
  type: string;
}

interface LocationsResponse {
  locations: {
    results: Location[];
  };
}

const graphqlRequestBaseQuery: BaseQueryFn<
  {
    document: string;
    variables?: any;
  },
  unknown,
  unknown,
  Partial<Pick<ClientError, 'request' | 'response'>>,
  {}
> = async args => {
  const client = new GraphQLClient('https://rickandmortyapi.com/graphql');

  try {
    const data = await client.request(args.document, args.variables);
    return {data};
  } catch (error) {
    return {error};
  }
};

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: graphqlRequestBaseQuery,
  endpoints: builder => ({
    getLocations: builder.query<LocationsResponse, number>({
      query: (page = 1) => ({
        document: `
          query {
            locations(page: ${page}) {
              results {
                id
                name
                type
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const {useGetLocationsQuery} = rickAndMortyApi;
