import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.12)',
        borderRadius: 10,
        height: 35,
        flexDirection: 'row',
    },
    text:{
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    }

})

export default styles;