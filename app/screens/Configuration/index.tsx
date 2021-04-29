import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { getItem, setItem } from '../../utils/asyncStorage';

import { Alert } from '../../components/common/Alert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import Screen from '../../components/common/Screen';
import { Share } from '../../components/common/Share';
import { TouchableOpacity } from '../../components/common/TouchableOpacity';
import { darkBlue } from '../../utils/colors';
import styles from './styles';

const Configuration = () => {

  const signOut = async () => {
    await AsyncStorage.removeItem('token')
    navigation.navigate('Login')
  }

  const showError = () => {
    Alert({
      title: 'Attention',
      description: 'Something wrong has happened, please try again later.'
    });
  };

  const handleShare = () => {
    Share({
      message: 'Learn all about movies and series \u{1F37F}',
      url: 'https://www.themoviedb.org/',
      title: 'AmoCinema',
      dialogTitle: 'Learn all about movies and series \u{1F37F}'
    });
  };

  const handleRating = () => {
    Alert({
      title: 'Attention',
      description:
        'Nothing happens now. In the future you will be redirected to store.'
    });
  };

  return (
    <Screen>
      <ScrollView style={styles.bgWhite}>
        <View style={styles.container}>

          <View>
            <TouchableOpacity onPress={handleShare}>
              <View style={styles.item}>
                <Text style={styles.itemText} numberOfLines={2}>
                  Tell a friend
                </Text>
                <Feather
                  name="share"
                  size={22}
                  color={darkBlue}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRating}>
              <View style={styles.item}>
                <Text style={styles.itemText} numberOfLines={2}>
                  Rate the app
                </Text>
                <Feather
                  name="star"
                  size={22}
                  color={darkBlue}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.item, styles.itemNoBorder]}>
              <Text style={styles.itemTextVersion} numberOfLines={2}>
                Version {Constants.manifest.version}
              </Text>
              <TouchableOpacity onPress={() => signOut()}>
                <Text style={styles.itemTextSignOut} numberOfLines={2}>
                  Sign Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Configuration;
