import React, { useState, useEffect, useRef } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import HeaderMod from '../../Components/ModuleComponents/headerMod'
import Colors from '../../Theme'
import firestore from '@react-native-firebase/firestore'
import { goBack } from '../../Navigations/mainNavigation'
import { GiftedChat } from 'react-native-gifted-chat'
import { useSelector, useDispatch } from 'react-redux'
import { createMessage, readMessages, updateMessage, deleteMessage } from '../../FirebaseController/CRUD/core'
import uuid from 'react-native-uuid'

const ChatScreen = ({ route }) => {

    const { displayName, friendId } = route.params
    const globalState = useSelector((state) => state.LoginReducer.userAllData)
    const [messages, setMessages] = useState([]);
    const docId = friendId > globalState.uid ? globalState.uid + '-' + friendId : friendId + '-' + globalState.uid
    const uniMessagId = uuid.v4()

    const _handleLongPress = (selectedId) => {


        // updateMessage('chatrooms', docId, 'messages', selectedId, { text: 'updated' })
        //     .then((result) => {
        //         console.log(result)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })


        deleteMessage('chatrooms', docId, 'messages', selectedId)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    useEffect(() => {
        const filter = {
            attr: 'createdAt',
            value: 'desc'
        }

    

        firestore().collection('chatrooms').doc('Rk89hvjmnXOen7uAwXun')
        .get()
        .then((result) => {
            console.log(result.docs)
        })
        .catch((error) => {
            console.log(error)
        })
        
        // const subscriber = firestore()
        //     .collection('chatrooms')
        //     .doc(docId)
        //     .collection('messages')
        //     .orderBy(filter.attr, filter.value)
        //     .onSnapshot(querySnapshot => {
        //         const allMessages = querySnapshot.docs.map((docSnap) => {
        //             return {
        //                 ...docSnap.data(),
        //                 createdAt: docSnap.data().createdAt.toDate()
        //             }
        //         })
        //         setMessages(allMessages)
        //     },(error)=>{console.log(error)});
        


        // return () => subscriber()

    }, [])



    const onSend = (messageArray) => {

        const giftedMessageParams = messageArray[0]

        const myMessage = {
            ...giftedMessageParams,
            sendTo: friendId,
            sendBy: globalState.uid,
            createdAt: new Date(),
            _id: uniMessagId
        }

        setMessages(previousMessages => GiftedChat.append(previousMessages, myMessage))

        // createMessage('chatrooms', docId, 'messages', uniMessagId, myMessage)
        //     .then((result) => console.log('message Created'))

        firestore().collection('chatrooms')
            .doc()
            .collection('messages')
            .doc()
            .set(myMessage)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })





    }



    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent={true} barStyle='light-content' backgroundColor={Colors.greenPrimary} />
            <HeaderMod label={displayName} leftBtn onPressLeft={() => goBack()} />


            <GiftedChat
                messages={messages}
                onSend={messages => {
                    onSend(messages)
                }}
                alwaysShowSend={true}
                showUserAvatar={false}
                user={{
                    _id: globalState.uid,
                }}
                onLongPress={(context, pressedMsg) => {
                    _handleLongPress(pressedMsg._id)
                }}

            />


        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

