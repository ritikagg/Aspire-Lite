import History from "../BottomSheet/History";
import CardActions from "../../components/CardActions/CardActions";
import { useDispatch, useRootState, useSelectedCard } from "../../store";

const CardDetails = () => {
    const { selectedCardId, cards } = useRootState();
    const dispatch = useDispatch();
    const selectedCard = useSelectedCard(cards, selectedCardId);
    const onFreeze = (id: number) => {
        dispatch({ type: "freeze_card", data: { id } });
    };

    const onUnFreeze = (id: number) => {
        dispatch({ type: "unfreeze_card", data: { id } });
    };

    const onCancel = (id: number) => {
        dispatch({ type: "cancel_card", data: { id } });
    };

    return (
        <>
            <CardActions
                visibleCard={selectedCard ?? cards[0]}
                freezeCardHandler={onFreeze}
                unfreezeCardHandler={onUnFreeze}
                cancelCardHanlder={onCancel}
            />
            <History />
        </>
    );
};

export default CardDetails;
