import { StyleSheet, Text, View } from 'react-native'
import React, {useState, createContext} from 'react'

export const AppContextProvider = createContext();
const AppContext = (props) => {
    const {children} = props;
    const [IdCate, setIdCate] = useState('');
    const [ProductsInCart, setProductsInCart] = useState([]);
    const [DataFavorite, setDataFavorite] = useState([]);

  return (
    <AppContextProvider.Provider value={{
        IdCate: IdCate,
        setIdCate: setIdCate,
        ProductsInCart: ProductsInCart,
        DataFavorite: DataFavorite,
        setDataFavorite: setDataFavorite,
    }}>
        {children}
    </AppContextProvider.Provider>
  )
}

export default AppContext

const styles = StyleSheet.create({})