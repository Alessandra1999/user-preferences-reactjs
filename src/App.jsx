import ItemList from "./components/ItemList"
import { UserPreferencesProvider } from "./components/UserPreferencesContext"
import ViewModeSwitcher from "./components/ViewModeSwitcher"


function App() {

  return (
    <>
      <UserPreferencesProvider>
        <div>
          <h1>Meus personagens favoritos de <img src="./logo.png"></img></h1>
          <ViewModeSwitcher />
          <ItemList />
        </div>
      </UserPreferencesProvider>
    </>
  )
}

export default App
