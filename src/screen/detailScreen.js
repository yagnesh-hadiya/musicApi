import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const DetailScreen = (props) => {
    const { catId, subCatId } = props.route.params;

    const [data, setData] = useState([])

    const api = () => {
        return (
            axios.post('http://lyricalvideostatus.stickerapp.in/Get_Data', {
                category_id: catId,
                sub_category_id: subCatId
            })
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

        // size converter
        function bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }

        return (
            <TouchableOpacity >
                <View style={styles.itemWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/originals/bf/7a/e0/bf7ae016d24704e52f02c16b0b1dca4e.png' }} />
                    </View>
                    <View style={styles.title}>
                        <Text>{item.name}</Text>
                        <Text style={styles.size}>Size: {bytesToSize(item.audio_size)}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <View style={styles.musicWrapper}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.musicImg} source={{ uri: 'https://i.pinimg.com/originals/bf/7a/e0/bf7ae016d24704e52f02c16b0b1dca4e.png' }} />
                </View>
                <View style={styles.musicTitle}>
                    {/* <Text>{data[0].name}</Text> */}
                    {console.log(data.name)}
                    <Text style={styles.size}>yagnesh</Text>
                </View>
                <View style={{ height: 25, width: 25, justifyContent: 'center', }}>
                    {/* <Image style={styles.musicImg} source={{ uri: 'https://freepngimg.com/download/play_button/25623-4-play-button-transparent-background.png' }} /> */}
                    <Image style={styles.musicImg} source={{ uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/button-pause-png-4-Transparent-Images.png' }} />
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    itemWrapper: {
        backgroundColor: 'white',
        height: 80,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 8,
        shadowRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,

    },
    musicWrapper: {
        backgroundColor: '#f1f1f1',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 70,
        alignItems: 'center'
    },
    img: {
        height: 45,
        width: 45,
    },
    musicImg: {
        height: 35,
        width: 35,
    },
    title: {
        width: 260,
    },
    musicTitle: {
        width: 230,
    },
    size: {
        color: 'gray',
        paddingTop: 3
    },
    textWrapper: {
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
        flexWrap: 'wrap',
    }
})



export default DetailScreen;