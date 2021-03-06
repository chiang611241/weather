import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface IProps {
  loading: boolean;
}

const LoadingOverlay = (props: IProps) => {
  const {loading} = props;

  return (
    <>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.5,
  },
});

export default LoadingOverlay;
