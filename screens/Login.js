import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }

    login= async(email, password) => {

        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate("HomeScreen")
                }
            }
            catch(error){
                switch (error.code) {
                    case "auth/user-not-found":
                        Alert.alert("User not Found")
                        break;
                    case "auth/invalid-email":
                        Alert.alert("Incorrect email or password")
                    default:
                        break;
                }
                console.log(error);
            }
        }
        else{
            Alert.alert("Enter Email and Password")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <Text style={styles.headder}>
                    Login
                </Text>
                <View>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Email Id"
                    keyboardType='email-address'
                    autoFocus
                    autoCapitalize='words'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId: text 
                        })
                    }}
                    />
                    <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password: text
                        });
                    }}
                    />
                </View>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.login(this.state.emailId, this.state.password);
                }}
                >
                    <Text style={{fontSize:20, color:'#ff0000'}} >Login </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}
                onChangeText={()=>{
                    this.props.navigation.navigate("RegisterScreen")
                }}
                >
                    <Text style={{color:'lightblue', fontSize:15}} >Sing Up</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    headder:{
        fontSize:30,
        fontWeight:'bold',
        color:"#535755",
    },

    textInput: {
        width: 300,
        height: 40,
        borderWidth: 3,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        borderLeftColor:'#000000',
        borderTopColor:'#000000',
        borderRightColor:'#ff0000',
        borderBottomColor:'#ff0000',
    },

    button:{
        height: 30,
        borderWidth: 3,
        marginTop: 30,
        padding: 5,
        borderRadius: 7,
        alignItems:'center', 
        justifyContent:'center',
        alignSelf:'stretch',
        backgroundColor:'#000000',
    }
})