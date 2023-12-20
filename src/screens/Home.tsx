import React, {useEffect, useLayoutEffect} from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {CustomButton} from '../components/ui/Buttons';
import useSWR from 'swr';
import {Text} from 'react-native';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

type Location = {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[]; // Assuming an array of strings for residents, you can adjust this based on the actual structure
  type: string;
  url: string;
};

const fetcher = (url: string | URL | Request) =>
  fetch(url)
    .then(res => res.json())
    .then(data => data.results);

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const api = 'https://rickandmortyapi.com/api/location';
  const {data, error} = useSWR(api, fetcher);
  if (error) {
    return <Text>Error loading data</Text>;
  }

  if (!data) {
    return <Text>Loading...</Text>;
  }
  return (
    <Layout>
      {/* <CustomButton
        handler={() => navigation.navigate('Game')}
        title={'Go to Game'}
      /> */}
      {data.map((item: Location) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </Layout>
  );
};

export default HomeScreen;
