import { View, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function SubscriptionDetail() {

  const { id } = useLocalSearchParams<{id : string}>();

  return (
    <View>
      <Text>Subscription detail {id} </Text>
      <Link href="/">Go the subscriptions</Link>
    </View>
  );
}
