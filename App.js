import { Alert, Button, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Styles from './Styles'
import Radiobutton from './components/RadioButton';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [bloodAlc, setBloodAlc] = useState(0)
  const [color, setColor] = useState('green');

  const [gender, setGender] = useState('male')
  const options = [
    { label: 'Male', value: 'male'},
    { label: 'Female', value: 'female'},
  ]

  //DropdownPicker for picking the amount of bottles
  const [bottleOpen, setBottleOpen] = useState(false);
  const [bottleValue, setBottleValue] = useState(0);
  const [bottles, setBottles] = useState([
    {label: '1 bottle', value: 1}, {label: '2 bottles', value: 2}, 
    {label: '3 bottles', value: 3}, {label: '4 bottles', value: 4}, 
    {label: '5 bottles', value: 5}, {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7}, {label: '8 bottles', value: 8}, 
    {label: '9 bottles', value: 9}, {label: '10 bottles', value: 10},
  ]);
  //closes DropdownPicker for time when Bottle is opened
  const onBottleOpen = () => {
    setTimeOpen(false);
  }

  //DropdownPicker for picking the amount of hours
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeValue, setTimeValue] = useState(0);
  const [hours, setHours] = useState([
    {label: '1 hours', value: 1}, {label: '2 hours', value: 2}, 
    {label: '3 hours', value: 3}, {label: '4 hours', value: 4}, 
    {label: '5 hours', value: 5}, {label: '6 hours', value: 6},
    {label: '7 hours', value: 7}, {label: '8 hours', value: 8}, 
    {label: '9 hours', value: 9}, {label: '10 hours', value: 10},
  ]);
  //closes DropdownPicker for bottles when Time is opened
  const onTimeOpen = () => {
    setBottleOpen(false);
  }

const [ok, setOk] = useState(false)

const calculate = () => {
    let result = 0
    let litres = 0
    let grams = 0
    let burning = 0
    let gramsLeft = 0

    if (weight == 0) {
      Alert.alert(
        "Enter weight!",
        "Please enter weight before calculating",
        [
          {
            text: "Ok",
            onPress: () => setOk(true)
          },
          {
            text: "Cancel",
            onPress: () => setOk(false)
          }
        ])
    }
    litres = bottleValue * 0.33;
    grams = litres * 8 * 4.5;
    burning = weight / 10;
    gramsLeft = grams - burning * timeValue;

    if (gender == 'male') {
      result = gramsLeft / (weight * 0.7)
    } else {
      result = gramsLeft / (weight * 0.6)
    }

    if (result < 0 || result == Infinity) {
      setBloodAlc(0)
      setColor('green')
    }else {
      colorSetter(result)
      setBloodAlc(result)
    }
  }

  const colorSetter = (result) => {
    if (result > 0 && result < 0.2) {
      setColor('green')
    } else if (result > 0.21 && result < 0.5) {
      setColor('#FDDA0D')
    }else {
      setColor('red')
    }
  }


  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.form}>
        <Text style={Styles.heading}>Alcometer</Text>
        <Text style={Styles.label}>Weight</Text>
        <TextInput style={Styles.input} placeholder='Type weight' keyboardType='number-pad' value={weight} onChangeText={text => setWeight(text)}/>
        <Text style={Styles.label}>Bottles</Text>
        <DropDownPicker style={Styles.dropdown}
          open={bottleOpen}
          onOpen={onBottleOpen}
          value={bottleValue}
          items={bottles}
          setOpen={setBottleOpen}
          setValue={setBottleValue}
          setItems={setBottles}
          zIndex={3000}
          zIndexInverse={1000}
          listMode="SCROLLVIEW"
        />
        <Text style={Styles.label}>Time</Text>
        <DropDownPicker style={Styles.dropdown}
          open={timeOpen}
          onOpen={onTimeOpen}
          value={timeValue}
          items={hours}
          setOpen={setTimeOpen}
          setValue={setTimeValue}
          setItems={setHours}
          zIndex={2000}
          zIndexInverse={2000}
          listMode="SCROLLVIEW"
        />
        <Text style={Styles.label}>Gender</Text>
        <Radiobutton options={options} onPress={(value) => {setGender(value)}} initialValue={'male'} style={{backgroundColor: '#2196F3'}}/>
        <Text style={[Styles.result, {color: color}]} > {bloodAlc.toFixed(2)}</Text>
        <Button title="Calculate" onPress={calculate}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
