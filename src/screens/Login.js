import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, Image } from "react-native";
import FacebookLogo from "../assets/facebook-logo.png";
import CustomButton from "../components/CustomButton";
import styles from "../../Styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passoword, setPassoword] = useState("");
  const navigation = useNavigation();
  const credentialsEmail = "aluno@senai.com.br";
  
  const credentialsPassword = "aluno123";
  const [error, setError] = useState("")

  function handleSubmit(){
    setError("");
  if(!email.trim()){
    setError("Por favor, insira um E-mail");
    return;
  }
  if(!passoword.trim()){
    setError("Por favor, insira uma senha");
    return;
  }
  if(email !== credentialsEmail || passoword !== credentialsPassword){
    setError("Credenciais Invalidas");
    setEmail("");
    setPassoword("");
  }
  navigation.navigate("Home",{username: credentialsEmail})
}

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={FacebookLogo} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
        placeholderTextColor="#959ba3"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={passoword}
        onChangeText={(text) => setPassoword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#959ba3"
        secureTextEntry={true}
      />
      <CustomButton title="Entrar" onPress={() => {
        handleSubmit()
      }} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
