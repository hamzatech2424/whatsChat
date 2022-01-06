import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import AbstractButton from '../AbstractComponents/AbstractButton'
import Colors from '../../Theme'
import Image from 'react-native-image-progress';
import {Pie} from 'react-native-progress';

const ProfilePicMod = ({onPress,imageAvailable}) => {
    return (
        <View style={styles.mainContainer}>
        <View style={styles.viewOne}>
            {imageAvailable?
            <Image 
            source={{ uri: imageAvailable }} 
            indicator={Pie}
            indicatorProps={{  
              size: 50,
              borderWidth: 0,
              color: Colors.greenPrimary,
              unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
            imageStyle={{borderRadius:60}}
            style={{
             width:moderateScale(117,0.1),
             height:moderateScale(117,0.1),
            }}/>
            :
            <ImageBackground resizeMode='cover' imageStyle={{borderRadius:60}} style={{width:'100%',height:'100%'}} source={require('../../Assets/Images/imagePlaceholder.png')} />
            }
        </View>
        <View style={{marginTop:20}}>
            <AbstractButton
            onPress={onPress}
            label={imageAvailable?'Uploaded':'Upload Image'}
            bgcolor={imageAvailable?'red':Colors.greenPrimary}
            height={30}
            width={140}
            />
        </View>
        </View>
    )
}

export default ProfilePicMod

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    viewOne:{
        width:moderateScale(117,0.1),
        height:moderateScale(117,0.1),
        borderRadius:80,
        // backgroundColor:'red'
    }
})
