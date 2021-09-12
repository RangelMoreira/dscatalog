import React from 'react';

import { View, TextInput } from "react-native";
import { theme } from '../styles';

interface SearchProps {
  placeholder: string;
  search: string;
  setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = (
  { 
    search,
    setSearch,
    placeholder
  }) => {
  return (
    <View style={theme.inputContainer}>
      <TextInput 
        style={theme.searchinput} 
        placeholder={placeholder} 
        value={search} 
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  )

};

export default SearchInput;