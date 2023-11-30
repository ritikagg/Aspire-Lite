import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Cards from "./Cards";
import { CardInfoIF } from "../../utils/Modal";

const CardCarousel = ({
    cardList,
    setVisibleCard,
}: {
    cardList: CardInfoIF[];
    setVisibleCard: (card: CardInfoIF) => void;
}) => {
    const [index, setIndex] = useState(0);

    const handleChange = (
        cur: number | undefined,
        prev: number | undefined
    ) => {
        setIndex(cur ?? 0);
        setVisibleCard(cardList[cur ?? 0]);
    };

    useEffect(() => {
        setIndex(0);
    }, [cardList]);

    return (
        <Carousel
            index={index}
            className="carousel px-6"
            onChange={handleChange}
            interval={4000}
            animation="slide"
            swipe
            stopAutoPlayOnHover
            autoPlay={false}
        >
            {cardList.map((cardDetailObj, idx) => {
                return <Cards key={idx} cardDetails={cardDetailObj} />;
            })}
        </Carousel>
    );
};

export default CardCarousel;
