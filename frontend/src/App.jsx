import { Router } from './routes';
import { Authentication } from './modules/user';

function App() {
  return (
    <Authentication>
      <Router />
    </Authentication>
  );
}

export default App;
