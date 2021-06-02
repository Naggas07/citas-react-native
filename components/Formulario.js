import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  // DatePickerAndroid
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // TimePickerAndroid
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = date => {
    console.warn('A Time has been picked: ', date);
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>teléfono:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige una fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
        </View>
        <View>
          <Button title="Show time Picker" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Formulario;
