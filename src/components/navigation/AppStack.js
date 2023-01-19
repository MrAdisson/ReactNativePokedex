import DetailsScreen from '../screen/DetailsScreen';
import HomeScreen from '../screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoveDetailsScreen from '../screen/MoveDetailsScreen';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pokedex'>
        <Stack.Screen name='Pokedex' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.name.charAt(0).toUpperCase() + route.params.name.slice(1), headerShown: false })}
        />
        <Stack.Screen
          name='MoveDetails'
          component={MoveDetailsScreen}
          options={({ route }) => ({
            title: route.params.pokemon.name.charAt(0).toUpperCase() + route.params.pokemon.name.slice(1) + ' moves',
            moveList: route.params.moveList,
            pokemon: route.params.pokemon,
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
