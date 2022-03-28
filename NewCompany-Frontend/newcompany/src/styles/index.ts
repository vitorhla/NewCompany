import {StyleSheet,Dimensions} from 'react-native'
import { color } from 'react-native-reanimated';

const deviceWidth =  Dimensions.get('window').width;
const deviceHeight =  Dimensions.get('window').height;

const colors = {
    white:"#FFFFFF",
    lightGray:"#F2F2F2",
    mediumGray:"#9E9E9E",
    borderGray: "#E1E1E1",
    darkGray:"#263238",
    black:"#000000",
    primary:"#407BEE",
    secondary:"#33569B",
    bluePill:"#407BFF61",
    red:"#DF5753",


};




const text = StyleSheet.create ({
regular:{
    fontSize:16,
    fontWeight:"400",
    textAlign:"center",
    color: colors.mediumGray,

},
bold:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:15,
   color: colors.darkGray,
},

primaryText:{
    fontSize:16,
    fontWeight:"bold",
    textTransform: "uppercase",
    color:colors.white,
    marginLeft:35,
},
companyName:{
    fontSize:16,
    fontWeight: "bold",
},
companycnpj:{
    fontSize:12,
    fontWeight: "400",
    color:colors.mediumGray,
},
goBackText:{
    fontSize:18,
    fontWeight: "bold",
    textTransform:"uppercase",
    color: colors.darkGray,
    marginLeft: 16,
},
companySocial:{
    fontWeight: "bold",
},
companyFantasia:{
    fontWeight: "bold",
},
saveform:{
    textTransform:"uppercase",
    fontWeight:"bold",
    color:colors.white,
},
cancelform:{
    textTransform:"uppercase",
    fontWeight:"bold",
    color:colors.red,
}

});

/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nav = StyleSheet.create({
    leftText:{
        color:colors.white,
        fontWeight: "bold",
        marginLeft: 25,

    },

    drawer:{
        marginRight:20,
        color:colors.white,
        fontWeight: "bold",
        flexDirection:"row",
        justifyContent:'space-between',
        padding:20,
      
    },

    options:{
        width: deviceWidth,
        height:120,
        backgroundColor:colors.primary,
        marginTop:125,
        marginRight: - 25,
        padding:20,
        justifyContent:'space-between',
    },
    option:{
        paddingVertical: 5,
    },

    textOption:{
        color:colors.white,
        textTransform:"uppercase",
    },

    textActive:{
        fontWeight: "bold",
    }


});


/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/

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
        justifyContent:"space-around",

    },

    mhome:{
        marginTop: 40,
        width:313,
        height: 225,
    },

    textContainer:{
        paddingHorizontal:20,

    },

    primaryButton:{
        width:290,
        height:50,
        backgroundColor:colors.primary,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
  
    arrowContainer:{
        height:50,
        width:50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        alignItems:"center",
        justifyContent: "center",



    },
    scrollContainer:{
        padding: 10,

    },


    companyCard:{
        width:"100%",
        backgroundColor: colors.white,
        borderRadius:10,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems:"center",
        justifyContent:"space-around",
        marginVertical:10,
    },

    companyDescription:{
        width:"100%",
        padding:20,
        borderTopColor:colors.lightGray,
        /*borderTopWidth: 1,*/


        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems:"center",
        justifyContent:"space-around",
        marginVertical:10,
    },

    inputContainer:{
        width:"100%",
        height:60,
        backgroundColor: colors.white,
        borderRadius:10,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems:"center",
        justifyContent:"space-around",
        marginVertical:12.5,
        paddingVertical: 10,
     

    },
    searchInput:{
 width:"90%",
 height:40,
 borderBottomWidth:0.5,
 borderBottomColor:colors.borderGray,

    },

    detailContainer:{
        backgroundColor: colors.white,
        padding:20,
    },
    detailCard:{
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
        justifyContent:"space-around",
        padding:20,
    },
    companyImageContainer:{
        width:"100%",
        borderWidth: 1,
        borderColor:colors.lightGray,
        alignItems:"center",
        borderRadius:20,

    
    },
    goBackList:{
        width:20,
        flexDirection: "row",
        justifyContent:"flex-start",
        marginVertical:10,
        alignItems:"center",
    },

    formContainer:{
        width:deviceHeight,
        padding:20,
    },
  
    formCard0:{

        alignItems:"flex-start"
    },

    formCard1:{
        width:"100%",
        height: "100%",
        backgroundColor:colors.white,
        borderRadius:20,
        padding:20,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
    
        justifyContent:"space-between",
    },

    formCard2:{
        width:"100%",
        height: "100%",
        backgroundColor:colors.white,
        borderRadius:20,
        padding:20,
        alignItems:"flex-start",
        justifyContent:"space-between",
    },
   formInput:{
    width:290,
    height:50,
    borderWidth:1,
    borderColor:colors.mediumGray,
    borderRadius:10,
    padding:10,
    marginVertical: 15,

   },
   goBackTextform:{
    borderColor:colors.mediumGray,
   },
   butonform:{
    justifyContent:"space-between",
    flexDirection: "row",
    paddingRight: 50,
   },
   saveform:{
    width:"40%",
    height:40,
    borderWidth:1,
    backgroundColor:colors.primary,
    marginVertical:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
        paddingLeft: 50,
        paddingRight: 50,
        
   },
   cancelform:{
       width:"40%",
       height:40,
       borderWidth:1,
       borderColor:colors.red,
       marginVertical:10,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:10,


       
    paddingLeft: 50,
    paddingRight: 50,
    
   }

});


export {colors, theme,text, nav};