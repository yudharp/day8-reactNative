import React, { useState } from "react";
import { View, text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AddPost = () => {
    const [usertitle, setUsertitle] = useState('');
    const [userbody, setUsebody] = useState('');

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
                placeholders="Input title"
                value={userName}
                onChangeText={text => setUsertitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholders="Masukkan body"
                value={userEmail}
                onChangeText={text => setUserbody(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
                <Text style={styles.buttonText}>Add news</Text>
            </TouchableOpacity>
        </View>
    )
};

export default AddPost;