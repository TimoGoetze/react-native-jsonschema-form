import React from 'react';
import { StyleSheet, View } from 'react-native';


const HiddenWidget = () => {
  return (
    <View style={ styles.hidden }/>
  );
}

const styles = StyleSheet.create({
  hidden: {
    width: 0,
    height: 0
  }
})

export default HiddenWidget;
