import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";

const ViewModeSwitcher = () => {
    const { viewMode, toggleViewMode } = useContext(UserPreferencesContext);

    return (
        <div className="button">
            <button onClick={toggleViewMode}>
                Visualizar em {viewMode === 'list' ? 'Grid' : 'Lista'}
            </button>
        </div>
    )
}

export default ViewModeSwitcher