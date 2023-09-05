import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import bgImage from "../../assets/PhotoBG.jpg";
import { useState } from 'react';


const RegistrationScreen = () => {

  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPassInputFocused, setIsPassInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgoundImg} source={bgImage}>
        <View style={styles.registationWraper}>
          <View style={styles.formWraper}>

            <View style={styles.avatarWrapper}>
              <TouchableOpacity style={styles.plusBtn}>
                <AntDesign
                  name="pluscircleo"
                  style={styles.pluscircleo}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>
            <TextInput placeholder="Логін" style={[styles.input, isLoginInputFocused ? styles.focusedInput : null]}
              onFocus={() => setIsLoginInputFocused(true)}
              onBlur={() => setIsLoginInputFocused(false)}
              autoFocus={true}
            />
            <TextInput style={[styles.input, isEmailInputFocused ? styles.focusedInput : null]}
              onFocus={() => setIsEmailInputFocused(true)}
              onBlur={() => setIsEmailInputFocused(false)}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordInputContainer}>
              <TextInput style={[styles.input, isPassInputFocused ? styles.focusedInput : null]}
                onFocus={() => setIsPassInputFocused(true)}
                onBlur={() => setIsPassInputFocused(false)}
                placeholder="Пароль"
                autoCapitalize="none"
                autoCompleteType="password"
                // autoCorrect={false}
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Text style={styles.showPasswordInputText}>
                  Показати
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <Text style={styles.loginText}>Вже є аккаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  backgoundImg: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },

  registationWraper: {
    flex: 1,
    justifyContent: 'flex-end',

  },

  formWraper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
    color: '#212121',
    textAlign: 'center',
  },

  avatarWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginTop: -90,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    padding: 16,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    padding: 16,
    marginBottom: 16,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  passwordInputContainer: {
    position: 'relative',
    flexDirection: "row",
    marginBottom: 43,
  },
  loginText: {
    textAlign: 'center',
    color: '#1B4371',
  },
  showPasswordInputText: {
    position: 'absolute',
    right: 16,
    top: 22,
    color: '#1B4371',
  },
  pluscircleo: {
    position: 'absolute',
    top: 81,
    left: 107,
    color: '#FF6C00',
  },
  focusedInput: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  }

});

export default RegistrationScreen;





















// const RegistrationScreen = () => {

//   return (
//     <View style={styles.container}>
//       <ImageBackground style={styles.backgoundImg} source={bgImage}>
//       <KeyboardAvoidingView style={{ flex: 1, }}
//             behavior={Platform.OS == "ios" ? "padding" : "height"}
//             keyboardVerticalOffset={-100}>
//         <View style={styles.registationWraper}>
//           <View style={styles.formWraper}>

//             <View style={styles.avatarWrapper}>
//               <TouchableOpacity style={styles.plusBtn}>
//               <AntDesign
//                 name="pluscircleo"
//                 style={styles.pluscircleo}
//                 size={25}
//               />
//             </TouchableOpacity>
//             </View>

//             <Text style={styles.title}>Реєстрація</Text>
//             <TextInput placeholder="Логін" style={styles.input}
//             //  value={login}
//             />
//             <TextInput style={styles.input}
//               placeholder="Адреса електронної пошти"
//             // value={email}
//             />
//             <View style={styles.passwordInputContainer}>
//               <TextInput
//                 placeholder="Пароль"
//                 style={styles.passwordInput}
//               //  value={password}
//               // secureTextEntry={!showPassword}
//               />
//               <TouchableOpacity
//               // style={styles.showPasswordButton}
//               // onPress={() => setShowPassword(!showPassword)}
//               >
//                 <Text style={styles.showPasswordButtonText}>
//                   Показати
//                   {/* {showPassword ? "Приховати" : "Показати"} */}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>Зареєструватися</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.loginTextLink}
//             // onPress={handleLogin}
//             >
//               <Text style={styles.loginText}>Вже є аккаунт? Увійти</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   )
// }