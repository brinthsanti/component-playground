import React, { useContext, useState, useRef } from "react";
import { NestedCheckBoxes, transform } from '../components/NestedCheckBoxes';
const config = [
    {
        label: 'Root',
        id: 0,
        children: [
            {
                label: "Parent1",
                id: 1,
                children: [
                    {
                        label: "Child p1.c1",
                        id: 2,
                    },
                    {
                        label: "Child p1.c2",
                        id: 3,
                    },
                    {
                        label: "Childp1.c3",
                        id: 4,
                    },
                ],
            },
            {
                label: "Parent2",
                id: 5,
                children: [
                    {
                        label: "Child p2.c1",
                        id: 12,
                    },
                    {
                        label: "Child p2.c2",
                        id: 13,
                    },
                    {
                        label: "Childp2.c3",
                        id: 14,
                    },
                ],
            },
        ]
    },

];


const intialState = transform({ config, isReset: true });
export default function NestedCheckboxExamples() {
    const [checkboxes, setCheckboxes] = useState(intialState);
    return (
        <div>NestedCheckBoxes<br />
            <NestedCheckBoxes checks={checkboxes} setCheckboxes={setCheckboxes} checkboxes={checkboxes} />
        </div>);
}