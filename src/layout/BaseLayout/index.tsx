import { Outlet } from 'react-router-dom';
import Header from './Header';

const BaseLayout = () => {
  return (
    <div className="pt-16 font-mono">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
