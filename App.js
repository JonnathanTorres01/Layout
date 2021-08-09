import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       {
       /**
        * Crear un contenedor en forma de columna (vertical) con 3 cajas del mismo tamaño todas.
        */
       }
       { /** 
       <View style={{flexDirection: 'row', flex: 1}}>
       <View style={{flex: 1}}>
         <View style={{backgroundColor: '#faf0f3', flex: 1}}></View>
         <View style={{backgroundColor: '#fefeaa', flex: 1}}></View>
         <View style={{ backgroundColor: '#77feaa', flex: 1}}></View>



       </View>
       </View>
       */}

       {/**
        * Crear un contenedor en forma de columna(vertical)
        * con tres cajas que sean filas(horizontal)
        * dentro que tengan cada una 3 cajas de 50px
        */
       }
       {/**
      <View style={{ backgroundColor: 'red'}}>

      <View style={{ flexDirection: "row", flex: 1}}>
        <View style={{ width: 50, backgroundColor: '#00fafa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fa00fa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fafa000'}}></View>
      </View>

      <View style={{ flexDirection: "row", flex: 1}}>
        <View style={{ width: 50, backgroundColor: '#00fafa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fa00fa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fafa000'}}></View>
      </View>

      <View style={{ flexDirection: "row", flex: 1}}>
        <View style={{ width: 50, backgroundColor: '#00fafa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fa00fa'}}></View>
        <View style={{ width: 50, backgroundColor: '#fafa000'}}></View>
      </View>
      
      </View> */}
      {/**
       * Crear un contenedor en forma de fila(horizontal)
       * que tenga dos elementos distanciados por completo de ellos
       */}

    <View style={{ flexDirection: 'row', backgroundColor: 'blue', flex: 1,height: 50, justifyContent: "space-between"}}>
     <View style={{ width: 50, height: 50, backgroundColor: "red"}} />
     <View style={{ width: 50, height: 50, backgroundColor: "green"}} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
