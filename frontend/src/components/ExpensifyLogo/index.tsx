import { Group, Text } from '@mantine/core';
import Logo from '../../assets/ExpensifyLogo.png';
import Image from 'next/image';

type SizeType = 'small' | 'medium' | 'large';

type ExpensifyLogoProps = {
  size?: SizeType;
};

export const ExpensifyLogo = ({ size = 'medium' }: ExpensifyLogoProps) => {
  const sizes = {
    small: {
      fontSize: '0.75rem',
      imageSize: 12,
    },
    medium: {
      fontSize: '1rem',
      imageSize: 16,
    },
    large: {
      fontSize: '2rem',
      imageSize: 32,
    },
  };

  const { fontSize, imageSize } = sizes[size];

  return (
    <Group gap={0} style={{ padding: '0.25rem' }}>
      <Text size={fontSize}>EXPEN</Text>
      <Image src={Logo} alt="" width={imageSize} height={imageSize} />
      <Text size={fontSize}>IFY</Text>
    </Group>
  );
};
