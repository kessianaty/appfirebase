import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}