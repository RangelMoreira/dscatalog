import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import { SearchInput, ProductCard} from '../../components';
import {getProducts} from '../../services';

const Products = () => {
  
  async function fillProducts() {
    setLoading(true);

    const res = await getProducts();

    setProducts(res.data.content)

    setLoading(false);

  }

  useEffect(() => {
    fillProducts();
  }, [])

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text>Tela de produto (tela temporária)</Text>
    </View>

  )
}

export default Products;