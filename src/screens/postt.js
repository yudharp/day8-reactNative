import React, { useState } from "react";
import { View, text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleAddUser = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            name: userName,
            email: userEmail,
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
                value={userName}
                onChangeText={text => setUserName(text)}
            />
            <TextInput
                style={styles.input}
                placeholders="Masukkan email"
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
                <Text style={styles.buttonText}>Add user</Text>
            </TouchableOpacity>
        </View>
    )
};