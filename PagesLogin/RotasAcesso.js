import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Home from '../PagesApp/Home';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();

export default function RotasAcesso(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    );
}