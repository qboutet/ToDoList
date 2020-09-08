import React from 'react';
import {Image, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import icon_check  from '../../../assets/icon_check.png';
import icon_circle from '../../../assets/icon_circle.png';
import icon_bin from '../../../assets/icon_bin.png';

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask }) => {
    return(

        <View style={styles.container}>
           < View style={styles.subContainer}>
             <TouchableOpacity onPress={() => onChangeStatus(id)}>
                <Image
                style={styles.iconCircle}
                source={completed ? icon_check : icon_circle }/>
             </TouchableOpacity>
               <TouchableOpacity onPress={() => onChangeStatus(id)}>
               <Text style={[styles.title, {color: completed ? '#a0c4ff' : '#000D14'}]}>{title}</Text>
               </TouchableOpacity>
           </View>
           <TouchableOpacity onPress={() => onDeleteTask(id)}>
                 <Image style={styles.iconBin}
                       source={ icon_bin }
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