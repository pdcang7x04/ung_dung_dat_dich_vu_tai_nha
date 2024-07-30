import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContextProvider } from './AppContext';

const CoffeeDetails = (props) => {
    const {navigation, route} = props;
    const {item} = route.params;
    const {ProductsInCart} = useContext(AppContextProvider);   
    const [ProductsDetails, setProductsDetails] = useState([]);
    const {setDataFavorite} = useContext(AppContextProvider);

    const ButtonLike = () => {
        ToastAndroid.show('Thêm thành công vào mục đã thích', ToastAndroid.SHORT);
        const favorite = [
            {
                "product_id": ProductsDetails._id,
                "product_name": ProductsDetails.name,
                "product_image": ProductsDetails.image,
                "product_description": ProductsDetails.description,
                "product_rating": ProductsDetails.rating,
                "product_voting": ProductsDetails.voting,
            },
        ];
        setDataFavorite(favorite);
        
    } 

    useEffect(() => {
        const getProducts = async () => {
          const response = await axios.get('https://cro101-b166e76cc76a.herokuapp.com/products/' + item);
          if (response!= null) {
              if (response.data.status == true) {
                  setProductsDetails(response.data.product);
              }else{
                  console.log('lỗi ùi');
              }
          }
        }
        getProducts();
      
      }, [])
      
      const AddToCart = async () => {
        const email = await AsyncStorage.getItem("email");
        const cart = [
            {
                "product_id": ProductsDetails._id,
                "product_name": ProductsDetails.name,
                "product_image": ProductsDetails.image,
                "product_quantity": 1,
                "product_price": ProductsDetails.price,            
            },
        ];


        await axios.post('https://cro101-b166e76cc76a.herokuapp.com/carts', {
            email: email,
            carts: cart,
        }).then(function (response) {
            if (response.data.status == true){
                ToastAndroid.show('Thêm sản phẩm thành công', ToastAndroid.SHORT);
            }
        }).catch(function (error) {
            ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
        })
      }
      
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            translucent
            backgroundColor='transparent'/>
        <ScrollView style={styles.container}>
            
                <ImageBackground 
                        source={{uri: ProductsDetails.image}}
                        style={styles.imageSP}
                >
                    <View style={styles.viewSpDetails}>
                
                        <View style={[styles.horizonal, {marginTop: 59, marginHorizontal: 22}]}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image 
                                    source={require('./images/icon-back.png')}
                                    style={{width: 33.429, height: 33.429}}/>
                            </Pressable>

                            <Pressable onPress={() => ButtonLike()}>
                                <Image 
                                    source={require('./images/icon-like.png')}
                                    style={{width: 33.429, height: 33.429}}/>
                            </Pressable>

                        </View>

                        <View style={styles.bg_details}>
                            <View style={[styles.horizonal]}>
                                <View style={{marginStart: 22, marginTop: 29.97}}>
                                    <Text style={[styles.text_white, {width: 250, height: 22}]}>{ProductsDetails.name}</Text>
                                    <Text style={[styles.text_AEAEAE, {width: 250}]}>Espresso And Hot Water</Text>

                                    <View style={[styles.horizonal, {justifyContent: 'flex-start', marginTop: 24.51}]}>
                                        <Image
                                            source={require('./images/icons8-star-24.png')}
                                            style={{width: 22.286, height: 22.286}}
                                        />
                                        <Text style={[styles.text_white, {fontSize: 16}]}> {ProductsDetails.rating}  </Text>
                                        <Text style={[styles.text_AEAEAE, {fontSize: 10, marginTop: 2}]}>({ProductsDetails.voting})</Text>
                                    </View>
                                </View>
                                
                                <View>
                                    <View style={[styles.horizonal, {marginTop: 18.94}]}>
                                        <Pressable style={styles.bg_icon}>
                                            <Image
                                                source={require('./images/icon-beans.png')}
                                                style={{width: 32.743, height: 27.851}}/>
                                                <Text style={[styles.text_AEAEAE,{fontSize: 10, fontWeight: 500}]}>Coffee</Text>
                                        </Pressable>
                                        <Pressable style={[styles.bg_icon, {marginHorizontal: 20.06}]}>
                                            <Image
                                                source={require('./images/icon-water.png')}
                                                style={{width: 32.743, height: 27.851, marginTop:6.69}}/>
                                                <Text style={[styles.text_AEAEAE,{fontSize: 10, fontWeight: 500}]}>Coffee</Text>
                                        </Pressable>
                                    </View>
                                    
                                    <Pressable style={[styles.bg_icon, {width: 131.486, height: 44.571, marginTop:13.37}]}>
                                        <Text style={[styles.text_AEAEAE,{fontSize: 10}]}>Medium Roasted</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>
                </ImageBackground>

                <View style={[{position: 'absolute', top: 643.77, borderWidth: 2, width: '100%', height: '100%'}]}>
                    <Text style={[styles.text_AEAEAE, {fontSize: 14, fontWeight: '600', marginStart: 20}]}>
                        Description
                    </Text>
                    <Text style={[styles.text_AEAEAE,{marginStart: 20, marginTop: 8, width: 351}]}>
                        {ProductsDetails.description}
                    </Text>
                </View>

                <Text style={[styles.text_AEAEAE,{fontSize: 14, fontWeight: '600', marginStart: 20, marginTop: 141.77}]}>
                    Size
                </Text>

                <View style={[styles.horizonal, {marginHorizontal: 20, marginTop: 12}]}>
                    <Pressable style={[styles.bg_icon, {width: 100, height: 40, borderWidth: 2, borderColor: '#D17842'}]}>
                        <Text style={[styles.text_AEAEAE, {color: '#D17842', fontSize: 16, fontWeight: 500}]}>
                            S
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.bg_icon, {width: 100, height: 40, marginHorizontal: 25}]}>
                        <Text style={[styles.text_AEAEAE, {fontSize: 16, fontWeight: 500}]}>
                            M
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.bg_icon, {width: 100, height: 40}]}>
                        <Text style={[styles.text_AEAEAE, {fontSize: 16, fontWeight: 500}]}>
                            L
                        </Text>
                    </Pressable>
                </View>

                <View style={[styles.horizonal, {marginTop: 28, marginHorizontal: 20}]}>
                    <View style={{}}>
                        <Text style={[styles.text_AEAEAE, {fontWeight: '500', marginStart: 36, marginTop: 9}]}>
                            Price
                        </Text>
                        <Text style={[styles.text_white, {marginStart: 20}]}>
                            <Text style={{color: '#D17842'}}>$ </Text>
                            {ProductsDetails.price}
                        </Text>
                    </View>

                    <Pressable style={styles.btnAdd} onPress={() => AddToCart()}>
                        <Text style={[styles.text_white, {fontSize: 16}]}>Add to Cart</Text>
                    </Pressable>
                </View>

            
        </ScrollView>
    </SafeAreaView>
  )
}

export default CoffeeDetails

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#0C0F14',
    },
    imageSP: {
        width: '100%',
        height: 630.474,
        marginHorizontal: true,
        
        position: 'relative',
    },
    viewSpDetails: {
        width: '100%',
        height: '100%',
        
    },
    horizonal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    bg_details: {
        width: '100%',
        height: 148.2,
        
        marginTop: 389.77,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    text_white: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 22,
    },
    text_AEAEAE: {
        color: '#AEAEAE',
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 20,
    },
    bg_icon: {
        width: 55.714,
        height: 55.714,
        borderRadius: 10,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    btnAdd: {
        width: 240, 
        height: 60,
        borderRadius: 20,
        backgroundColor: '#D17842',
        justifyContent: 'center',
        alignItems: 'center',
    }
})