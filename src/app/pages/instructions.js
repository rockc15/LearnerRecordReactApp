/**
 * Selects how many user are learnering 
 */
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";


export default class Instructions extends React.Component {
    constructor(props) {
        super(props);
        this.playGame = this.playGame.bind(this)
        this.instructionPage = this.instructionPage.bind(this)
    }


    render() {

        return (
            <View style={styles.background}>
                <Text> Up to three player </Text>
            </View >
        )
    }
}

Instructions.propTypes = {
    navigation: PropTypes.object
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: "#82b6ff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // padding: 10,
    },
    star: {
        width: "100%",
        position: "absolute",
        top: 10,
        flex: 1,
        resizeMode: "contain",
    },

});




