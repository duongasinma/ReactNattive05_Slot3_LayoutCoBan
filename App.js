import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 0.24,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
})

const Cat = (props) => {
  return (
    <View
      style={
      [styles.center,
      {
        backgroundColor: props.color,
      }]}>
      <Text>{props.text}</Text>
     </View>
  );
}

const App = () => {
  return (
    <View
    style={{
        flex: 1,
        padding: 5
    }}>
     <Cat color="#C9C9FF" text="Purple: #C9C9FF"/>
     <Cat color="#3D85C6" text="Blue: #3D85C6"/>
     <Cat color="#96CC96" text="Green: #96CC96"/>
     <Cat color="#F4B940" text="Yellow: #F4B940"/>
    </View>
    
  )
}
export default App;