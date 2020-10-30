import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoulItem = props => {

    return (
        <View style={styles.listItem}>
             <Text>{props.title}</Text>
            <TouchableOpacity>
                <Text onPress={props.onDelete.bind(this, props.uid)} style={styles.close} >{'X'}</Text>
            </TouchableOpacity>
         </View>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 4,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
         alignContent: 'center',
         justifyContent: 'space-between',
         width: '95%'
      },
      close: {
          alignItems: 'flex-end',
          alignContent: 'space-around', 
          borderColor: 'yellow', 
          backgroundColor: 'yellow',
          width: '120%',
          textAlignVertical: 'center'
      }
});

export default GoulItem;