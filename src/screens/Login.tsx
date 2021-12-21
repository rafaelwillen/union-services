import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { FormikHelpers } from "formik";

import { loginImage } from "../styles/imageConstants";
import { Colors, TextStyles } from "../styles/appTheme";
import LoginForm from "../components/forms/LoginForm";
import AuthContext from "../context/auth";

type FormType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useContext(AuthContext);
  async function onLogin(
    { email, password }: FormType,
    actions: FormikHelpers<FormType>
  ) {
    // TODO: Terminar a autenticação
    await signIn();
    actions.resetForm();
  }

  return (
    <View>
      <ScrollView style={styles.container}>
        <Image source={loginImage} style={styles.image} />
        <Text style={styles.heading1}>Bem-vindo de Volta</Text>
        <Text style={styles.heading2}>Sentimos a sua falta</Text>
        <LoginForm onSubmit={onLogin} />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 38,
  },
  image: {
    marginTop: 30,
    alignSelf: "center",
    width: 190,
    height: 190,
  },
  heading1: {
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: TextStyles.heading1.fontSize,
    lineHeight: TextStyles.heading1.lineHeight,
    marginTop: 40,
    textAlign: "center",
  },
  heading2: {
    fontFamily: TextStyles.heading2.font,
    fontSize: TextStyles.heading2.fontSize,
    lineHeight: TextStyles.heading2.lineHeight,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
    color: Colors.greyText,
  },
  paragraph: {
    marginTop: 22,
    textAlign: "center",
    fontFamily: TextStyles.paragraph.font,
    fontSize: TextStyles.paragraph.fontSize,
  },
  linkText: {
    fontFamily: TextStyles.linkText.font,
    fontSize: TextStyles.linkText.fontSize,
    color: Colors.linkText,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
