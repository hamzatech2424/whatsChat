import React from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, StatusBar, TouchableOpacity } from 'react-native'
import BackBtnSvg from '../../Assets/Icons/backBtnSvg'
import { goBack } from '../../Navigations/mainNavigation'



const CallScreen = ({name,imgUrl,route}) => {

    const {callerName,callerImage} = route.params
    const defName = name ? name : callerName

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
            <View style={[{ ...StyleSheet.absoluteFillObject }]}>
                 <View style={styles.headerView} >
                     <TouchableOpacity
                     style={{padding:20}}
                     onPress={()=>goBack()}
                     >
                     <BackBtnSvg height={20} />
                     </TouchableOpacity>
                 </View>
                <ImageBackground style={{ width: '100%', height: '100%' }} blurRadius={17} source={{uri:callerImage}} />
            </View>

            <View style={[{ ...StyleSheet.absoluteFillObject }, { justifyContent: 'center', alignItems: 'center' }]}>
                <View style={styles.viewOne}>
                    <View style={{marginTop:100}}>
                        <View style={styles.imageView}>
                         <ImageBackground resizeMode='cover' imageStyle={{borderRadius:100}}  style={{width:'100%',height:'100%'}} source={{uri:callerImage}} />
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:17,color:'white'}}>{defName}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default CallScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerView:{
     position:'absolute',
     top:0,
    //  backgroundColor:'red',
     height:70,
     width:'100%',
     zIndex:999,
     justifyContent:'flex-end'
    },
    viewOne: {
        width: '70%',
        height: '80%',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        // backgroundColor: 'pink'
    }
})
