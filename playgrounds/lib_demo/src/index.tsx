import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { Button, NumberInput, Switch } from "twdesign"


const App = () => {
    const [number, setNumber] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="p-5">
            <h3 className="my-3">按鈕樣式：</h3>
            <div className="flex items-center ">
                <Button className="mr-2">按鈕</Button>
                <Button className="mr-2" loading={true}>按鈕</Button>
                <Button className="mr-2" disabled={true}>按鈕</Button>
            </div>
            <h3 className="my-3">Switch樣式:</h3>
            <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
            <h3 className="my-3">NumberInput樣式:</h3>
            <NumberInput mode="light" number={number} setNumber={setNumber} max={10} />
        </div>
    );
};
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);