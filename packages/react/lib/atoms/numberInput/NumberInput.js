import React from 'react';

const NumberInput = ({ number, setNumber, max, }) => {
    //增加
    function handleIncrement() {
        setNumber((prev) => prev + 1);
    }
    // 減少
    function handleDecrement() {
        setNumber((prev) => prev - 1);
    }
    const enableStyle = { cursor: "pointer", color: "#fff" };
    const disableStyle = {
        cursor: "not-allowed",
        color: "#767676",
        fontSize: "20px",
    };
    return (React.createElement("div", { style: { textAlign: "center", width: "150px" } },
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #767676",
                borderRadius: "10px",
                height: "30px",
                padding: "0 10px",
            } },
            React.createElement("p", { onClick: number > 1 ? handleDecrement : undefined, style: number > 1 ? enableStyle : disableStyle }, "-"),
            React.createElement("input", { style: {
                    fontSize: "14px",
                    fontWeight: "500",
                    background: "transparent",
                    border: 0,
                    width: "40px",
                    textAlign: "center",
                    color: "#fff",
                }, value: number, onChange: (event) => {
                    const inputNumber = parseInt(event.target.value);
                    if (!isNaN(inputNumber) && inputNumber <= max && inputNumber > 0) {
                        setNumber(inputNumber);
                    }
                } }),
            React.createElement("p", { onClick: number < max ? handleIncrement : undefined, style: number < max ? enableStyle : disableStyle }, "+")),
        React.createElement("p", { style: { margin: "5px auto" } },
            "\u6578\u91CF\u9650\u5236: ",
            max)));
};

export { NumberInput as default };
//# sourceMappingURL=NumberInput.js.map
