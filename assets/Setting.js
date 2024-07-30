import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = (props) => {
    const {navigation} = props;
  return (
    <ScrollView style={{backgroundColor: '#0C0F14'}}>
        <StatusBar
            translucent
            backgroundColor='transparent'/>
        <View style={styles.container}>
            <Text style={[styles.title]}>Setting</Text>
            <View style={[styles.Horixonal, {marginTop: 40}]}>
                <View style={[styles.Horixonal, {width: 197, marginStart: 20}]}>
                    <View>
                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-history.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-person.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-address.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-payment.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-about.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-help.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                        <View style={styles.bg_icon}>
                            <Image
                                source={require('./images/icon-logout.png')}
                                style={{width: 17, height: 17}}/>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.text}>History</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('PersonalDetails')}>Personal Details</Text>
                        <Text style={styles.text}>Address</Text>
                        <Text style={styles.text}>Payment Method</Text>
                        <Text style={styles.text}>About</Text>
                        <Text style={styles.text}>Help</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Log out</Text>
                    </View>
                </View>

                <View style={{marginEnd: 30.6}}>
                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>

                    <Pressable style={{width:12, height:25, marginBottom: 23}}
                        onPress={() => navigation.navigate('PersonalDetails')}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>

                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>
                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>
                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>
                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>
                    <Pressable style={{width:12, height:25, marginBottom: 23}}>
                        <Image
                            source={require('./images/icon-dieuhuong.png')}
                            style={{width:10}}
                        />
                    </Pressable>

                </View>
            </View>
        </View>

        <Pressable style={styles.iconBack} onPress={() => navigation.goBack()}>
        <Image
            source={require('./images/icon-back.png')}
            style={{width: 30, height: 30}}
        />
        </Pressable>

    </ScrollView>
  )
}

export default Setting

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
    title: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 36,
        color: 'white',
        marginTop: 62,
    },
    Horixonal: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    bg_icon: {
        width: 25,
        height: 25,
        backgroundColor: 'rgba(209, 120, 66, 0.20)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 23,
    },
    text: {
        width: 135,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: -1.5,
        marginBottom: 23,
    }

})