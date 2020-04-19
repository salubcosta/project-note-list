import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";

const Note = ({navigation}) => {

const [title, setTitle] = useState();
const [description, setDescription] = useState();
const [photo, setPhoto] = useState();

const onSave = ()=>{
/**
 * Validar Dados
 * Salvar no DB
 */
};

return (
<View style={styles.container}>
  <Text style={styles.pageTitle}>Inclua sua nova nota</Text>

  <TextInput 
    style={styles.input} 
    placeholder='Título'
    value={title}
    onChangeText={(text)=>{
      setTitle(text)
    }} />

  <TextInput 
    style={styles.input} 
    placeholder='Descrição'
    multiline = {true}
    numberOfLines ={4} />

  <TouchableOpacity style={styles.cameraButton}>
    <Icon name='photo-camera' size={18} color='#fff' />
  </TouchableOpacity>

  <TouchableOpacity 
    style={styles.saveButton}
    onPress={onSave}>
    <Text style={styles.saveButtonText}>Cadastrar</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.cancelButton}
    onPress={()=>{
      navigation.goBack();
    }}>
    <Text style={styles.cancelButtonText}>Cancelar</Text>
  </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20
  },
  input:{
    fontSize: 16,
    borderBottomColor: '#f39c12',
    borderBottomWidth: 1,
    marginBottom:10
  },
  cameraButton:{
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  saveButton:{
    backgroundColor: '#f39c12',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  saveButtonText:{
    color: '#fff',
    fontSize: 16
  },
  cancelButton:{
    alignSelf: 'center'
  },
  cancelButtonText:{
    color: '#95a5a6'
  }
});

export default Note;
