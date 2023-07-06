import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ buttonClass, label }) => {
    return React.createElement("button", { className: twMerge(`py-2 px-5 bg-blue-400 rounded-2xl`, buttonClass) },
        "123",
        label);
};

export { Button as default };
//# sourceMappingURL=button.js.map
