import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Lay } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Lay>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </Lay>
  );
};
