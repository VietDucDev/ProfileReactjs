import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
