import { Image, StyleSheet, Text, View, StatusBar, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Register = (props) => {

    const { navigation } = props;

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Comfirm, setComfirm] = useState('')
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const [modalErrorMessageEmail, setModalErrorMessageEmail] = useState(false);
    const [EmailRegex, setEmailRegex] = useState(false);
    const [modalErrorMessageName, setModalErrorMessageName] = useState(false);
    const [modalErrorMessagePassword, setModalErrorMessagePassword] = useState(false);
    const [modalErrorMessageConfirm, setModalErrorMessageConfirm] = useState(false);
    const [modalErrorMessageConfirm2, setModalErrorMessageConfirm2] = useState(false);

    const togglePasswordVisibility = () => {

        if (hidePassword === true) {
            setHidePassword(false);
        } else {
            setHidePassword(true);
        }
    };
    const toggleConfirmPasswordVisibility = () => {

        if (hideConfirmPassword === true) {
            setHideConfirmPassword(false);
        } else {
            setHideConfirmPassword(true);
        }
    };

    const dangky = async () => {
        if (Name.trim() === "") {
            setModalErrorMessageName(true);
            return;
        }
        if (Email === "") {
            setModalErrorMessageEmail(true)
            return;
        }
        // const emailRegex = /^[a-z][a-z0-9_\.]{4,31}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i;
        // if (emailRegex.test(Email)){
        //     ToastAndroid.show('Email không đúng định dạng', ToastAndroid.SHORT);
        //     setEmailRegex(true);
        //     return;
        // }
        if (Password === "") {
            setModalErrorMessagePassword(true)
            return;
        }
        if (Comfirm === "") {
            setModalErrorMessageConfirm(true)
            return;
        }
        if (Comfirm !== Password) {
            ToastAndroid.show("password không đúng định dạng", ToastAndroid.SHORT);
            setModalErrorMessageConfirm2(true)
            console.log(Password)
            return;
        }

        await axios.post("https://cro101-b166e76cc76a.herokuapp.com/users/register", {
            email: Email,
            password: Password,
            name: Name
        },
        ).then(function (response) {
            if (response != null) {
                if (response.data.status == true) {
                    navigation.navigate('Login', { email: Email, password: Password });
                } else {
                    ToastAndroid.show('thất bại', ToastAndroid.SHORT);
                }
            }
        }).catch(function (error) {
            ToastAndroid.show('Đăng ký thất bại' + error, ToastAndroid.SHORT);
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
            <Text style={[styles.text2, { marginTop: 16 }]}>Register to Continue</Text>

            <TextInput

                onChangeText={setName}
                placeholder='Name'
                placeholderTextColor='#828282'
                style={[styles.input, styles.text2, { marginTop: 31, fontSize: 14, fontWeight: '400' }]}
            />
            {modalErrorMessageName && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Name không được bỏ trống</Text>
            )}


            <TextInput

                onChangeText={setEmail}
                placeholder='Email Address'
                placeholderTextColor='#828282'
                style={[styles.input, styles.text2, { marginTop: 16, fontSize: 14, fontWeight: '400' }]}
            />
            {modalErrorMessageEmail && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Email không được bỏ trống</Text>
            )}
            {EmailRegex && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Email không đúng định dạng</Text>
            )}



            <View style={[styles.input, { flexDirection: 'row', justifyContent: 'center', marginTop: 16 }]}>
                <TextInput
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




            <View style={[styles.input, { flexDirection: 'row', justifyContent: 'center', marginTop: 16 }]}>
                <TextInput
                    placeholderTextColor='#828282'
                    onChangeText={setComfirm}
                    placeholder='Re-type password'
                    secureTextEntry={hideConfirmPassword}
                    style={[styles.text2, { fontSize: 14, fontWeight: '400', flex: 6 }]}
                />
                <Pressable style={{ flex: 1, marginTop: 10 }} onPress={() => toggleConfirmPasswordVisibility()}>
                    <Image source={require('./images/icon-eye.png')} style={{ width: 24, height: 24 }} />
                </Pressable>
            </View>
            {modalErrorMessageConfirm && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Confirm Password không được bỏ trống</Text>
            )}
            {modalErrorMessageConfirm2 && (
                <Text style={{ color: 'red', alignSelf: 'flex-start', marginStart: 35 }}>Password không trùng khớp</Text>
            )}



            <Pressable
                style={[styles.button, { marginTop: 41 }]}>
                <Text style={[styles.text1, { fontSize: 14 }]}
                    onPress={() => dangky()}>Register</Text>
            </Pressable>

            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text2]}>You have an account? Click </Text>
                <Text
                    style={[styles.text2, { color: '#D17842' }]}
                    onPress={() => navigation.navigate('Login')}
                >
                    Sign in
                </Text>
            </View>

        </View>
    )
}

export default Register

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