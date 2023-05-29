import MainNavigator from "./src/navigation/bottomTabs/BottomTabs"
import { Provider } from "react-redux"
import store from "./src/state/store"

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    )
}

export default App
