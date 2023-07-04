import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput';

test('it increments and decrements the number', () => {
    const Wrapper = () => {
        const [number, setNumber] = useState(5);
        return <NumberInput number={number} setNumber={setNumber} max={10} />;
    };

    const { getByText, getByDisplayValue, container } = render(<Wrapper />);

    const decrementButton = getByText('-');
    const incrementButton = getByText('+');
    const input = container.querySelector('input');
    fireEvent.click(incrementButton);
    expect(getByDisplayValue('6')).toBeTruthy();

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(getByDisplayValue('4')).toBeTruthy();

    if (input) {
        fireEvent.change(input, { target: { value: 7 } });
        expect(getByDisplayValue("7")).toBeTruthy();
    }
});
