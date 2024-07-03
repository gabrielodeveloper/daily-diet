import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold 
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider  theme={theme}>
      <StatusBar 
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
