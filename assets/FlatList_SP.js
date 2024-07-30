import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

const FlatList_SP = (props) => {
    const {navigation, item} = props;
    const ClickSP = (item) => {
        navigation.navigate('CoffeeDetails', {item: item._id});
    };
  return (
    <Pressable style={styles.boxSp} onPress={() => ClickSP(item)}>
        <View style={styles.imageSp}>
            <Image
                source={{ uri: item.image}}
                style={{width: 126, height:126, borderRadius: 23, position: 'relative'}}
            />
            <View style={[styles.Evaluate]}>
                <Image source={require('./images/icons8-star-24.png')} style={{width: 10, height: 10, marginTop: 4}}/>
                <Text style={styles.textEvaluate}>{item.rating}</Text>
            </View>
        </View>
        <Text style={styles.textSp}>{item.name}</Text>
        <Text style={[styles.textSp, {fontSize: 9, marginTop: 1}]}>Espresso And Hot Water</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.textSp, {marginTop:6.3, fontSize: 15, fontWeight: '600'}]}>
                <Text style={{color: '#D17842'}}>$ </Text>
                {item.price}
            </Text>
            <Pressable style={styles.btnAdd}>
                <Image
                    source={require('./images/icons8-add-24.png')}
                    style={{width: 18, height: 18}}/>
            </Pressable>
        </View>
    </Pressable>
)
}

export default FlatList_SP

const styles = StyleSheet.create({
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
        height: 20,
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