import React, { useRef, useEffect, useState } from 'react';

function CanvasElement(props){
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    
    const [isDrawing, setIsDrawing] = useState(false);
    const [start, setStart] = useState({});

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 888;
        canvas.height = 550;

        const context = canvas.getContext('2d');        
        context.strokeStyle = 'black'
        context.lineWidth = 3
        canvas.style.width = canvas.width + 'px';
        canvas.style.height = canvas.height + 'px';
        contextRef.current = {
            ctx: context,
            ofx: canvas.offsetLeft,
            ofy: canvas.offsetTop
        }
    },[]);

    function startDrawing({nativeEvent}){        
        const {x,y} = nativeEvent
        console.log(x+' '+y);
        if(((x>=56 && x<=63) && (y>=136 && y<=144)) || ((x>=88 && x<=96) && (y>=368 && y<=378))){
            contextRef.current.ctx.strokeStyle = 'black';
            setStart({
                xcord: x - contextRef.current.ofx,
                ycord: y - contextRef.current.ofy 
            })
            setIsDrawing(true)  
        }  
        if(((x>=135 && x<=140) && (y>=125 && y<=132)) || ((x>=408 && x<=420) && (y>=215 && y<=222))){
            contextRef.current.ctx.strokeStyle = 'black';
            setStart({
                xcord: x - contextRef.current.ofx,
                ycord: y - contextRef.current.ofy 
            })
            setIsDrawing(true) 
        }
        if(((x>=109 && x<=117) && (y>=367 && y<=376)) || ((x>=317 && x<=322) && (y>=503 && y<=507))){
            contextRef.current.ctx.strokeStyle = 'black';
            setStart({
                xcord: x - contextRef.current.ofx,
                ycord: y - contextRef.current.ofy 
            })
            setIsDrawing(true) 
        } 
        if(((x>=361 && x<=370) && (y>=500 && y<=508)) || ((x>=415 && x<=422) && (y>=215 && y<=222))){
            contextRef.current.ctx.strokeStyle = 'black';
            setStart({
                xcord: x - contextRef.current.ofx,
                ycord: y - contextRef.current.ofy 
            })
            setIsDrawing(true) 
        }            
    }

    function draw({nativeEvent}){
        if(!isDrawing){
            return
        }
        const {x,y} = nativeEvent    
        const contx = contextRef.current.ctx;
        const ofx = contextRef.current.ofx;
        const ofy = contextRef.current.ofy; 

        contx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        contx.beginPath();
        contx.moveTo(start.xcord,start.ycord)
        contx.lineTo(x-ofx, y-ofy);        
        contx.stroke();
    }

    function completeDrawing({nativeEvent}){
        const {x,y} = nativeEvent  
        setIsDrawing(false)
        contextRef.current.ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        if(((x>=56 && x<=63) && (y>=136 && y<=144)) || ((x>=88 && x<=96) && (y>=368 && y<=378))){
            props.showImage(1)
        }
        if(((x>=135 && x<=140) && (y>=125 && y<=132)) || ((x>=408 && x<=420) && (y>=215 && y<=222))){
            props.showImage(2)
        }  
        if(((x>=109 && x<=117) && (y>=367 && y<=376)) || ((x>=317 && x<=322) && (y>=503 && y<=507))){
            props.showImage(3)
        }   
        if(((x>=361 && x<=370) && (y>=500 && y<=508)) || ((x>=415 && x<=422) && (y>=215 && y<=222))){
            props.showImage(4)
        }
    }

    function getCord({nativeEvent}){
        const {x,y} = nativeEvent  
        console.log(x+' '+y)
    }

    return (
        <canvas 
            onMouseDown = {startDrawing}
            onMouseMove = {draw}
            onMouseUp = {completeDrawing}  
            onClick = {getCord}                   
            ref={canvasRef}            
        />
    );
}

export default CanvasElement;