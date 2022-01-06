import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const SwiperHiddenView = ({ position,bgColor,children,onPress}) => {

    const defBgColor = bgColor ? bgColor : 'red'

    return (
        <React.Fragment>
            {position ?
                <TouchableOpacity
                onPress={onPress}
                style={[styles.mainContainer, { left: 0,backgroundColor:defBgColor }]}>
                   {children}
                </TouchableOpacity>
                :
                <TouchableOpacity
                onPress={onPress}
                style={[styles.mainContainer, { right: 0 ,backgroundColor:defBgColor }]}>
                    {children}
                </TouchableOpacity>
            }
        </React.Fragment>
    )
}

export default SwiperHiddenView

const styles = StyleSheet.create({
    mainContainer: {
        width: 75,
        height: '96%',
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center'
    },

})
