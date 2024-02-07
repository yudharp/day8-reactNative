import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import User from '../components/User';
//<Text>Email: {user.email}</Text>
//<Text>Location: {`${user.location.city}, ${user.location.country}`}</Text>

//.catch(error => {
//    console.error('Error fetching user data:', error);
//  });

//.then(response => {
//    if (response.data && response.data.results) {
//      setUserData(response.data.results);
//    } else {
//      console.log('No user data found in response');
//    }
//  })
//  .catch(error => {
//    console.error('Something bad happened', error);
//  });

const ApiData = ({navigation}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                if (response.data && response.data.results) {
                    setUserData(response.data.results);
                } else {
                console.log('No user data found in response');
            }
        } catch (error) {
            console.error('Something bad happened', error);
        }
    };
    fetchData();
  }, []);

  const navigasi = (user) => {
    navigation.navigate('detail', {user});
  }

  return (
    <ScrollView>
    <View>

      <Text>User Data:</Text>
      {userData.map(user => (
        <TouchableOpacity key={user.login.uuid} onPress={() => navigasi(user)}>
          <User user={user}/>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

export default ApiData;