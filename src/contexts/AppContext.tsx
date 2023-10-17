import React from "react";

const AppContext = React.createContext<{
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}>({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

export default AppContext;
