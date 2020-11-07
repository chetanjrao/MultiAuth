import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Firebase from './utils/Firebase';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'firebase/firestore';

const Stack = createStackNavigator()

export class Student extends React.Component {

  render(){
    return (
      <View><Text>Welcome, you are a student now</Text></View>
    )
  }
}

export class Teacher extends React.Component {
  render(){
    return (
      <View><Text>Welcome, you are a teacher now</Text></View>
    )
  }
}

export class Admin extends React.Component {
  render(){
    return (
      <View><Text>Welcome, you are a admin now</Text></View>
    )
  }
}

export class Home extends React.Component {

  render(){

    const studentLogin = () => {
      let db = Firebase.firestore()
      db.collection('students').where('email', '==', 'user@gmail.com').where("password", '==', '123').get().then(snapshot => {
        if(snapshot.docs.length > 0){
          this.props.navigation.navigate('students')
        }
      })
    }

    const teacherLogin = () => {
      let db = Firebase.firestore()
      db.collection('teachers').where('email', '==', 'teacher@gmail.com').where("password", '==', '123').get().then(snapshot => {
        if(snapshot.docs.length > 0){
          this.props.navigation.navigate('teachers')
        }
      })
    }

    const adminLogin = () => {
      let db = Firebase.firestore()
      db.collection('teachers').where('email', '==', 'admin@gmail.com').where("password", '==', '123').get().then(snapshot => {
        if(snapshot.docs.length > 0){
          this.props.navigation.navigate('admin')
        }
      })
    }

    return (
      <View style={styles.container}>
        <Button
        title={"Login as Student"}
        onPress={studentLogin}
        />
        <Button
        title={"Login as Teacher"}
        onPress={teacherLogin}
        />
        <Button
        title={"Login as Admin"}
        onPress={adminLogin}
        />
        <StatusBar style="auto" />
      </View>
    )
  }
}

export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="students" component={Student} />
            <Stack.Screen name="teachers" component={Teacher} />
            <Stack.Screen name="admin" component={Admin} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
