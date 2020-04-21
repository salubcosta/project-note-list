import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Main = ({navigation}) => {

  const [nota, setNota] = useState([]);

  useEffect(()=>{
    // Função executada quando a tela é renderizada
    //getItem trabalha com Promise, então deve-se utilzar o then
    AsyncStorage.getItem('Nota').then(data =>{
      setNota(JSON.parse(data));
    });
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.toolBox}>
        <Text style={styles.title}>Lista de Notas</Text>
        <TouchableOpacity style={styles.toolBoxButton}
          onPress={()=>{
            navigation.navigate('Note');
          }}
          >
          <Icon name="add" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList 
      data={nota} 
      renderItem={({item}) => (
        <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      )} 
      keyExtractor={item => item.id} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 5,
  },
  toolBox:{
    flexDirection: 'row',
    marginBottom: 5,
  },
  title:{
    flex: 1,
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  toolBoxButton:{
    width: 22,
    height: 22,
    backgroundColor: '#3498db',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16,
  },
});

export default Main;