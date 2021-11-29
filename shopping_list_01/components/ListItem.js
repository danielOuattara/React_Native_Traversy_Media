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
                    name="remove" size={20} color="firebrick" 
                    onPress={() => deleteItem(item.id)}
                    style= {{marginRight: 10, fontSize:24}}
                />   
            </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor:'lightblue',
        marginBottom: 5,
        marginHorizontal: 10,

    },

    listItemView: {
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems:"center"
    },

    listItemText: {
        fontSize: 20, 
        fontWeight: "bold",
        textTransform: 'capitalize'
    }

})
 
 export default ListItem;