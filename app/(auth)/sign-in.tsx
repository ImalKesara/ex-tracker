import { Text, View } from "react-native";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up" className="mt-4 text-white bg-primary rounded p-4"> Create Account </Link>
    </View>
  );
};

export default SignIn;
