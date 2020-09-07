import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import TaskList from "./TasksList";
import TaskForm from "./TaskForm";
import CountersContainer from "./Counters.Container";
import FloatingButton from "../_Shared/FLoatingButton";

 function  TasksContainer(props) {
     const [tasks, setTasks] = useState([
        //{id:new Date().getTime(), title: "Nouvelle tâches", completed: false }
     ]);

     const [isFormOpened, setIsFormOpened] = useState(false)

     const onAddTask = (title) => {
         const newTask = {id:new Date().getTime(), title: title, completed: false }
         setTasks([newTask, ...tasks])
     };

     const onChangeStatus =(id) => {
         let newTask = []

         tasks.forEach(task => {
             if (task.id === id) {
                 newTask.push({id: id, title: task.title, completed: !task.completed})
             } else {
                 newTask.push(task);
             }

         });
         setTasks(newTask);
     }

     const onDeleteTask = id => {
         let newTasks = []

         tasks.forEach(task => {
             if ( task.id !== id ) {
                 newTasks.push(task)
             }
         });
         setTasks(newTasks);
     }

     const getTasksCompleted = () => {
         let counter = 0

         tasks.forEach(task => {
             if (task.completed) {
                 counter ++
             }

         })


         return counter
     };

     const toggleForm = () => {
         setIsFormOpened(!isFormOpened)
     }

     return (

         <View style={styles.container}>
             {isFormOpened && <TaskForm onAddTask={onAddTask}/>}
             <CountersContainer nbTasks={tasks.length} nbTasksCompleted={() => getTasksCompleted()}/>
             <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
             <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>

 </View>
     );
 }
 const styles = StyleSheet.create({
     container:{
         flex: 1,
         position:'relative',
     }
 })
 export default TasksContainer;