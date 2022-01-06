import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'


const TodoFirestore = () => {

   const [input,setInput] = useState({
       todo:''
   })
   const [myTodos,setMyTodos] = useState([])
   const autoGeId = uuid.v4()


   const createTodo = () =>{
      firestore().collection('Todos').doc(autoGeId).set({...input,id:autoGeId})
      setInput('')
   }

   const readTodo = () => {
    firestore().collection('Todos').get().then((querySnapshot)=>{
      const all = querySnapshot.docs.map((docsSnap)=>docsSnap.data())
        setMyTodos(all)
    })
   }

   const deleteTodo = (id) => {
    firestore().collection('Todos').doc(id).delete().then((result)=>{
        console.log(result,'successFully delete')
    })
   }


   const updateTodo = (id) => {
    firestore().collection('Todos').doc(id).update({todo:'Updated Text'}).then((result)=>{
        console.log(result,'successFully Updated')
    })
   }

   
   useEffect(()=>{

    const subscriber = firestore()
            .collection('Todos')
            .onSnapshot(querySnapshot => {
                const allMessages = querySnapshot.docs.map((docSnap) =>docSnap.data())
                setMyTodos(allMessages)
            },(error)=>{console.log(error)});

        return () => subscriber()


   },[myTodos])


    return (
        <View style={styles.mainContainer}>

         <View style={styles.viewOne}>
             <TextInput
             placeholder='Add todo'
             style={{width:'90%',height:'100%',backgroundColor:'lightgrey'}}
             value={input.todo}
             onChangeText={(txt)=>setInput({...input,todo:txt})}
             />
             <Button 
             title={'Add'}
             onPress={createTodo}
             />
         </View>

         <View style={{flex:2}}>

             {myTodos.map((value,index)=>{
                 return (
                     <View style={styles.viewTwo} key={index}>
                         <Text style={{paddingLeft:20}}>{value.todo}</Text>
                         <View style={{flexDirection:'row'}}>
                         <Button title='Delete' color={'red'} onPress={()=>deleteTodo(value.id)} />
                         <Button title='Update' color={'green'} onPress={()=>updateTodo(value.id)} />
                         </View>
                    </View>
                 ) 
             })}

         </View>


            
        </View>
    )
}

export default TodoFirestore

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    viewOne:{
        width:'100%',
        height:50,
        // backgroundColor:'red',
        flexDirection:'row'
    },
    viewTwo:{
        width:'100%',
        height:50,
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    
})
