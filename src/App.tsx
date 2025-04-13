import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import TabBar from './components/TabBar';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <TabBar />
    </BrowserRouter>
  );
};

export default App;
