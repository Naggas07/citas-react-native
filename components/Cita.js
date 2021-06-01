import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Cita = ({cita}) => {
  return (
    <View style={styles.cita}>
      <View>
        <Text>Paciente: </Text>
        <Text>{cita.paciente}</Text>
      </View>
      <View>
        <Text>Propietario: </Text>
        <Text>{cita.propietario}</Text>
      </View>
      <View>
        <Text>Sintomas: </Text>
        <Text>{cita.sintomas}</Text>
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
});

export default Cita;
