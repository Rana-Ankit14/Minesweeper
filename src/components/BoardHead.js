import React from 'react';

export const BoardHead = (props) => {
    let minutes = Math.floor(props.time/60);
    let seconds = props.time%60; //props.state.time - minutes * 60 || 0;

    let fomatedSecond = seconds<10? `0${seconds}`: seconds;

    let time = `${minutes}:${fomatedSecond}`;
    return (
        <div className="boardHead">
            <div className="flag">
                {props.flags}
            </div>
            <button className="reset">Reset</button>
            <div className="timer">
                {time}
            </div>
        </div>
    );
};

