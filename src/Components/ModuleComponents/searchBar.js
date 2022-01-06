import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import  Colors  from '../../Theme'
import CloseSvg from '../../Assets/Icons/searchBarSvgs/closeSvg'
import SearchSvg from '../../Assets/Icons/searchBarSvgs/searchSvg'
import BackSvg from '../../Assets/Icons/searchBarSvgs/backSvg'
import { goBack } from '../../Navigations/mainNavigation'


const SearchBar = ({value,onChangeText,clearSearchBar}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewTwo}>
                <View style={styles.viewThree} >
                    <View style={styles.viewThreea}>
                     <SearchSvg />
                    </View>
                    <View style={styles.viewThreeb}>
                    <TextInput 
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={Colors.greySecondaryFive}
                    placeholder='Search by Name'
                     style={[{width:'100%',height:'100%'},styles.textOne]} />
                    </View>
                     
                    <View style={styles.viewThreec}> 
                    {/* {value == '' ?
                    <TouchableOpacity
                    onPress={clearSearchBar}
                    >  
                     <CloseSvg />
                    </TouchableOpacity>
                    :null} */}
                    </View>

                </View>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: moderateScale(48, 0.1),
        flexDirection: 'row',
        backgroundColor:'lightgrey'
    },
    viewOne: {
        width: '14%',
        height: '100%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    viewTwo: {
        width: '100%',
        height: '100%',
        // backgroundColor:'green'
    },
    viewThree: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: Colors.blackSecondaryOne,
        flexDirection: 'row'
    },
    viewThreea: {
        width: '10%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    viewThreeb: {
        width: '75%',
        height: '100%',
    },
    viewThreec: {
        width: '12%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textOne:{
        fontFamily:'Manrope-Regular',
        fontSize:moderateScale(14,0.1),
        color:Colors.greySecondaryFive
    },
    backButtonview:{
        width:'100%',
        height:moderateScale(39,0.1),
        backgroundColor:Colors.blackSecondaryOne,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    
    }
})
