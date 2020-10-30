import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoulItem from './shared-components/Goulitem';
import GoalInput from './shared-components/GoalInput';

export default function App() {
// const [outputText, setOutputText] = useState("Sait") // array desturactureing first one is our current state snopshot(our starting state)
// // useState gives us an array with two elements first one is current state, second is an function allows us to set the state to a new value
// // calling the second element re-renders the entire component. and first element will refer to the new state
// //
// {/* <Text>{'outputText'}</Text> */}
// {/* <Button title='Change Text' onPress={() => setOutputText('Changed the text to Dinc')}/> */}

const  [outputGoal, setOutputGoal] = useState([])
const [addModal, setAddModal] = useState(false);



 const addTextHandler = goalTitle => {
   if(goalTitle.length === 0) {
     return;
   }
 setOutputGoal( currentGoal => [...currentGoal, {uid: Math.random().toString(), value: goalTitle}])
 }
 const close = () => setAddModal(false);

 const deletItem = itemId => {
  setOutputGoal(currentGoal => {
    return currentGoal.filter((goal) => goal.uid !== itemId)
  })
}

 const outputFunction = () => {
  return (
   <FlatList keyExtractor={(item, index) => item.uid} data={outputGoal} renderItem={ itemData => (
    <GoulItem title={itemData.item.value} uid={itemData.item.uid} onDelete={deletItem}/>
   )} />
 )
 };
 const cancelHandler = () => {
   setAddModal(false)
 }


  return (
    <View style={styles.screen}>
      <Button title={'Show modal'} onPress={() => setAddModal(true)}/>
      <GoalInput  onAddGoal = {addTextHandler} isVisible={addModal} onClose={close} onCancel={cancelHandler}/>
       {outputFunction()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70,
    paddingLeft: 30,
    paddingRight: 16
  }
})
