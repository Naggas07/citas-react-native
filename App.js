import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Hook2', propietario: 'Juan2', sintomas: 'No come2'},
    {id: '3', paciente: 'Hook3', propietario: 'Juan3', sintomas: 'No come3'},
  ]);

  const deletePatience = id => {
    const filter = citas.filter(cita => cita.id !== id);
    setCitas(filter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrador de citas</Text>
      <Formulario />
      <Text style={styles.title}>
        {citas.length > 0 ? 'Administra tus citas' : 'No hay citas agrega una'}
      </Text>

      {/* flatlist no renderiza todo a la vez solo lo que se visualiuza */}
      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita cita={item} deletePatience={deletePatience} />
        )}
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
    marginBottom: 20,
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
