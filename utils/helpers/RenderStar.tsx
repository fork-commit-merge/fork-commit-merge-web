import { StarFilled } from "@ant-design/icons";

export const renderStar = (rank: number) => {
    let color = "";
    switch (rank) {
        case 0:
            color = "gold";
            break;
        case 1:
            color = "silver";
            break;
        case 2:
            color = "var(--color-bronze)";
            break;
        default:
            return null;
    }
    return (
        <StarFilled
            style={{
                position: "absolute",
                top: 28,
                right: 0,
                fontSize: 50,
                color: color,
            }}
        />
    );
};
