import React,{Component} from "react";
import {View,StyleSheet,Text} from "react-native";

export default class CreateStory extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> Create Story Screen</Text>
            </View>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});