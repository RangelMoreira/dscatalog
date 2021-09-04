import React from "react";

import {
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { text, theme } from "../styles";

interface ProductProps {
  id: Number;
  name: String;
  imgUrl: ImageSourcePropType;
  price:Number;
}

const ProductCard: React.FC<ProductProps> = ({id, name, imgUrl, price}) =>{
  return(
    <TouchableOpacity style={theme.productCard}>
      <Image source={imgUrl}/>
      <View style={theme.productDescription}>
        <Text style={text.productName} >{name}</Text>
        <View style={theme.priceContainer} >
          <Text style={text.currency}>R$</Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default ProductCard;