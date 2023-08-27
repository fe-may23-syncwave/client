import { Container } from 'components/common/Container';
import React from 'react';

type Props = {
  className?: string;
};

export const Footer: React.FC<Props> = ({
  className,
}) => {
  return (
    <Container className={className}>
      <div>Footer</div>
    </Container>
  );
};
