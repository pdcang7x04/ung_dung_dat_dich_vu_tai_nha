import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const FlatView_Favorite = (props) => {
    const {item} = props;
  return (
    <View style={styles.container}>
        <View style={{width: '100%', height: 457}}>
            <Image
                source={{uri: item.product_image}}
                style={styles.image}
            />
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.name}>{item.product_name}</Text>
                    <Text style={styles.text}>Espresso And Hot Water</Text>

                    <View style={{flexDirection: 'row', marginTop: 22, alignItems: 'center'}}>
                        <Image
                            source={require('./images/icons8-star-24.png')}
                            style={{width: 20, height: 20}}
                        />
                        <Text style={[styles.name, {fontSize: 16, width: 'auto'}]}>
                            {item.product_rating}{' '}
                            <Text style={[styles.text, {fontSize: 10}]}>
                                ({item.product_voting})
                            </Text>
                        </Text>
                    </View>
                </View>

                <View style={{marginTop: 17, marginEnd: 18}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Pressable style={styles.bg_icon}>
                        <Image
                            source={require('./images/icon-beans.png')}
                            style={{width: 32.743, height: 27.851}}/>
                            <Text style={[styles.text, {fontSize: 10, width: 'auto'}]}>Coffee</Text>
                    </Pressable>
                    <Pressable style={[styles.bg_icon, {marginHorizontal: 20.06}]}>
                        <Image
                            source={require('./images/icon-water.png')}
                            style={{width: 32.743, height: 27.851, marginTop:6.69}}/>
                            <Text style={[styles.text, {fontSize: 10, width: 'auto'}]}>Coffee</Text>
                    </Pressable>
                    </View>

                    <Pressable style={[styles.bg_icon, {width: 131.486, height: 44.571, marginTop:10}]}>
                        <Text style={[styles.text, {fontSize: 10, width: 'auto'}]}>Medium Roasted</Text>
                    </Pressable>

                </View>
            </View>
            
        </View>

        <Text style={[styles.text, {marginStart: 31, marginTop: 16}]}>Description</Text>
        <Text style={[styles.text, {marginHorizontal: 31,marginTop: 5, color: 'white', fontSize: 12, width: 'auto', height: 'auto', textAlign: 'justify'}]}>
            {item.product_description}
        </Text>
    </View>
  )
}

export default FlatView_Favorite

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 575,
        borderRadius: 25,
        backgroundColor: '#262B33',
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 457,
        position: 'relative',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    view1: {
        width: '100%',
        height: 133,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        width: 176,
        height: 20,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
    },
    text:{
        width: 125,
        height: 15,
        color: '#aeaeae',
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 20,
    },
    view2: {
        marginTop: 27,
        marginStart: 31
    },
    bg_icon: {
        width: 55.714,
        height: 55.714,
        borderRadius: 10,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center',
    }, 

})