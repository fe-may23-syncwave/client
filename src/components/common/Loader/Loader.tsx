import React from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export const Loader: React.FC = () => {
  return <div style={styles}>Loading...</div>;
};
