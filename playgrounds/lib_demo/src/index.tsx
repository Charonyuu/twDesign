import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { Button, NumberInput, Switch } from "twdesign"

const App = () => {
    const [number, setNumber] = useState(0);
    const [isChecked, setIsChecked] = useState(false);


    return (
        <>
            <NumberInput number={number} setNumber={setNumber} max={10} />
            <Button label="click!" />
            <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
        </>
    );
};
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);