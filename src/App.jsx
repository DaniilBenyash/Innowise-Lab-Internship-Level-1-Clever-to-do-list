import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RoutesComponent } from "./Router/RoutesComponent/RoutesComponent";

export const App = () => {
  const cofig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
  const firebaseConfig = cofig
  const app = initializeApp(firebaseConfig);
  getDatabase(app);

  return (
    <ThemeProvider>
      <RoutesComponent/> 
    </ThemeProvider>
  );
}
