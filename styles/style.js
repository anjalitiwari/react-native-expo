import { StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#1e1e1e',
    },

    menu: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
    },
    item: {
        backgroundColor: '#000000',
        flexWrap: 'wrap',
        margin: 10
    },
    title: {
        fontSize: 20,
        margin: 10,
        alignContent: 'center',
        color: 'white'
    },
    image: { height: 200, width: 200, margin: 10, marginTop: 0, alignContent: 'center' }
});

export { styles }