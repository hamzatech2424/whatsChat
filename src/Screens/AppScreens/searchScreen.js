import React, { useState, useEffect } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategorySelectItem from '../../Components/ModuleComponents/categorySelectItem'
import ProductItem from '../../Components/ModuleComponents/productItem'
import SearchBar from '../../Components/ModuleComponents/searchBar'
import { categoriesData } from '../../Moc/categoriesData'


const SearchScreen = () => {

    const [input, setInput] = useState('')
    const [apiData, setApiData] = useState([])
    const [fullData, setFullData] = useState([])
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products?limit=30')
            .then((response) => response.json())
            .then((result) => {
                setApiData(result)
                setFullData(result)
                setIsLoading(false);
            })
    }, [])


    const _handleSearchMatch = (txt) => {

        const matchedResult = fullData.filter((item) => {
            const itemData = `${item.title.toUpperCase()}`
            const textData = txt.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })

        setApiData(matchedResult)
    }


    const onCategoryChange = (data) => {
        const matchedResult = fullData.filter((item) => {
            const itemData = `${item.category.toUpperCase()}`
            const textData = data.name.toUpperCase();
            return itemData.indexOf(textData) > -1
        })

        setApiData(matchedResult)

        categoriesData.forEach(element => {
            if (element.id == data.id) {
                element.active = true
            }
            else {
                element.active = false
            }
        });

    }




    return (
        <View style={styles.mianConatiner} >
            <SearchBar
                value={input}
                onChangeText={(txt) => {
                    setInput(txt)
                    _handleSearchMatch(txt)
                }}
            />
            <View style={styles.viewFilter} >
                <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row' }} horizontal showsHorizontalScrollIndicator={false} >
                    {categoriesData.map((value, index) => {
                        return <CategorySelectItem onCategoryChange={onCategoryChange} data={value} key={index} />
                    })}
                </ScrollView>
            </View>


            <View style={styles.viewOne}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}  >
                    {isLoading ?
                        <View style={styles.viewActivityIndicator}>
                            <ActivityIndicator color={'red'} size={45} />
                        </View>
                        :
                        apiData.map((value, index) => {
                            return <ProductItem key={index} imgUrl={value.image} category={value.category} name={value.title} />
                        })

                    }
                </ScrollView>

            </View>

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    mianConatiner: {
        flex: 1
    },
    viewOne: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    viewFilter: {
        width: '100%',
        height: 50,
        backgroundColor: 'grey'
    },
    viewActivityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    }
})
