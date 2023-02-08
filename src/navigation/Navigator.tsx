import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import Index from "../screens/index";
import { SpellsScreen } from "../screens/SpellsScreen";
import { SpellsDetailsScreen } from "../screens/SpellsDetailsScreen";

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Group>
                    <Stack.Screen name="Index" component={Index}/>
                    <Stack.Screen name="SpellsScreen" component={SpellsScreen}/>
                    <Stack.Screen name="SpellsDetailsScreen" component={SpellsDetailsScreen}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}