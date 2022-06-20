import React from 'react';
import {Button, SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// redux
import {useAppDispatch} from '../reducer/store';
import {getWeatherAsync} from '../reducer/slice/weatherSlice';
import {hideLoading, showLoading} from '../reducer/slice/rootSlice';

const MainScreen: React.FC = () => {
  // const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const dispatch = useAppDispatch();
  const {weather} = useSelector((state: any) => ({
    weather: state.weather.weather,
  }));

  const handlePress = async () => {
    dispatch(showLoading());
    await dispatch(getWeatherAsync());
    dispatch(hideLoading());
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <Button title={'get values'} onPress={handlePress} />
        <Text>{JSON.stringify(weather)}</Text>
      </SafeAreaView>
    </>
  );
};

export default MainScreen;
