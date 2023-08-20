import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

const App = ()=>{
    return (
        <View style={styles.Wrapper1}>
            <Text style={styles.header}>Hello world</Text>
            <View><Button title='Add note' onPress={()=>Alert}></Button></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:30,
        fontWeight:'bold',
        margin:10
    },
    Wrapper1:{
        alignContent:'center',
        justifyContent:'center',
        flex:1,
         alignItems:'center'
    }
})
export default App