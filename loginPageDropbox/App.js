import React, {useEffect, useState} from 'react';
import {SafeAreaView, 
        Image, 
        View, 
        StyleSheet, 
        TextInput, 
        Text, 
        TouchableOpacity,
        Alert} from 'react-native';

const App = (props) => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = () => {
    Alert.alert("CLARUSWAY", `E-mail: ${email}, Password: ${password}`)
  }


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        
        <View style={styles.image}>
          <Image 
            source={require("./src/dropbox-font.png")} 
            style={{width:300, height:150,}}
          />
        </View>

        <View>
          <TextInput 
            value={email}
            style={styles.input} 
            placeholder='Username or e-mail'
            onChangeText={(userText) => setEmail(userText)} 
            keyboardType='email-address'
          />
          
          <TextInput 
            value={password}
            style={styles.input} 
            placeholder='Password'
            onChangeText={(userPass) => setPassword(userPass)} 
            keyboardType='password'
            secureTextEntry={true}

          />

          <Text style={styles.password}>Forgot password?</Text>

          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={{color: 'white', fontSize: 16,}}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              setEmail("");
              setPassword("");
            }}
          >
            <Text style={{color: 'white', fontSize: 16,}}>Clear</Text>
          </TouchableOpacity>

          <Text style={{color: 'black', alignSelf: 'center', padding: 10, fontWeight: 'bold'}}>OR</Text>

          <Text style={styles.google}>

            <Image 
              source={require("./src/google-favicon.png")} 
              style={{width:3, height:3}}
            />
            Sign up with Google
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 16,}}>Create New Account</Text>
          </TouchableOpacity>

          <Image 
            source={require("./src/dropbox-icon2.png")} 
            style={{width:150, height:150, marginLeft: 125, marginTop: 30,}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 126, 229)',
    zIndex: 2,
  },

  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,

  },
  input: {
    padding: 8,
    margin: 10,
    marginRight: 30,
    marginLeft: 30,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0D2481",
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    marginTop:20,
    borderRadius: 10,
    fontSize: 14,
  },
  password: {
    color: 'white', 
    alignSelf: 'flex-end', 
    padding: 2, 
    margin: 10,
    textDecorationLine: 'underline',
    marginRight: 30,
  },

   google: {
     fontSize: 18,
     color: 'white', 
     alignSelf: 'center', 
     padding: 5, 
     
   }
  
})

export default App;