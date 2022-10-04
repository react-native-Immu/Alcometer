import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Styles'

export default function Radiobutton(props) {
    const [value, setValue] = useState(props.initialValue)

    const hanleRadiobuttonPress = (selectedValue) => {
        setValue(selectedValue)
        props.onPress(selectedValue)
    }

  return (
    <>
    {
        props.options.map((item) => (
            <View key={item.value} style={Styles.buttonContainer}>
                <Text style={Styles.radiolabel}>{item.label}</Text>
                <Pressable style={Styles.circle} onPress={() => hanleRadiobuttonPress(item.value)}>
                    {value === item.value && <View style={[Styles.checkedCircle, props.style]} />}
                </Pressable>
            </View>
        ))
    }
    </>
  )
}