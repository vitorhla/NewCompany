import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';

const colors = {
    white:"#FFFFFF",
    lightGray:"#F2F2F2",
    mediumGray:"#9E9E9E",
    darkGray:"#263238",
    black:"#000000",
    primary:"#407BEE",
    secondary:"#33569B",
    bluePill:"#407BFF61",
    red:"#DF5753",
};


const theme = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        padding:20,
    },
    card:{
        width:"100%",
        height:"100%",
        backgroundColor: colors.white,
        borderRadius:20,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems:"center",

    },

    mhome:{
        marginTop: 40,
        width:313,
        height: 225,


    }



});


export {colors, theme};