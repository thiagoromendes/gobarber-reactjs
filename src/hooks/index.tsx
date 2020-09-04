import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Tost';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
