import { Router } from './routes';
import { Authentication } from './modules/user';
import './App.css';

function App() {
  return (
    <Authentication>
      <Router />
    </Authentication>
  );
}

export default App;
