import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { loginScreenStyles } from "../styles";
import bgImage from "../../assets/PhotoBG.jpg";

const LoginScreen = () => {

  return (
    <View style={loginScreenStyles.container}>
      <ImageBackground style={loginScreenStyles.backgoundImg} source={bgImage}>
        <View style={loginScreenStyles.registationWraper}>
          <View style={loginScreenStyles.formWraper}>

            <Text style={loginScreenStyles.title}>Увійти</Text>

            <TextInput style={loginScreenStyles.input}
              placeholder="Адреса електронної пошти"
            />
            <View style={loginScreenStyles.passwordInputContainer}>
              <TextInput
                placeholder="Пароль"
                style={loginScreenStyles.passwordInput}
              />
              <TouchableOpacity>
                <Text style={loginScreenStyles.showPasswordButtonText}>
                  Показати
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={loginScreenStyles.button}>
              <Text style={loginScreenStyles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <Text style={loginScreenStyles.loginText}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}



export default LoginScreen;