import { NavigationContainer } from "@react-navigation/native";

import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { theme } from './src/styles/theme';

import Routes from './src/routes';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="default"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
