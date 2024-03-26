import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();

export default function RotasAcesso(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerTintColor: '#e9ac234'}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTintColor: '#e9ac234'}}/>
        </Stack.Navigator>
    );
}