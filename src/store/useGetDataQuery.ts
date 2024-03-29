import {createApi, BaseQueryFn} from '@reduxjs/toolkit/query/react';
import {GraphQLClient, ClientError} from 'graphql-request';
import {Location} from '../types/locationType';
import {Resident} from '../types/residentType';

interface LocationsResponse {
  locations: {
    results: Location[];
    info: {
      next: number | null;
      prev: number | null;
    };
  };
}

interface ResidentsResponse {
  location: {
    name: string;
    residents: Resident[];
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
                residents {
                  id
                }
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
    getResidents: builder.query<ResidentsResponse, number>({
      query: id => ({
        document: `
          query {
            location(id : ${id}){
              name
              residents{
                id
                name
                image
                status
                species
                type
                gender
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const {useGetLocationsQuery, useGetResidentsQuery} = rickAndMortyApi;
