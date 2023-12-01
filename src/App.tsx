import { useReducer } from "react";
import { BottomTab } from "./components/BottomTab/Index";
import { Home } from "./Home";
import { BottomSheet } from "./patterns/BottomSheet";
import "./App.css";
import {
    RootDispatchContext,
    RootStateContext,
    initialState,
    reducer,
} from "./store";

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="main">
            <RootStateContext.Provider
                value={{
                    cards: state.cards,
                    selectedCardId: state.selectedCardId,
                    selectedTab: state.selectedTab,
                }}
            >
                <RootDispatchContext.Provider value={dispatch}>
                    <Home />
                    <BottomSheet />
                    <BottomTab />
                </RootDispatchContext.Provider>
            </RootStateContext.Provider>
        </div>
    );
}
