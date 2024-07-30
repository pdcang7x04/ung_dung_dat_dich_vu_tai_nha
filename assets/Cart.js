import { Image, Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FlatView_Cart from './FlatView_Cart'
import { AppContextProvider } from './AppContext'

const Cart = () => {
  const [DataCart, setDataCart] = useState([]);

  //load sản phẩm trong giỏ hàng
  useEffect(() => {
    const getCart = async () => {
      const cart = await AsyncStorage.getItem('cart');
      setDataCart(JSON.parse(cart));
    };
    getCart();
  }, []);

  // if (DataCart.length > 0) {
  //   console.log(DataCart[0].products[0].product_quantity);
  // }
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
          data={DataCart}
          keyExtractor={item => item.products[0].product_id}
          renderItem={({item}) => <FlatView_Cart item={item}/>}
          />
      </View>
    </ScrollView>
  )
}

export default Cart

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


const datacart = [
  {
    product_id: 1,
    product_name: 'coffee',
    product_image: 'https://i.pinimg.com/564x/de/70/e9/de70e97e57073ccc141876099df293ee.jpg',
    product_quantity: 1,
    product_price: 123,            
  },
];