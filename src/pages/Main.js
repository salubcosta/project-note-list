import React from "react";
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Main = ({navigation}) => {

  const data = [
    {
      id: '1',
      title: 'React Native',
      annotations: 'Curso de RN excelente',
      read: false,
      photo: null,
    },
    {
      id: '2',
      title: 'A Bíblia do PHP',
      annotations: 'Material de entrada no mundo da programação',
      read: false,
      photo: null,
    },
    {
      id: '3',
      title: 'Symfony com Doctrine',
      annotations: 'Será melhor que laravel?',
      read: false,
      photo: null,
    },
    ];

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
      data={data} 
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