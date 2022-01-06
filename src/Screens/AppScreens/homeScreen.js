import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import HeaderMod from '../../Components/ModuleComponents/headerMod'
import auth from '@react-native-firebase/auth';
import { clearAndNavigate, navigate } from '../../Navigations/mainNavigation'
import Colors from '../../Theme'
import MessageItemMod from '../../Components/ModuleComponents/messageItemMod';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../FirebaseController/User/core'
import { readMessages } from '../../FirebaseController/CRUD/core'
import firestore from '@react-native-firebase/firestore';
import { SwipeListView } from 'react-native-swipe-list-view';
import SwiperHiddenView from '../../Components/ModuleComponents/swiperHiddenView';
import PhoneSvg from '../../Assets/Icons/phoneSvg'

const HomeScreen = () => {

    const [allUsers, setAllUses] = useState(null)
    const globalState = useSelector((state) => state.LoginReducer.userAllData)
    const [activity, setActivity] = useState(true);
    const dispatch = useDispatch()



    useEffect(() => {
        if (globalState) {
            const filter = {
                attr: 'uid',
                operator: '!=',
                filterThing: globalState.uid
            }

            getUsers('users', filter).then((querySnapshot) => {
                const myResult = querySnapshot.docs.map(docsSnap => docsSnap.data())
                setAllUses(myResult)
            })

           firestore().collection('chatrooms').get().then((result)=>{
               console.log(result)
           })

            

        }
    }, [globalState])

    const _handleSignOut = () => {
        auth()
            .signOut().then(() => clearAndNavigate('authStack'))
    }


    // if (activity) return (
    //     <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    //       <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'} />
    //       <ActivityIndicator color={Colors.greenPrimary} size={40} />
    //     </View>
    //   )


    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent={true} barStyle='light-content' backgroundColor={Colors.greenPrimary} />
            <HeaderMod label={'Messages'} rightBtn onPressRight={_handleSignOut} />

            {allUsers ?
                <SwipeListView
                    data={allUsers}
                    closeOnScroll={true}
                    closeOnRowPress={true}
                    closeOnRowOpen={true}
                    closeOnRowBeginSwipe={true}
                    renderItem={(data, rowMap) => {
                        return <MessageItemMod onPress={() => navigate('Chat', { displayName: data.item.name, friendId: data.item.uid })} name={data.item.name} email={data.item.email} imgData={data.item.image} />
                    }}
                    renderHiddenItem={(data, rowMap) => (
                        <>
                            <SwiperHiddenView position >
                                <Text style={{color:'white'}}>Delete</Text>
                            </SwiperHiddenView>
                            <SwiperHiddenView onPress={() => {
                                navigate('Call', { callerName: data.item.name, callerImage: data.item.image })
                            }}
                                bgColor={Colors.greenPrimary} >
                                <PhoneSvg />
                            </SwiperHiddenView>
                        </>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                : null
            }

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },


})
