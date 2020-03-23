import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput,Button} from 'react-native';
import {dbcustomerRef} from './firebase'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class  SignUp extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    loading: false,
    error: null
  }
  
  handleSignUp = ({ email, password, confirmPassword, name }) => {
        
    console.log(email, password, confirmPassword, name)

    const users = {
      name: name,
      email: email,
      password: password
    }

    dbcustomerRef.push(users)
  }
  

  render(){
    const { email, name, password, confirmPassword, loading, error } = this.state;
  return (

    
    <View style={styles.container}>
        
        <TextInput
        
          onChangeText={text => this.setState({ email: text, error: null })}
          keyboardType={"email-address"}
          value={email}
          placeholder={"Email"}
        />
        <TextInput
          onChangeText={text => this.setState({ name: text, error: null })}
          value={name}
          placeholder={"Name"}
        />
        <TextInput
          onChangeText={text => this.setState({ password: text, error: null })}
          value={password}
          secureTextEntry={true}
          placeholder={"Password"}
        />
        <TextInput
          onChangeText={text => this.setState({ confirmPassword: text, error: null })}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder={"Confirm Password"}
        />

        <Button title="SignUp" onPress={() => this.handleSignUp({ email, password, confirmPassword, name })} />
      
      </View>
  );
  }
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <SignUp />
      
      <Button
        title="Next"
        onPress={() => navigation.navigate('Details')} 
      />
     
    </View>
    
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Are You Green Warrior</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('NextScreen')} 
      />
    </View>
  );
}

function NextScreen(){
  return(
    <Text>Hi Aakash your Dashboard !</Text>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App