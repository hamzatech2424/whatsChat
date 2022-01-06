import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Alert } from 'react-native'
import LogoSvg from '../../Assets/Icons/logoSvg'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AbstractTextinput from '../../Components/AbstractComponents/abstractTextinput'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../../Theme'
import AbstractButton from '../../Components/AbstractComponents/AbstractButton'
import { clearAndNavigate, navigate, } from '../../Navigations/mainNavigation'
import auth from '@react-native-firebase/auth'



const SignInScreen = () => {
    
     const [loginData,setLoginData] = useState({
         email:'',
         password:''
     })

     
    const _handleLogin = () => {
        auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
            clearAndNavigate('appStack')   
        })
        .catch(error => {
            Alert.alert(error.message)
        });
    }


    const _handleDontHaveAccount = () => {
        navigate('signUp')
    }



    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor={'transparent'} />
            <View
                style={{ ...StyleSheet.absoluteFillObject }}
            >
                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={require('../../Assets/Images/bgImage.png')} />
            </View>

            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <View style={styles.mainContainer}>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 120 }}>
                        <LogoSvg />
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: 50 }}>
                        <Text style={styles.textOne}>Welcome to WhatsChat</Text>
                    </View>

                    <View style={styles.viewOne}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ marginBottom: 30 }}>
                                <AbstractTextinput
                                value={loginData.email}
                                onChangeInput={(txt)=>setLoginData({...loginData,email:txt})}
                                 placeHolder={'Email'}
                                  />
                            </View>
                            <View>
                                <AbstractTextinput
                                 onChangeInput={(txt)=>setLoginData({...loginData,password:txt})}
                                 placeHolder={'Email'}
                                placeHolder={'Password'} />
                            </View>

                        </KeyboardAwareScrollView>
                    </View>

                    <View style={{ alignSelf: 'center' }} >
                        <AbstractButton label={'Log in'} onPress={_handleLogin} />
                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 70 }}>
                        <Text
                        onPress={_handleDontHaveAccount}
                        style={styles.textTwo}>Don't have an account?<Text style={{ color: Colors.greenPrimary }}> SignUp</Text></Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    viewOne: {
        width: '85%',
        height: '19%',
        // backgroundColor:'red',
        alignSelf: 'center',
        marginTop: 80,
    },
    textOne: {
        fontSize: moderateScale(25, 0.1),
        fontWeight: 'bold',
        color: Colors.greySecondary
    },
    textTwo: {
        fontSize: moderateScale(14, 0.1),
    }
})

