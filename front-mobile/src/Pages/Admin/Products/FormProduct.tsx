import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal, 
  TextInput, 
  ActivityIndicator
} from 'react-native';

import arrow from '../../../assets/arrowLeft.png';

const FormProduct: React.FC = () => {
  const [loading, setLoading] = useState(false);
  //indica se o formulário vai ser editado ou se vai ser de inserção
  const [edit, setEdit] = useState(false);
  const [showCategories, setShowCategories] = useState(true);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "computadores",
    },
    {
      id: 2,
      name: "Videogames",
    },
    {
      id: 3,
      name: "eletronicos",
    },
    {
      id: 4,
      name: "garden",
    },
    {
      id: 1,
      name: "cozinha",
    },
  ])
  const [product, setProduct] = useState({
    name: null,
    description: null,
    imgUrl: null,
    price: null,
    categories: null,

  })
  return (
    <View>
      {
        loading ? <ActivityIndicator size="large" /> :
          (
            <View>
              <Modal 
                visible={showCategories} 
                animationType="fade"
                transparent={true}
                presentationStyle="overFullScreen"

              >
                <View>
                  <ScrollView>
                    {
                      categories.map(
                        cat => (
                          <TouchableOpacity key={cat.id}>
                            <Text>{cat.name}</Text>
                          </TouchableOpacity>  
                        )
                      )
                    }
                  </ScrollView>
                </View>
              </Modal>

              <TouchableOpacity>
                <Image source={arrow} />
                <Text>Voltar</Text>
              </TouchableOpacity>
            </View>
          )
      }

    </View>
  )
}

export default FormProduct;