import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const SubCategoryScreen = (props) => {
    const { catId } = props.route.params;
    const [data, setData] = useState([])

    const api = () => {
        return (
            axios.get(`http://lyricalvideostatus.stickerapp.in/Get_Category/${catId.id}`)
                .then((response) => {
                    setData(response.data.data || [])
                    // console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        )
    }

    useEffect(() => {
        api()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen', { catId: catId.id, subCatId: item.name === 'All' ? 0 : item.id })}>
                    <View style={styles.itemWrapper}>
                        <Image source={{ uri: 'http://lyricalvideostatus.stickerapp.in/' + item.icon }} style={{ height: 60, width: 60 }} />
                        <Text style={[styles.textWrapper, { color: item.color_code }]}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={3}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,

    },
    itemWrapper: {
        backgroundColor: 'white',
        height: 100,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 8,
        shadowRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    textWrapper: {
        textAlign: 'center',
        fontSize: 16,
        padding: 5
    }
})



export default SubCategoryScreen;