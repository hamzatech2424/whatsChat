import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'


const MessageItemMod = ({ imgData, name, email,onPress }) => {

    const defName = name ? name : 'Name Here'
    const defEmail = email ? email : 'xyz@gmail.com'

    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <View style={styles.imageView}>
                    <Image source={{ uri: imgData }} style={{ width: '100%', height: '100%', borderRadius: 40 }} />
                </View>
            </View>
            <View style={styles.viewTwo}>
                <View>
                    <Text style={styles.textOne}>{defName}</Text>
                </View>
                <View>
                    <Text style={styles.textTwo}>{defEmail}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MessageItemMod

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: moderateScale(77, 0.1),
        backgroundColor: 'red',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewOne: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageView: {
        width: 50,
        height: 50,
        borderRadius: 30,
        // backgroundColor: 'green'
    },
    viewTwo: {
        width: '80%',
        height: '100%',
        paddingLeft: 10,
        justifyContent: 'center'
    },
    textOne: {
        fontSize: moderateScale(17, 0.1),
        color: 'black',
        fontWeight: 'bold'
    },
    textTwo: {
        fontSize: moderateScale(15, 0.1),
        color: 'black'
    }
})
