import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f172a',
        },
        headerTintColor: '#fff',
        contentStyle: {
          backgroundColor: '#0f172a',
        },
      }}
    />
  );
}