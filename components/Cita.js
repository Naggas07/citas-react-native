import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const Cita = ({cita, deletePatience}) => {
  const deleteDialog = id => {
    console.log('delete dialog', id);
    deletePatience(id);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.text}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.text}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.text}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => deleteDialog(cita.id)}
          style={styles.buttonDelete}>
          <Text style={styles.deleteText}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  buttonDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cita;
