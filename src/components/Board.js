import React, {useState} from "react";
import {Row} from "./Row"
import {BoardHead} from "./BoardHead";

export const Board = () => {
    const [state, setState] = useState({
        rows: 20,
        cols: 20,
        flags: 20,
        mines: 20,
        time: 0
    })
    const createBoard = () => {
        const rows = state.rows;
        const cols = state.cols;
        const flags = state.flags;
        const mines = state.mines;
        let board = [];
        for (let i = 0; i < rows; i++) {
            board.push([]);
            for (let j = 0; j < cols; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    count: 0,
                    isOpen: false,
                    hasMine: false,
                    hasFlag: false
                })
            }
        }

        for (let i = 0; i < mines; i++) {
            let randomRow = Math.floor(Math.random() * rows);
            let randomCol = Math.floor(Math.random() * cols);
            let cell = board[randomRow][randomCol];
            if (cell.hasMine === true) {
                i--;
            } else {
                cell.hasMine = true;
            }
        }
        return board;
    }
    let boardRows = createBoard();

    let rows = boardRows.map((row, index) => {
        return (
            <Row
                cells={row}
                key={index}
            />
        )
    })

    return (
        <div>
            <BoardHead time={state.time} flags={state.flags}/>
            <div className="board">
                {rows}
            </div>
        </div>
    )
}
