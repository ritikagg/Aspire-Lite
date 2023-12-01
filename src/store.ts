import React, { useContext } from "react";
import { CardInfoIF } from "./utils/Modal";

export const initialState = {
    selectedCardId: 123,
    cards: [
        {
            id: 123,
            name: "Mark Henry",
            cardNum: "1234567898765432",
            cvv: 123,
            expDate: "12/27",
            isFreeze: false,
        },
        {
            id: 125,
            name: "Saad Hassan",
            cardNum: "1234567093224432",
            cvv: 964,
            expDate: "03/28",
            isFreeze: true,
        },
    ],
    selectedTab: "my_cards",
};

// interface RootState {
//     cards: CardInfoIF[];
// }

export function reducer(state: any, action: { type: string; data: any }) {
    if (action.type === "freeze_card") {
        const newState = { ...state };
        const indx = newState.cards.findIndex(
            (obj: { id: any }) => obj.id === action.data.id
        );
        newState.cards[indx] = { ...state.cards[indx], isFreeze: true };
        return newState;
    } else if (action.type === "unfreeze_card") {
        const newState = { ...state };
        const indx = newState.cards.findIndex(
            (obj: { id: any }) => obj.id === action.data.id
        );
        newState.cards[indx] = { ...state.cards[indx], isFreeze: false };
        return newState;
    } else if (action.type === "cancel_card") {
        if (state.cards.length > 1) {
            const newCards = state.cards.filter(
                (obj: { id: any }) => obj.id !== action.data.id
            );
            return { ...state, cards: newCards };
        }
        return state;
    } else if (action.type === "select_card") {
        return { ...state, selectedCardId: action.data.id };
    } else if (action.type === "add_card") {
        return { ...state, cards: [...state.cards, action.data] };
    } else if (action.type === "set_tab") {
        return { ...state, selectedTab: action.data.id };
    }
}

export const useSelectedCard = (cards: CardInfoIF[], selectedCardId: number) =>
    cards.length > 0
        ? cards.find((obj) => obj.id === selectedCardId)
        : undefined;

export const RootStateContext = React.createContext<{
    selectedCardId: number;
    cards: CardInfoIF[];
    selectedTab: string;
}>({ selectedCardId: 123, cards: [], selectedTab: "my_cards" });
export const RootDispatchContext = React.createContext<any>(null);

export const useRootState = () => useContext(RootStateContext);
export const useDispatch = () => useContext(RootDispatchContext);
