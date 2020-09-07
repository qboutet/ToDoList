import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';


const FloatingButton = ({ toggleForm, isFormOpened }) => {

    return(

        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            { isFormOpened ? <Text style={styles.btn}>x</Text> :
                             <Text style={styles.btn}>+</Text>}
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom: 10,
        right:10,
        width:55,
        height:55,
        borderRadius:100,
        backgroundColor:'#a0c4ff',
        justifyContent: 'center',

    },
    btn:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize: 25,
    }
})

export default FloatingButton