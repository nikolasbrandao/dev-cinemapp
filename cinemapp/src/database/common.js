import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (dbname, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(dbname, jsonValue);
  } catch (e) {
    console.log('Database error', e);
  }
};

export const getData = async (dbname) => {
  try {
    const jsonValue = await AsyncStorage.getItem(dbname);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Database error', e);
  }
};
