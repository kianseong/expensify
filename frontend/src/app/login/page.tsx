import { ExpensifyLogo } from '@/components/ExpensifyLogo';
import { Input, Stack, Text, Title } from '@mantine/core';

export default function Login() {
  return (
    <Stack align="center">
      <ExpensifyLogo size="large" />
      <Title>Log In</Title>
      <Text>Username</Text>
      <Input></Input>
      <Text>Password</Text>
      <Input></Input>
    </Stack>
  );
}
