import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CategorySelectItem = ({ data, onCategoryChange }) => {

 

    return (
        <TouchableOpacity
            onPress={() => onCategoryChange(data)}
            style={[styles.mainContainer, { backgroundColor:data.active?'red':'lightgrey' }]}>
            <Text style={{ color: 'white' }}>{data.name}</Text>
        </TouchableOpacity>
    )
}

export default CategorySelectItem

const styles = StyleSheet.create({
    mainContainer: {
        height: moderateScale(40, 0.1),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5
    }
})
