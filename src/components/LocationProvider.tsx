import React, { useContext } from "react";

// @ts-ignore
const LocationContext = React.createContext<Location>();

export function LocationProvider(
  props: React.PropsWithChildren<{ location: Location }>
) {
  return (
    <LocationContext.Provider value={props.location}>
      {props.children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
