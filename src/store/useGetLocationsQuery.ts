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
    info: {
      next: number | null;
      prev: number | null;
    };
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
    getLocations: builder.query<LocationsResponse, number | null>({
      query: page => ({
        document: `
          query {
            locations(page: ${page ? page : 1}) {
              results {
                id
                name
                type
              }
              info {
                next
                prev
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const {useGetLocationsQuery} = rickAndMortyApi;
