import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../../Theme'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import BackBtnSvg from '../../Assets/Icons/backBtnSvg';


const SBH = getStatusBarHeight()

const HeaderMod = ({ label, leftBtn,rightBtn,onPressRight,onPressLeft }) => {

    const defaultLabel = label ? label : 'textHere'

    return (
        <React.Fragment>
            <View style={{ height: SBH }} />
            <View style={styles.mainContainer}>
                <Text style={styles.textOne}>{defaultLabel}</Text>
                {leftBtn ?
                    <TouchableOpacity
                    onPress={onPressLeft}
                    style={styles.viewOne}>
                     <View>
                         <BackBtnSvg height={15} />
                     </View>
                     <View>
                         <Text style={styles.textTwo}>Messages</Text>
                     </View>
                    </TouchableOpacity>
                    : null}

                {rightBtn ?
                    <TouchableOpacity 
                    onPress={onPressRight}
                    style={styles.viewTwo}>
                        <View style={styles.viewThree}>

                        </View>
                    </TouchableOpacity>
                    : null}

            </View>
        </React.Fragment>
    )
}

export default HeaderMod

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: moderateScale(50, 0.1),
        backgroundColor: Colors.greenPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOne: {
        color: 'white',
        fontSize: moderateScale(17, 0.1),
        fontWeight:'bold'
    },
    viewOne: {
        width: 80,
        height: '100%',
        // backgroundColor: 'red',
        position: 'absolute',
        left: 15,
        alignItems:'center',
        flexDirection:'row'
    },
    viewTwo:{
        width: 30,
        height: '100%',
        // backgroundColor: 'red',
        position: 'absolute',
        right: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    viewThree:{
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:'red'
    },
    textTwo:{
        color:'white',
        paddingLeft:5
    }
})
