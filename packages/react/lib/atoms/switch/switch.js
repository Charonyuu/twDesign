import React from 'react';

const Switch = ({ isChecked, setIsChecked }) => {
    return (React.createElement("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer" },
        React.createElement("input", { id: "toggle", type: "checkbox", checked: isChecked, onChange: () => setIsChecked(!isChecked), className: "hidden" }),
        React.createElement("span", { className: `relative w-14 h-6 ${isChecked ? "bg-blue-600" : "bg-gray-400"} rounded-full transition-all duration-200 ease-linear` },
            React.createElement("span", { className: `absolute left-0 top-1/2 w-8 h-8 ${isChecked ? "bg-blue-400" : "bg-white"} rounded-full transform ${isChecked ? "translate-x-6" : "translate-x-0"} -translate-y-1/2 transition-all duration-200 ease-linear ` }))));
};

export { Switch as default };
//# sourceMappingURL=switch.js.map
