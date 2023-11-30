import CardDetails from "../CardDetails/CardDetails";

const BottomSheet = () => {
    return (
        <div
            className="pt-6 w-full"
            style={{
                display: "flex",
                flexDirection: "column",
                top: "60%",
                position: "absolute",
                maxWidth: 500,
            }}
        >
            <CardDetails />
        </div>
    );
};

export default BottomSheet;
