import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet ,Text,Pressable,Image} from 'react-native';

const Verify= ({ length, onComplete,navigation }) => {
  const [code, setCode] = useState(new Array(length).fill(''));
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to the next input box if a digit is entered
    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // If the code is complete, trigger the onComplete callback
    if (newCode.join('').length === length) {
      onComplete(newCode.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

    return (
        <View style={styles.containers}>
             <Image
            style={styles.verifyimg}
        source={require('../assets/verify.png')}

    />
    <Text style={styles.title}>VERIFY YOUR EMAIL</Text>
        <Text style={styles.description}>Please Enter The 4 Digit Code Sent To</Text>
        <Text style={styles.demail}>traptipatel23@gmail.com</Text>
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => inputs.current[index] = ref}
        />
      ))}
           {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => inputs.current[index] = ref}
        />
           ))}
           {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => inputs.current[index] = ref}
        />
           ))}
           {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => inputs.current[index] = ref}
        />
           ))}
            </View>
         <Text style={styles.time}>00.00</Text>
        <Text style={styles.rcode}>Resend Code</Text>
       <Pressable style={styles.bttn}>
      <Text style={styles.btext} onPress={() =>
        navigation.navigate('VerifyCode')}>VERIFY</Text>
    </Pressable>
            </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 40,
    height: 50,
      textAlign: 'center',
    backgroundColor:'#FEA726',
      fontSize: 18,
   borderColor:'brown',
    },
  containers: {
   //  flex: 1,
    //justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
     marginBottom: 25,
    },
  inp1:{
    flex: 1,
    height: 40,
  },
  input1: {
      height: 50,
      width: '20%',
      backgroundColor: '#FEA726',
      borderRadius: 5,
      borderColor:'#FF3D00',
  },
  description: {
      marginBottom: 10,
      marginLeft:40,
    fontWeight: 'bold',
    fontSize:15,
    },
    demail: {
    marginBottom: 40,
      marginLeft:80,
    fontWeight: 'bold',
    fontSize:15,
    },
    time: {
        marginTop:20,
        marginBottom: 10,
      marginLeft:130,
    fontWeight: 'bold',
    fontSize:15,
    },
    rcode: {
        marginBottom: 10,
      marginLeft:110,
    fontWeight: 'bold',
    fontSize:15,
    },
  label: {
    position: 'absolute',
    top: -10, // Position the label inside the border
    left: 10,
    backgroundColor: '#f5f5f5', // Match the background color to your container
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'gray',
  },
 verifyimg: {
    width:'100%',
    height: 200,
    marginBottom:20,
  },
  bttn: {
    width: '50%',
    backgroundColor: '#FEA726',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 16,
    marginLeft:80,
    borderRadius: 100,
    paddingTop:10,
  },
  btext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Verify;
