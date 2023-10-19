import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent';
import { firebase } from './dataBaseServices/Firebase';

export const App = () => {
  firebase.initialization();

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
};
