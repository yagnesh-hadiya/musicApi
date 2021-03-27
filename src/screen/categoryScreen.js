import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CategoryScreen = () => {

    const [data, setData] = useState([])

    const api = () => {
        return (
            axios.get('http://lyricalvideostatus.stickerapp.in/Get_Main_Category')
                .then((response) => {
                    setData(response.data.data || [])
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
                <TouchableOpacity>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.textWrapper}>{item.name}</Text>
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
            numColumns={2}
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
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    textWrapper: {
        textAlign: 'center',
        fontSize: 17,
    }
})
export default CategoryScreen;