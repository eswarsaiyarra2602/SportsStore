import React, { createContext} from 'react';
import allUsers from '../components/assets/allUsers';
export const UserContext = createContext();

const  UserContextProvider = ({ children }) => {
    const user = allUsers[0];
    return (
        <UserContext.Provider value={{ user}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;