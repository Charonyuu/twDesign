import React from "react";
import { createRoot } from 'react-dom/client';
import {Button} from "@twdesign/react"
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<Button label="click!" />)