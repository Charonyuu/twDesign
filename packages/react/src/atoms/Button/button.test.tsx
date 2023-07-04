import React from "react";
import Button from "./index";
import { render } from "@testing-library/react"

describe("button 元件測試", () => {
    it("1.元件是否能正常展示", () => {
        // 利用render()函式建立一個component實例
        const label = "測試按鈕"
        const { getByText } = render(<Button label={label}></Button>);
        expect(getByText(label)).toBeInTheDocument()
    })
})