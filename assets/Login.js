import { Image, StyleSheet, Text, View, StatusBar, TextInput, Pressable, ToastAndroid, Modal } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {

    const { navigation, route } = props;
    const { params } = route;


    const [Email, setEmail] = useState(params?.email || '');
    const [Password, setPassword] = useState(params?.password || '');
    const [modalErrorMessageEmail, setModalErrorMessageEmail] = useState(false);
    const [modalErrorMessagePassword, setModalErrorMessagePassword] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    // nút hide/unhide password
    const togglePasswordVisibility = () => {
        if (hidePassword === true) {
            setHidePassword(false);
        } else {
            setHidePassword(true);
        }
    };

    //lấy dữ liệu từ bên register
    useEffect(() => {
        if (params?.email) {
            setEmail(params.email);
        }
        if (params?.password) {
            setPassword(params.password);
        }
    }, [params?.email, params?.password]);


    //đăng nhập bằng API
    const dangnhap = async () => {
        //kiểm tra email bỏ trống
        if (Email === "") {
            setModalErrorMessageEmail(true);
            return;
        }
        //kiểm tra định dạng email
        // const emailRegex = /^[a-z][a-z0-9_\.]{4,31}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i;
        // if (emailRegex.test(Email)){
        //     ToastAndroid.show('Email không đúng định dạng', ToastAndroid.SHORT);
        //     return;
        // }
        //kiểm tra password bỏ trống
        if (Password === "") {
            setModalErrorMessagePassword(true);
            ToastAndroid.show('Password không được bỏ trống', ToastAndroid.SHORT);
            return;
        }
        //API
        await axios.post("https://cro101-b166e76cc76a.herokuapp.com/users/login", {
            email: Email,
            password: Password,
        },
        ).then(function (response) {
            if (response.data.status == true) {
                // lưu email
                AsyncStorage.setItem('email', response.data.user.email);

                //lưu giỏ hàng
                const cart = JSON.stringify(response.data.user.carts);
                AsyncStorage.setItem('cart', cart);

                //chuyển trang
                navigation.navigate('bottom');
            } else {
                ToastAndroid.show('thất bại', ToastAndroid.SHORT);
            }
        }).catch(function (error) {
            ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
        })

    }
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

            <Text style={[styles.text1, { marginTop: 10 }]}>Welcome to Lungo !!</Text>
            <Text style={[styles.text2, { marginTop: 16 }]}>Login to Continue</Text>

            <TextInput
                defaultValue={Email}
                placeholderTextColor='#828282'
                onChangeText={setEmail}
                placeholder='Email Address'
                style={[styles.input, styles.text2, { marginTop: 31, fontSize: 14, fontWeight: '400' }]}
            />
            {modalErrorMessageEmail && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Email không được bỏ trống</Text>
            )}

            <View style={[styles.input, { flexDirection: 'row', justifyContent: 'center', marginTop: 16 }]}>
                <TextInput
                    defaultValue={Password}
                    placeholderTextColor='#828282'
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry={hidePassword}
                    style={[styles.text2, { fontSize: 14, fontWeight: '400', flex: 6 }]}
                />
                <Pressable style={{ flex: 1, marginTop: 10 }} onPress={() => togglePasswordVisibility()}>
                    <Image source={require('./images/icon-eye.png')} style={{ width: 24, height: 24 }} />
                </Pressable>
            </View>
            {modalErrorMessagePassword && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Password không được bỏ trống</Text>
            )}



            <Pressable
                style={[styles.button, { marginTop: 41 }]}
                onPress={() => dangnhap()}>
                <Text style={[styles.text1, { fontSize: 14 }]}>Sign In</Text>
            </Pressable>

            <Pressable
                style={[styles.button, { backgroundColor: 'white', flexDirection: 'row', marginTop: 9 }]}>
                <Image
                    source={require('./images/icons8-google-48.png')}
                    style={[{ width: 15, height: 15 }]}
                />
                <Text style={[styles.text1, { color: '#121212', marginHorizontal: 60 }]}>Sign in with Google</Text>
            </Pressable>

            <View style={{ flexDirection: 'row', marginTop: 31 }}>
                <Text style={[styles.text2]}>Don’t have account? Click </Text>
                <Text
                    style={[styles.text2, { color: '#D17842' }]}
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
                <Text style={[styles.text2]}>Forget Password? Click </Text>
                <Text
                    style={[styles.text2, { color: '#D17842' }]}
                    onPress={() => navigation.reset({ routes: [{ name: 'Register' }] })}
                >
                    Reset
                </Text>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#0C0F14',
    },
    image: {
        width: 142,
        height: 142,
        marginTop: 81,
        marginHorizontal: 117,
    },
    text1: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '700',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#ffffff',
    },
    text2: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '700',
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#828282',
    },
    input: {
        width: 348,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#252A32',
        paddingHorizontal: 17,
    },
    button: {
        width: 348,
        height: 57,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: '#D17842',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHorizonal: {
        flexDirection: 'row',
    }
})