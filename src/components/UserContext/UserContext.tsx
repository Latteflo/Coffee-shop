// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Auth } from '../../api/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'; 

interface UserContextType {
    user: FirebaseUser | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe; 
    }, []);

    return (
        <UserContext.Provider value={{ user: currentUser }}>
            {children}
        </UserContext.Provider>
    );
};


