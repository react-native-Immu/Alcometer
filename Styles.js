import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
      },
    form: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
      },
    heading: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20,
        marginTop: 20,
        color: '#2196F3'
      },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 16,
      },
    input: {
        marginBottom: 8,
        borderColor: '#333',
        borderBottomWidth: 1,
        padding: 4
      },
    dropdown: {
        marginBottom: 12,
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
        paddingLeft: 4,
        paddingRight: 4,
        marginBottom: 30,
      },
    radiolabel: {
        marginRight: 0,
      },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
      },
      result: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 10,
        fontWeight: 'bold'
      },
      
})