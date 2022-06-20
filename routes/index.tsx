import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../Screen/MainScreen';
import LoadingOverlay from '../components/loadingOverlay';

type RootStackParamList = {
  Home: undefined;
  ResultsShow: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const {loading} = useSelector((state: any) => ({
    loading: state.root.loading,
  }));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
      <LoadingOverlay loading={loading} />
    </NavigationContainer>
  );
};

export default MainNavigation;
