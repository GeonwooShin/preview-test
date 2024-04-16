import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { memo } from 'react';
import { ModalProvider } from '@context/ModalContext';

const RootPage = memo(() => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        throwOnError: true,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ModalProvider>
  );
});

export default RootPage;
