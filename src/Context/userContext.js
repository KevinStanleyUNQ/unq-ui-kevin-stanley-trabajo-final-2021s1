import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [player, setPlayer] = useState({
    nickname: "",
    playing: false

  });

  const data = { player, setPlayer};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
