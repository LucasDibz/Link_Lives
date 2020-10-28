import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/Routes/Stack';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <Routes />
    </>
  );
}
