import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OrientationProvider } from "./useOrientation";



const Provider = ({ children }) => (
  <SafeAreaProvider>
    <OrientationProvider>{children}</OrientationProvider>
  </SafeAreaProvider>
);

export default Provider;
