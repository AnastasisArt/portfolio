import React from 'react';
import { Container } from './styles';

type BannerProps = {
  visible?: boolean;
};

export default function Banner({ visible = false }: BannerProps) {
  return (
    <Container $visible={visible}>
      ANASTASIA-VOJKIC.DEV
    </Container>
  );
}