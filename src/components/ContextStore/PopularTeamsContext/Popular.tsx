import React, {createContext, useState} from 'react';

type contextInitialization = {
  popularTeams: string;
  setPopularTeams: (popularTeams: string) => void;
};

export const PopularContext = createContext<contextInitialization>({
  popularTeams: '',
  setPopularTeams: () => {},
});

const PopularContextProvider = ({children}: any) => {
  const [popularTeams, setPopularTeams] = useState('fc barcelona');
  return (
    <PopularContext.Provider value={{popularTeams, setPopularTeams}}>
      {children}
    </PopularContext.Provider>
  );
};

export default PopularContextProvider;
