import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import TabBar from './components/TabBar';
import './App.css';
import SideBar from './components/SideBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <AppRoutes />
      <TabBar />
    </BrowserRouter>
  );
};

export default App;
