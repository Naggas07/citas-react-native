import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Hook2', propietario: 'Juan2', sintomas: 'No come2'},
    {id: '3', paciente: 'Hook3', propietario: 'Juan3', sintomas: 'No come3'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrador de citas</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita cita={item} />}
        keyExtractor={cita => cita.id}
      />
      {/* similar to map */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
});

export default App;
