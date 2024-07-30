import 'react-native-gesture-handler'
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import PersonalDetails from './PersonalDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import Favorite from './Favorite';
import Notification from './Notification';
import FlatList_SP from './FlatList_SP';
import axios from 'axios';
import AppContext, {AppContextProvider} from './AppContext';
import FlatView_Category from './FlatView_Category';


const TabBottom = createBottomTabNavigator();

const Home = (props) => {

    const {navigation} = props;

    const [Search, setSearch] = useState('Find Your Coffee...');
    const [Category, setCategory] = useState([]);
    const [Products, setProducts] = useState([]);
    const {IdCate} = useContext(AppContextProvider);
    

    //load danh sách category
    useEffect(() => {
        const getCatagory = async () => {
            const response = await axios.get('https://cro101-b166e76cc76a.herokuapp.com/categories');
            if (response != null){
                if (response.data.status == true){
                    setCategory(response.data.categories);
                }else{
                    console.log('lỗi ùi');
                }
            }
        } 
        getCatagory();
    }, [])

    //load danh sách sản phẩm theo category
    useEffect(() => {
        const getProducts = async () => {
            await axios.get("https://cro101-b166e76cc76a.herokuapp.com/products", {
                params: {
                    category: IdCate,
                }
            }).then(function (response) {
                if (response.data.status == true){
                    setProducts(response.data.products);
                }
            }).catch(function (error) {
                ToastAndroid.show('Lỗi', ToastAndroid.SHORT);
            });
        }
        getProducts();
    }, [IdCate])
    


  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            translucent
            backgroundColor= 'transparent'
        />
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Pressable onPress={() => navigation.navigate('Setting')}>
                    <Image
                        source={require('./images/icon-menu.png')}
                        style={[styles.menu, {marginLeft: 20}]}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PersonalDetails')}>
                    <Image
                        source={require('./images/avatar.jpg')}
                        style={[styles.menu, {marginRight: 20}]}
                        onProgress={() => navigation.navigate('PersonalDetails')}
                    />
                </Pressable>
            </View>

            <Text style={styles.content}>Find the best coffee for you</Text>
            
            <View style={[styles.input]}>
                <Image source={require('./images/icon-search.png')} style={{width: 20, height: 20, flex: 1, marginTop: 10}}/>
                <TextInput
                    placeholderTextColor='#828282'
                    onChangeText={setSearch}
                    placeholder='Find Your Coffee...'
                    style={[{flex: 13, color: '#828282',marginLeft: 5}]}
                />
            </View>

            <FlatList
                data={Category}
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <FlatView_Category item={item}/>}/>
            
            <FlatList 
                style={{marginStart: 30, marginTop: 36}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Products}
                keyExtractor={item => item._id}
                renderItem={({item}) => <FlatList_SP navigation={navigation} item={item}/>}               
            />

            <Text style={[styles.textSp, {marginTop: 23.32, marginLeft: 30, fontSize: 16, fontWeight: '500'}]}>
                Coffee beans
            </Text>

            <FlatList 
                style={{marginStart: 30, marginTop: 19}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Products}
                keyExtractor={item => item._id}
                renderItem={({item}) => <FlatList_SP navigation={navigation} item={item}/>}               
            />
            <View style={{height: 80}}></View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C0F14',
        position: 'relative',
    },
    menu: {
        width: 30,
        height: 30,
        flexShrink: 0,
        marginTop: 59,
        borderWidth: 1,
        borderRadius: 10,
    }, 
    content: {
        width: 200,
        height: 72,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: 28,
        lineHeight: 36,
        color: 'white',
        marginLeft: 30,
        marginTop: 39,
    },
    input:{
        width: 330,
        height: 45,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#141921',
        marginHorizontal: 30,
        marginTop: 28,
        paddingHorizontal: 20,
        flexDirection: 'row',
        
    },
    textCategory: {
        color: '#d17842',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        marginLeft: 30,
        marginTop: 28,
    },
    boxSp: {
        width: 149,
        height: 245.679,
        flexShrink: 0,
        borderRadius: 23,
        backgroundColor: '{rgba(37, 42, 50, 1), rgba(38, 43, 51, 0)}',
        marginRight: 22,
    },
    imageSp: {
        width: 126,
        height: 126,
        marginHorizontal: 11,
        marginTop: 12,
        borderRadius: 23,
    }, 
    Evaluate:{
        width: 53,
        height: 22,
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopEndRadius: 23,
        borderBottomStartRadius: 26
    },
    textEvaluate:{
        height: 20,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        marginLeft: 5,
        marginRight: 12,
        
    },
    textSp: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 13, 
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        marginLeft: 12.51,
        marginTop: 10,
    },
    btnAdd: {
        width: 28.435,
        height: 28.435,
        borderRadius: 10,
        marginRight: 15.9,
        backgroundColor: '#D17842',
        justifyContent: 'center',
        alignItems: 'center',
    }

})