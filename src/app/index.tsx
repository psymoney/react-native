import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
//       source={{ uri: 'https://psymoney.online/' }}
      source={{ uri: 'https://app.parkingwith.com/' }}
      style={{ flex: 1 }}
    />
  );
}
