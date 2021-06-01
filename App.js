import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrador de citas</Text>
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
