import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
