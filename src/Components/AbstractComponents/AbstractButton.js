import React from 'react'
import { Text, TouchableOpacity, } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import  Colors  from '../../Theme'


const AbstractButton = ({ width, height, bgcolor, label, txtSize, txtColor ,onPress,BorderRad, }) => {

    const defaultHeight = height ? height : moderateScale(45, 0.1)
    const defaultWidth = width ? width : moderateScale(279, 0.1)
    const defaultColor = bgcolor ? bgcolor : Colors.greenPrimary
    const defaultLabel = label ? label : 'TextHere'
    const defaultLabelTextSize = txtSize ? txtSize : moderateScale(15, 0.1)
    const defaultLabelTextColor = txtColor ? txtColor : 'white'
    const defBorderRad = BorderRad ? BorderRad : 20


    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: defaultWidth, height: defaultHeight, backgroundColor: defaultColor, justifyContent: 'center', borderRadius: defBorderRad, alignItems: 'center' }}>
            
            <Text style={{ fontSize: defaultLabelTextSize,fontWeight:'600' ,color: defaultLabelTextColor, fontFamily: 'Raleway-Black',textAlignVertical:'center' }}>{defaultLabel}</Text>
           
        </TouchableOpacity>
    )
}

export default AbstractButton


