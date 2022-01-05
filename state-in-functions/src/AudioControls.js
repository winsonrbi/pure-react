import React, { useState } from 'react';

function AudioSubControl({title, volume, setFunction}) {
    function add(){
        if(volume < 100){
            setFunction(volume + 1);
        }
    }
    function subtract(){
        if(volume > 1){
            setFunction(volume - 1);
        }
    }
    return(
        <div>
            <button onClick={add}>
                +
            </button>
            <div>
                <span>{volume}</span>
                <h1>{title}</h1>
            </div>
            <button onClick={subtract}>
                -
            </button>
        </div>
    );
}
function AudioControls() {
    const [volume, setVolume] = useState(0);
    const [treble, setTreble] = useState(0);
    const [mid, setMid] = useState(0);
    const [bass, setBass] = useState(0);
    const [all, setAll] = useState({
        volume: 1,
        bass: 1,
        mid: 1,
        treble: 1,
    })
   
    function setV(volume){
        setAll(
            {
                volume: volume,
                bass: all.bass,
                mid: all.mid,
                treble: all.treble,
            }
        )
    }
    function setT(treble){
        setAll(
            {
                volume: all.volume,
                bass: all.bass,
                mid: all.mid,
                treble: treble,
            }
        )
    }
    function setM(mid){
        setAll(
            {
                volume: all.volume,
                bass: all.bass,
                mid: mid,
                treble: all.treble,
            }
        )
    }
    function setB(bass){
        setAll(
            {
                volume: all.volume,
                bass: bass,
                mid: all.mid,
                treble: all.treble,
            }
        )
    }
    return(
        <div>
            <AudioSubControl title='Volume' volume={all.volume} setFunction={setV}/>
            <AudioSubControl title='Treble' volume={all.treble} setFunction={setT}/>
            <AudioSubControl title='Mid' volume={all.mid} setFunction={setM}/>
            <AudioSubControl title='Bass' volume={all.bass} setFunction={setB}/>
        </div>
    );
}

export default AudioControls;