import React from 'react';
import ContentLoader from 'react-content-loader';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

export const Loader: React.FC = () => {
  return (
    <div style={styles}>
      {' '}
      <ContentLoader
        height={45}
        speed={1}
        backgroundColor="#OF1121"
        foregroundColor="#905BFF"
        viewBox="0 0 380 70"
      >
        {/* Only SVG shapes */}
        <rect x="80" y="17" rx="4" ry="4" width="200" height="13" />
      </ContentLoader>
    </div>
  );
};
