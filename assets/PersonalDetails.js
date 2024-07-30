import { Image, StyleSheet, Text, View, StatusBar, TextInput, Pressable, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

const PersonalDetails = (props) => {

    const {navigation} = props;

    const [Name, setName] = useState('Phạm Đình Cang')
    const [Email, setEmail] = useState('cangpdps29144@gmail.com');
    const [Password, setPassword] = useState('Password');
    const [Comfirm, setComfirm] = useState('Re-type password')

  return (
    <SafeAreaView style={{backgroundColor: '#0C0F14'}}>
        <StatusBar
            translucent
            backgroundColor='transparent'
        />

        <View style={styles.container}>

            <Text style={[styles.title]}>Setting</Text>
            <Image
                source={require('./images/avatar.jpg')}
                style={styles.image}
            />

            <TextInput
                placeholderTextColor='#828282'
                onChangeText={setName}
                placeholder='Phạm Đình Cang'
                style={[styles.input, styles.text2, {marginTop:73, fontSize: 14, fontWeight: '400'}]}
            />
            <TextInput
                placeholderTextColor='#828282'
                onChangeText={setEmail}
                placeholder='cangpdps29144@gmail.com'
                style={[styles.input, styles.text2, {marginTop:16, fontSize: 14, fontWeight: '400'}]}
            />
            <View style={[styles.input, {flexDirection: 'row', justifyContent: 'center', marginTop: 16}]}>
                <TextInput
                    placeholderTextColor='#828282'
                    onChangeText={setPassword}
                    placeholder='Password'
                    style={[styles.text2, { fontSize: 14, fontWeight: '400',flex:6}]}
                />
                <Image source={require('./images/icon-eye.png')} style={{flex:1, marginTop: 10, width: 24, height: 24}}/>
            </View>
            <View style={[styles.input, {flexDirection: 'row', justifyContent: 'center', marginTop: 16}]}>
                <TextInput
                    placeholderTextColor='#828282'
                    onChangeText={setComfirm}
                    placeholder='Re-type password'
                    style={[styles.text2, { fontSize: 14, fontWeight: '400',flex:6}]}
                />
                <Image source={require('./images/icon-eye.png')} style={{flex:1, marginTop: 10, width: 24, height: 24}}/>
            </View>

            <Pressable 
                style={[styles.button, {marginTop: 41}]}>
                <Text style={[styles.text1, {fontSize: 14}]}>Save</Text>
            </Pressable>

        </View>

        <Pressable style={styles.iconBack} onPress={() => navigation.goBack()}>
        <Image
            source={require('./images/icon-back.png')}
            style={{width: 30, height: 30}}
        />
        </Pressable>

    </SafeAreaView>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#0C0F14',
        position: 'relative',
    },
    iconBack: {
        width: 30,
        height: 30,
        marginTop: 62,
        marginLeft: 20,
        position: 'absolute',
    },
    image: {
        width: 153,
        height: 153,
        flexShrink: 0,
        borderWidth: 1,
        borderColor: '#21262e',
        borderRadius: 10,
        marginTop: 41,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 36,
        color: 'white',
        marginTop: 62,
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
})