import React from 'react';
import { View,StyleSheet } from 'react-native';
import Counter from "../_Shared/Counter";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
    return(

        <View style={styles.container}>
            <Counter nb={nbTasks} title={'Tâches créées'}/>
            <Counter nb={nbTasksCompleted()} title={'Tâches complétées'}/>
        </View>

    );
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 25,
    },
})

export default CountersContainer;