import { Image, Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { AppContextProvider } from './AppContext'
import FlatView_Favorite from './FlatView_Favorite';

const Favorite = () => {
  const {DataFavorite} = useContext(AppContextProvider);

  return (
    <ScrollView style={{width: '100%', height: '100%', backgroundColor: '#0C0F14'}}>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Pressable>
            <Image
              source={require('./images/icon-menu.png')}
              style={[styles.menu, {marginLeft: 30}]}
              />
          </Pressable>
          <Text style={styles.title}>Cart</Text>
          <Pressable onPress={() => navigation.navigate('PersonalDetails')}>
              <Image
                  source={require('./images/avatar.jpg')}
                  style={[styles.menu, {marginRight: 30}]}
                  onProgress={() => navigation.navigate('PersonalDetails')}
              />
          </Pressable>
        </View>

        <FlatList
          data={DataFavorite}
          keyExtractor={item => item.product_id}
          renderItem={({item}) => <FlatView_Favorite item={item}/>}
          />
      </View>
    </ScrollView>
  )
}

export default Favorite

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  menu: {
    width: 30,
    height: 30,
    flexShrink: 0,
    marginTop: 59,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 36,
    marginTop: 59,
  } 

});
