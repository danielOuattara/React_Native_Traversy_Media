
import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const AddItem = ({addItem}) => {
 const[text, setText] = useState("");
 const handleChange = (value) => setText(value);

  return ( 
    <View>
      <TextInput
          placeholder="Add items to the list ... " 
          style= {styles.input}
          onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
            <Text style={styles.btnText}>
                Add item &nbsp;
                <Icon name="plus" size={22}></Icon>
            </Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 20,
        marginVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 3,
        marginHorizontal: 10,
    },

    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        marginHorizontal: 10,
        marginBottom: 5 ,
    },

    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center"
    }
})
 
export default AddItem;