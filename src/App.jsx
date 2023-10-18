import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent';
import { FirebaseClass } from './DBServices/Firebase';

export const App = () => {
  const firebase = new FirebaseClass(process.env.REACT_APP_FIREBASE_CONFIG);
  firebase.getDB();

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
};
