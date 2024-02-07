import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AddPost = () => {
    const [usertitle, setUsertitle] = useState('');
    const [userbody, setUserbody] = useState('');

    const handleAddPost = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: usertitle,
            body: userbody,
        });

            console.log('News added:', response.data);
        } catch (error) {
            console.error('Error adding news', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add news</Text>
            <TextInput
                style={styles.input}
                placeholders="Masukkan title"
                value={usertitle}
                onChangeText={text => setUsertitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholders="Masukkan body"
                value={userbody}
                onChangeText={text => setUserbody(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
                <Text style={styles.buttonText}>Add news</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles= StyleSheet.create ({
    container:{
        flex : 1,
        padding : 16,
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        marginBottom : 16,
    },
    usertitle:{
        marginBottom:16,
        borderWidth: 1,
        borderColor:'#ddd',
        padding : 10,
        borderRadius:8,
    },
    userbody:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:8,
    },
})

export default AddPost;