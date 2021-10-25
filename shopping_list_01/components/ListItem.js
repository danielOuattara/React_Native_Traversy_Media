import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon  from "react-native-vector-icons/dist/FontAwesome";


const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>
                <Icon 
                   name="remove" 
                   size={20} 
                   color="firebrick"
                   onPress={() => deleteItem(item.id)}
                />   
            </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor:'#f2f2f2',
        borderBottomWidth: 3,
        borderBottomColor: "#e3e3e3",
        borderColor: '#eee'
    },

    listItemView: {
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems:"center"
    },

    listItemText: {
        fontSize: 20, 
        fontWeight: "bold"
    }

})
 
 export default ListItem;