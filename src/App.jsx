import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent';

export const App = () => {
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
};
