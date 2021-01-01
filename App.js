import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {createAppNavigator,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';

export default class App extends React.Component {
 render(){ 
    return (
    <View style={styles.container}>
      <Text>TODO LIST APP</Text>
      <TextInput
            style ={styles.formTextInput}
           
          />
    </View>
  );
}
}
const switchNavigator = createSwitchNavigator({
  LoginScreen: {screens:LoginScreen},
  TaskScreen: {screens:Taskscreen}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF4F4F',
    alignItems: 'center',
    justifyContent: 'center',
  }, formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
});
