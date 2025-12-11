import React, { Component, StrictMode } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <StrictMode>
      <WebView
        source={{ uri: 'https://app.parkingwith.com/' }}
        style={{ flex: 1 }}
        webviewDebuggingEnabled={true}
        geolocationEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}

      />
    </StrictMode>
  );
}
