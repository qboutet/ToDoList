import React from 'react';
import { StyleSheet, SafeAreaView,View } from 'react-native';
import Header from "./src/components/_Shared/Header";
import TasksContainer from "./src/components/TasksEpic/TasksContainer";


export default function App() {
  return (
      <View style={styles.subContainer} >
          <SafeAreaView style={styles.container}>

             <Header/>
             <TasksContainer/>

          </SafeAreaView>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#D6E4FF',
      margin: 20,



  },
    subContainer:{flex:1,
        backgroundColor: '#D6E4FF',

    }
});

