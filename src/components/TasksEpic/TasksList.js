import React from 'react'
import {FlatList, StyleSheet} from "react-native";
import TaskTile from "./TaskTile";


const TaskList = ({ tasks, onChangeStatus, onDeleteTask }) => {  console.log(tasks)

    const _renderItem = ({ item }) =>
        <TaskTile
            id={item.id}
            completed={item.completed}
            title={item.title}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}
        />

    return (

        <FlatList
         data={tasks}
         renderItem={_renderItem}
         keyExtactor={item => item.id}
         />

    );

}

export default TaskList;