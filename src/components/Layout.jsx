import { Outlet } from 'react-router-dom';
import { Container } from './Styles.styled';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import HeaderBar from './HeaderBar/HeaderBar';

export const Layout = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
