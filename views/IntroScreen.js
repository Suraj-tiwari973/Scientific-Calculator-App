import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import logo from '../assets/calLogo.jpg';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source = {logo} style={styles.innerimg}/>
        </View>
    </View>
  )
}

// StyleSheet...


const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    inner:{
        width:100,
        height:100,
    },
    innerimg:{
        width:100,
        height:100
    }

})

export default IntroScreen;