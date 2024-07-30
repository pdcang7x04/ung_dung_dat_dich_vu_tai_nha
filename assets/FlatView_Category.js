import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContextProvider } from './AppContext';

const FlatView_Category = (props) => {
    const {item} = props;
    const {setIdCate} = useContext(AppContextProvider);
  return (
    <TouchableOpacity onPress={() => setIdCate(item._id)}>
        <View>
        <Text style={styles.textCategory}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default FlatView_Category

const styles = StyleSheet.create({
    textCategory: {
        color: '#52555A',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        marginLeft: 30,
        marginTop: 28,
    },

})