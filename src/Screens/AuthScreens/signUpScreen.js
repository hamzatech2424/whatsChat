import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AbstractTextinput from '../../Components/AbstractComponents/abstractTextinput'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../../Theme'
import AbstractButton from '../../Components/AbstractComponents/AbstractButton'
import ProfilePicMod from '../../Components/ModuleComponents/profilePicMod'
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage';
import { navigate } from '../../Navigations/mainNavigation'
import { creatingUser } from '../../FirebaseController/User/core'

const SignUpScreen = () => {

    const [loginData, setLoginData] = useState({
        name: '',
        email: '',
        password: '',
        imageUrl: ''
    })

    const imagePickedFromGallery = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: false,
        }).then(image => {
            const uploadTask = storage().ref().child(`userProfile/${Date.now()}`).putFile(image.path)
            uploadTask.on('state_changed', (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                if (progress == 100) {
                    console.log('successfully uploaded image to firbase Storage')
                }
            },
                (error) => {
                    console.log(error)
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                        console.log(downloadUrl)
                        setLoginData({ ...loginData, imageUrl: downloadUrl })
                    })
                }
            )
        });
    };

    const _handleImage = () => {
        imagePickedFromGallery()
    }

    const _handleSignUp = () => {
        if (loginData.email == '' || loginData.password == '' || loginData.imageUrl == '' || loginData.name == '') {
            Alert.alert('Please fill all the fields')
            return
        }
         auth().createUserWithEmailAndPassword(loginData.email, loginData.password)
            .then((response) => {
                creatingUser(
                    'users',
                    response.user.uid,
                    {
                        name: loginData.name,
                        email: response.user.email,
                        uid: response.user.uid,
                        image: loginData.imageUrl,
                        password: loginData.password
                    }
                ).then((result) => {
                    Alert.alert('User account created & signed in!');
                    navigate('signIn')
                }).catch((error)=>{
                     Alert.alert(error)
                })

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    Alert.alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert('That email address is invalid!')

                }

            });

    }

    const _alreadyHaveAccount = () => {
        navigate('signIn')
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

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 135 }}>
                        <ProfilePicMod onPress={_handleImage} imageAvailable={loginData.imageUrl} />
                    </View>


                    <View style={styles.viewOne}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ marginBottom: 30 }}>
                                <AbstractTextinput
                                    value={loginData.name}
                                    onChangeInput={(txt) => setLoginData({ ...loginData, name: txt })}
                                    placeHolder={'Name'}
                                />
                            </View>
                            <View style={{ marginBottom: 30 }}>
                                <AbstractTextinput
                                    value={loginData.email}
                                    onChangeInput={(txt) => setLoginData({ ...loginData, email: txt })}
                                    placeHolder={'Email'}
                                />
                            </View>
                            <View>
                                <AbstractTextinput
                                    onChangeInput={(txt) => setLoginData({ ...loginData, password: txt })}
                                    placeHolder={'Email'}
                                    placeHolder={'Password'} />
                            </View>

                        </KeyboardAwareScrollView>
                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 25 }} >
                        <AbstractButton label={'Sign Up'} onPress={_handleSignUp} />
                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 70 }}>
                        <Text
                            onPress={_alreadyHaveAccount}
                            style={styles.textTwo}>Already have account?<Text style={{ color: Colors.greenPrimary }}> Log In</Text></Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    viewOne: {
        width: '85%',
        height: '25%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 60,
    },
    textOne: {
        fontSize: moderateScale(25, 0.1),
        fontWeight: 'bold',
        color: Colors.greySecondary
    },
    textTwo: {
        fontSize: moderateScale(14, 0.1),
    },

})
