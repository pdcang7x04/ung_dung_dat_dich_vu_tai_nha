import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const FlatView_Cart = (props) => {
    const {item} = props;
    const [Quantity, setQuantity] = useState(item.products[0].product_quantity);
    const [Price, setPrice] = useState(item.products[0].product_price)

    //tăng số lượng
    const Ascending = () => {
      const quantity = parseInt(Quantity);
      const quantityUpdate = quantity + 1;
      const priceUpdate = parseFloat(Price) + parseFloat(item.products[0].product_price);
      setQuantity(quantityUpdate);
      setPrice(priceUpdate);
    }
  
    //giảm số lượng
    const Decrease = () => {
      const quantity = parseInt(Quantity);
      const quantityUpdate = quantity - 1;
      if (quantityUpdate < 1){
        setQuantity('1');
        return;
      }
      const priceUpdate = parseFloat(Price) - parseFloat(item.products[0].product_price);
      setQuantity(quantityUpdate);
      setPrice(priceUpdate);
    }
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.products[0].product_image}}
        style={styles.image}
      />
      <View >
        <Text style={styles.txtName}>{item.products[0].product_name}</Text>
        <Text style={styles.text}>With Steamed Milk</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.boxSize}>
            <Text style={styles.txtName}>M</Text>
          </Pressable>
          <Text style={styles.txtPrice}>$ 
            <Text style={{color: 'white'}}>
              {Price}
            </Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 9, justifyContent: 'space-between'}}>
          <Pressable onPress={() => Decrease()}>
            <Image
              source={require('./images/icon-minus.png')}
              style={{width: 28.435, height: 28.435}}
            />
          </Pressable>

          <Text style={[styles.txtQuantity, styles.txtName, {textAlign: 'center', paddingVertical: 5}]}>
            {Quantity}
          </Text>

          <Pressable onPress={() => Ascending()}>
            <Image
              source={require('./images/icon_plus.png')}
              style={{width: 28.435, height: 28.435}}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default FlatView_Cart

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 360,
    height: 154,
    backgroundColor: '#262B33',
    flexDirection: 'row',
    borderRadius: 23,
    marginTop: 14,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 16,
    margin: 12,
  },
  txtName: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  text: {
    color: '#AEAEAE',
    fontFamily: 'Poppins-Bold',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 20,
  },
  boxSize: {
    width: 72, 
    height: 35,
    borderRadius: 10,
    backgroundColor: '#0c0f14',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPrice: {
    color: "#d17842",
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
    marginTop: 16,
    marginLeft: 22,
  },
  txtQuantity: {
    width: 50, 
    height: 30,
    borderRadius: 7,
    borderWidth: 1, 
    borderColor: '#d17842',
    backgroundColor: '#0c0f14',
  } 
})