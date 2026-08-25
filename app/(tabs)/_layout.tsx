import { appTabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { Image } from "expo-image";
import { clsx } from "clsx";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { components, colors } from "@/constants/theme";
const tabBar = components.tabBar;

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View className="tabs-icon">
      <View className={clsx("p-3 rounded-full", focused ? "bg-accent" : "")}>
        <Image source={icon} className="tabs-glyph" />
      </View>
    </View>
  );
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {appTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
