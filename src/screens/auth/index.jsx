import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { signIn, signUp } from "../../store/actions";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don't have an account?" : "Already have an account?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          placeholderTextColor={COLORS.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={COLORS.darkGray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button title={buttonTitle} color={COLORS.text} onPress={onHandleAuth} />
        </View>
      </View>
    </View>
  );
};

export default Auth;
