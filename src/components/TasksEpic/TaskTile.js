import React from 'react';
import {Image, Text, View, StyleSheet,TouchableOpacity} from 'react-native';


const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask }) => {
    return(

        <View style={styles.container}>
           < View style={styles.subContainer}>
             <TouchableOpacity onPress={() => onChangeStatus(id)}>
                <Image
                style={styles.iconCircle}
                source={completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')}/>
             </TouchableOpacity>
               <TouchableOpacity onPress={() => onChangeStatus(id)}>
               <Text style={[styles.title, {color: completed ? '#a0c4ff' : '#000D14'}]}>{title}</Text>
               </TouchableOpacity>
           </View>
           <TouchableOpacity onPress={() => onDeleteTask(id)}>
                 <Image style={styles.iconBin}
                       source={ require('../../../assets/icon_bin.png')}
                />
           </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create ({
    container:{
         flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20,

    },

    subContainer:{
        flexDirection: 'row',
        alignItems: 'center',


    },
    iconCircle:{
        width: 40,
        height: 40,
        tintColor:'#a0c4ff'
    },

    iconBin: {
        width: 40,
        height: 40,
        tintColor:'#ffadad'

    },

    title: {
        marginLeft: 30,
    }
})

export default  TaskTile;

//color background :'#40C4FF'