import React, { useState } from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

function App() {
  const [randomBackground,setrandomBackground] = useState("#C6E7FF");
  const colorGenerator = ()=>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)];
      
    }
    setrandomBackground(color);
  }
  
  return (
    <View style = {styles.outerView, {backgroundColor:randomBackground}} >
      <SafeAreaView>
        <View style={[styles.Container]}>
          <TouchableOpacity onPress={colorGenerator} >
            <View style={[styles.actionBtn]}>
              <Text style={[styles.buttonText]}>Click Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
} 

const styles = StyleSheet.create({
  Container: {
    justify:"center",
    alignItems: "center",
    height:"100%"
   
  },
  actionBtn: {
    marginTop:350,
    borderRadius: 5,
    backgroundColor: "#CB9DF0",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  outerView: {
  


  },
  buttonText: {
    fontSize: 20,
    fontWeight: "thin",
  },
});

export default App;
