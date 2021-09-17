import { api, TOKEN } from "./index";
const queryString = require('query-string');
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProps {
  username: String;
  password: String;
}

export async function login(userInfo: AuthProps){
  const data = queryString.stringify({...userInfo, grant_type: "password"})

  const result = await api.post('oauth/token', data, {
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded',
    }  
  });

  const {access_token} = result.data;
  
  setAsyncKeys("@token", access_token);
  
  return result;
 
}

async function setAsyncKeys(key:string, value:string){
  try{
    await AsyncStorage.setItem(key,value)
  }
  catch(e){
    console.warn(e);
  }
}

export async function isAuthenticated(){
  try{
    const token = await AsyncStorage.getItem("token");
    token ? console.log("Logado") : console.warn("Deslogado");
    console.log(token);
    
  }catch(e){
    console.log(e);
    
  }
}