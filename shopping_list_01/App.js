// import React from "react";
// import {View, Text} from "react-native";


// const App = () => {
//   return ( 
//     <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
//       <Text style={{fontSize: 30, fontWeight: "bold", color:"blue"}}>Hello React Native</Text>
//     </View>
//     );
// }
 
// export default App;

//---------------------------------------------------------- separate style

// import React from "react";
// import {View, Text, StyleSheet} from "react-native";


// const App = () => {
//   return ( 
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Hello React Native</Text>
//     </View>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     justifyContent:"center", 
//     alignItems: "center",
//   },

//   welcomeText : {
//     fontSize: 30, 
//     fontWeight: "bold", 
//     color:"blue",
//   }
// })
 
// export default App;


//---------------------------------------------------------- image

// import React from "react";
// import {View, Text, Image, StyleSheet} from "react-native";


// const App = () => {
//   return ( 
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Hello React Native</Text>
//       <Image 
//         source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}}
//         style={styles.img}
//       />
//     </View>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     justifyContent:"center", 
//     alignItems: "center",
//   },

//   welcomeText : {
//     fontSize: 30, 
//     fontWeight: "bold", 
//     color:"blue",
//   },

//   img : {
//     width: 100,
//     height: 100,
//     borderRadius: 100 /2

//   }
// })
 
// export default App;
//---------------------------------------------------------- Back to basic

import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
// import 'react-native-get-random-values';
import {v4 as uuidv4} from "uuid";

const App = () => {

  const[items, setItems] = useState([
    {id: uuidv4, text: "Milk"},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Bread"},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  };

  const deleteItem0 = (id) => {
    const newItems = items.filter(item => item.id != id);
    setItems(newItems);
  };

  const addItem = (textEntered) => {
    if(!textEntered) {
      Alert.alert("Error", "Please, enter an description", {text:"OK"});
    } else {
      setItems( prevItems => {
        return [...prevItems, {id: uuid(), text: textEntered}]
      });
    }
  }


  return ( 
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      /> 
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10
  },
})
 
export default App;