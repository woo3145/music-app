import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const BaseLayout = () => {
  return (
    <div className="pt-16">
      <Header />
      <main className="px-4 lg:px-16 duration-200">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
