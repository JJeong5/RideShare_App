import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCar, faTaxi, faHouse, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import Carpool from "./Screens/CarPool/CarPool";
import Taxi from "./Screens/Taxi/Taxi";
import Home from "./Screens/Home/Home";
import Info from "./Screens/Info/Info";
import Chat from "./Screens/Chat/Chat";

const Tab = createBottomTabNavigator();

// #699fcb
// TODO : 더 좋은 아이콘 찾기, 터치 이펙트(focused)
const NavigationBar = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { display: "none" } }} initialRouteName="Home">
            <Tab.Screen
                name="Carpool"
                component={Carpool}
                options={{
                    tabBarIcon: () => <FontAwesomeIcon icon={faCar} style={{ color: "#699fcb" }} size={25} />,
                }}
            />

            <Tab.Screen name="Taxi" component={Taxi} options={{ tabBarIcon: () => <FontAwesomeIcon icon={faTaxi} style={{ color: "#699fcb" }} size={24} /> }} />
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <FontAwesomeIcon icon={faHouse} style={{ color: "#699fcb" }} size={26} /> }} />
            <Tab.Screen name="Info" component={Info} options={{ tabBarIcon: () => <FontAwesomeIcon icon={faUser} style={{ color: "#699fcb" }} size={24} /> }} />
            <Tab.Screen name="Chat" component={Chat} options={{ tabBarIcon: () => <FontAwesomeIcon icon={faComment} style={{ color: "#699fcb" }} size={24} /> }} />
        </Tab.Navigator>
    );
};

export default NavigationBar;