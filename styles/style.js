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
    image: { height: 150 },
    icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 2
    },
});

export { styles }