import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
        }
    const textChangeHandler = () => {
      props.onAddGoal(enteredGoal);
       setEnteredGoal('')
    }
    const cancelHandler = () => {
      props.onCancel()
      setEnteredGoal('')
    }
    // const clearInput = () => {
    //   setEnteredGoal('')
    // }




    return (
  <Modal visible={props.isVisible} animationType="slide" >
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <TextInput placeholder='Yellow' style={styles.inputText} onChangeText={inputHandler} value={enteredGoal}/> 
        <Button onPress={cancelHandler} title={'Close'}/>
      </View>
      <View style={styles.button}>
       <Button title='Add' style={styles.button} onPress={textChangeHandler} testID={'sait-dinc'}/>
      </View>
    </View>
  </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
            flexDirection: 'column', 
            flex: 1,
            alignItems:'center', 
            marginTop: 4, 
            justifyContent: 'center', 
            alignItems: 'center', 
            alignContent: 'space-between'
      },
      button: {
        marginRight: 8,
        backgroundColor: 'green',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        flexDirection: 'row',
        marginRight: 4,
        marginBottom: 10,
        backgroundColor: 'beige',
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputText: {
        borderColor: 'green', 
        borderWidth: 1, 
        padding: 6, 
        width: '80%',  
        backgroundColor: 'white'
      }
})

export default GoalInput;