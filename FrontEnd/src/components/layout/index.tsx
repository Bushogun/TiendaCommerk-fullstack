import React from 'react';
import Loading from '../../components/loading';
import Error from '../../components/error';

interface LayoutProps {
  loading: Boolean;
  error: string | null;
  children: React.ReactNode;
}

function Layout({ loading, error, children }: LayoutProps) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>{children}</div>;
}

export default Layout;