import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [isFollowing, setIsFollowing] = React.useState(false);

  const profileData = {
    name: "Nicolas Wannous",
    title: "Mathematics Teacher & IT student",
    bio: [
      "Why did the limit function go to the party?",
      "Because it could not control its end behavior!",
      "\nDid you hear about statistician who drowned in the river?",
      "The river was, on average, only three feet deep."
    ].join(' ')
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      {/* Header Title */}
      <View style={{ width: '100%', backgroundColor: 'white', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' }}>
        <Text style={{ fontSize: 22, fontWeight: '600', textAlign: 'center', color: 'black' }}>
          Facebook Profile
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 32 }}>
        <View style={{ width: '100%', maxWidth: 500, alignItems: 'center' }}>
          {/* Profile Picture */}
          <Image
            source={require('../../assets/images/G0423016.jpg')}
            style={{ width: 140, height: 140, borderRadius: 70, marginBottom: 32 }}
            resizeMode="cover"
          />
          {/* Name and Title */}
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 8 }}>
            {profileData.name}
          </Text>
          <Text style={{ fontSize: 18, color: '#888', textAlign: 'center', marginBottom: 32 }}>
            {profileData.title}
          </Text>
          {/* Bio Section */}
          <Text style={{ color: '#333', textAlign: 'center', fontSize: 16, lineHeight: 24, marginBottom: 40 }}>
            {profileData.bio}
          </Text>
          {/* Follow Button */}
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={handleFollowToggle}
              style={{
                backgroundColor: isFollowing ? 'lightcoral' : '#0095F6',
                paddingHorizontal: 0,
                paddingVertical: 12,
                borderRadius: 24,
                width: '100%',
                maxWidth: 400,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
