import { Button, ScrollView, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';
import Screen from '../../components/common/Screen';
import { Share } from '../../components/common/Share';
import { TouchableOpacity } from '../../components/common/TouchableOpacity';
import { darkBlue } from '../../utils/colors';
import styles from './styles';
import { useAuthorization } from '../../stores/AuthStore';

const Configuration = (props) => {

  const SignOut = ({ navigation }) => {
    const { signOut } = useAuthorization();
    function navigateAuth() {
      signOut();
      navigation.navigate('Login');
    }
    return <Button title="Sign Out" onPress={navigateAuth} />;
  };

  const handleShare = () => {
    Share({
      message: 'Learn all about movies and series \u{1F37F}',
      url: 'https://www.themoviedb.org/',
      title: 'AmoCinema',
      dialogTitle: 'Learn all about movies and series \u{1F37F}'
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
            <View style={[styles.item, styles.itemNoBorder]}>
              <Text style={styles.itemTextVersion} numberOfLines={2}>
                Version 1.0
              </Text>
              <TouchableOpacity>
                <View style={styles.actions}>
                  <SignOut {...props} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Configuration;
