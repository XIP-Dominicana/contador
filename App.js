import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Switch, Button } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Counter:</Text>
        <Text style={styles.subTitle}>{number}</Text>
      </View>
      <View style={styles.sumControls}>
          <Pressable style={({pressed}) => pressed? {...styles.sumButtons, backgroundColor: '#4141cb'}:styles.sumButtons}
            onPress={() => setNumber(number => number + 1)}>
              <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Pressable style={({pressed}) => pressed? {...styles.sumButtons, backgroundColor: '#4141cb'}:styles.sumButtons}
            onPress={() => setNumber(number => number - 1)}>
              <Text style={styles.buttonText}>-</Text>
          </Pressable>
      </View>
      <View style={styles.resetControls}>
        <Button style={{width: '30%'}} title='reset'/>
        <TextInput style={{width: '50%'}} placeholder='0'/>
        <Switch style={{width: '20%'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: '33%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumControls:{
        height: '33%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resetControls:{
        height: '33%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    title: {
        fontSize: 40
    },
    subTitle: {
        fontSize: 30
    },
    sumButtons: {
        margin: 10,
        backgroundColor: '#2727cc',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 70,
        color: 'white',
        fontWeight: 'bold'
    }
});
