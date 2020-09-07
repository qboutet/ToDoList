import React,{ useState } from 'react';
import {View,TextInput, StyleSheet,Image,TouchableOpacity} from 'react-native';


const TaskForm = ({onAddTask}) => {

    const [title, setTitle] = useState('')
    const _onChangeText = value => {
        setTitle( value )
    };


    const _oncPressBtn = () =>{
        if (title.length > 0) {
            onAddTask(title);
            setTitle('');
        }

    };
    return(

        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput  textAlign={'center'}
                            value={title}
                            onChangeText={_onChangeText}
                            placeholder = "Créer une nouvelle tâche"
                            returnKeyType = {"done"}
                            style={{ color:'#a0c4ff' }}
                            onSubmitEditing={_oncPressBtn}
                />
            </View>
            <TouchableOpacity onPress={_oncPressBtn}>
                <Image source={require('../../../assets/send.png')} style={styles.btn} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    containerInput: {
        width: '75%',
        height: '90%',
        borderWidth: 1,
        borderColor: '#a0c4ff',
        borderRadius: 10,
        paddingLeft: 8,
        paddingTop: 7,
    },
    btn:{
        right:15,
        tintColor:'#a0c4ff',
    }
})

export default  TaskForm;