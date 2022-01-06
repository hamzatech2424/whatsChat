import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import Colors from '../../Theme'


const AbstractTextinput = ({ value,onChangeInput,lines,labelColor,placeHolder,placeholderColor}) => {

    const deflabelColor = labelColor ? labelColor : Colors.blackPrimary
    const defplaceholderColor = placeholderColor ? placeholderColor : Colors.blackPrimary
    const defPlaceHolder = placeHolder ? placeHolder : 'Text Here'

    return (
        <View style={styles.mainContainer}>
               <TextInput 
                      value={value}
                      onChangeText={onChangeInput}
                      placeholderTextColor={Colors.blackPrimary}
                      placeholder={defPlaceHolder}
                      placeholderTextColor={defplaceholderColor}
                      style={[styles.textOne,{color:deflabelColor,fontWeight:'500',paddingLeft:25,paddingRight:lines ? 15 : 0,fontFamily:'Raleway-Black'}]}
                      />
        </View>
    )
}

export default AbstractTextinput

const styles = StyleSheet.create({
mainContainer:{
    width:'100%',
    backgroundColor:Colors.greySecondaryOne,
    borderRadius:20

}
})
