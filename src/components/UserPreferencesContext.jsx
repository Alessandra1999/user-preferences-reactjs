import { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = (props) => {
    const [viewMode, setViewMode] = useState('list');

    const toggleViewMode = () => {
        setViewMode((prevViewMode) => (prevViewMode === 'list' ? 'grid' : 'list'))
    };

    return (
        <UserPreferencesContext.Provider value={{ viewMode, toggleViewMode }}>
            {props.children}
        </UserPreferencesContext.Provider>
    )
}