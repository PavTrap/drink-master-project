import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <main>
            <Suspense fallback={<div>Loading</div>}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </>
      ) : (
        <main>
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};
