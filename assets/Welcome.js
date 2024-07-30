import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Welcome = (props) => {
  const {navigation} = props;

  useEffect(() => {
    const times = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(times);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor='transparent'
      />
      <Image
        source={require('./images/logo.jpg')}
        style={styles.image}
        />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0F14',
  },
  image: {
    width: 189,
    height: 189,
  },
})