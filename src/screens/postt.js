import React, { useState } from "react";
import { View, text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUser = () => {
    const [usertitle, setUsertitle] = useState('');
    const [userbody, setUserbody] = useState('');

    const handleAddUser = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: usertitle,
            body: userbody,
        });

            console.log('User added:', response.data);
        } catch (error) {
            console.error('Error adding user', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add user</Text>
            <TextInput
                style={styles.input}
                placeholders="Masukkan nama"
                value={usertitle}
                onChangeText={text => setUsertitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholders="Masukkan email"
                value={userbody}
                onChangeText={text => setUserbody(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
                <Text style={styles.buttonText}>Add user</Text>
            </TouchableOpacity>
        </View>
    )
};