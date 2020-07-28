import React from 'react';
import {Cells} from "./Cells";

export const Row = (props) => {
    let cell = props.cells.map((data,index)=> {
        return (
            <Cells
            data={data}
            key = {index}
            />
        )
    })
    return (
        <div className="row">
            {cell}
        </div>
    );
};


