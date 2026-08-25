import { Text, View } from "react-native";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-in" className="mt-4 text-white bg-primary rounded p-4"> Log In </Link>
    </View>
  );
};

export default SignUp;
