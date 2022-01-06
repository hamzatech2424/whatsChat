import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'

const SW = Dimensions.get('window').width
const PW = SW *0.48

const ProductItem = ({name,category,imgUrl}) => {
    return (
        <View style={[styles.mainConatiner,{width:PW}]}>
            <View style={styles.viewOne}>
            <Image resizeMode='center' source={{uri:imgUrl}}  style={{width:'100%',height:'95%'}} />
            </View>
            <View style={styles.viewTwo}>
                <Text numberOfLines={1}>{name}</Text>
                <Text>{category}</Text>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    mainConatiner:{
        height:200,
        marginHorizontal:4,
        marginVertical:10
    },
    viewOne:{
        width:'100%',
        height:'70%',
        backgroundColor:'white',
        paddingTop:10
    },
    viewTwo:{
        width:'100%',
        height:'30%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})
