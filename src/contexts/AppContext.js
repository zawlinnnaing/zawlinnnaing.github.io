import React from "react";

const AppContext = React.createContext({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

export default AppContext;
