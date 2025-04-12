import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
