import React, { Component } from 'react';

import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput} from 'react-native';

export default class DietScreen extends Component{
  render(){
    return(
      <View style={styles.StyleSheet}>
      <Image source={require('../assets/diet.png')}></Image>
      <TextInput style={styles.textContainer}
      placeholder={'Search Your Favourite Ones'}></TextInput>
      <View>
      
      </View>
      </View>
    )
  }
}