import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Button, Alert } from 'react-native';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>

        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} // Replace with a profile image URL
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>ootd_everyday</Text>
            <Text style={styles.profileSubtext}>via frenchie_fry39</Text>
          </View>
          
          
        </View>

       
        <Image
          source={require('./assets/post.jpeg')} 
          style={styles.postImage}
           />
  
        <Text style={styles.likesText}>Liked by paisley.print.48 and 7 others</Text>

    
        <View style={styles.captionContainer}>
          <Text>
            <Text style={styles.username}>frenchie_fry39 </Text>
            Fresh shot on a sunny day! 
          </Text>
        </View>

       
        <Text style={styles.viewComments}>View all 12 comments</Text>
        <Text style={styles.comment}>
          <Text style={styles.username}>lil_wyatt838 </Text>
          Awesome tones
        </Text>
        <Text style={styles.comment}>
          <Text style={styles.username}>pia.in.a.pod </Text>
          Gorg. Love it! 
        </Text>
        <Text style={styles.timestamp}>1 day ago</Text>
        <View style={styles.button}>
          <Button
          title="Alert"
          onPress={() => Alert.alert('Alert Button pressed')}
           />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    
    marginRight:40,
    padding: 100,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  profileSubtext: {
    color: 'gray',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actionBar: {
    flexDirection: 'row',
    padding: 10,
  },
  actionIcon: {
    marginRight: 15,
  },
  likesText: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
  },
  captionContainer: {
    marginHorizontal: 10,
    marginTop: 5,
    padding:5,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
  },
  viewComments: {
    color: 'gray',
    marginHorizontal: 10,
    marginTop: 5,
  },
  comment: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  timestamp: {
    color: 'gray',
    fontSize: 10,
    marginHorizontal: 10,
    marginTop: 5,
  },
});