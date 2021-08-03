import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import './index.css';

import stand from './images/stand.png';
import cork from './images/cork.png';
import nail from './images/nail.png';
import battery from './images/battery.png';
import bulb from './images/bulb.png';
import bwire from './images/blackwire1.png';
import rwire from './images/blackpostobulb.png';
import cirDiag from './images/ciruitdiag.png';
import keytop from './images/keytop.png';
import key from './images/key.png';
import bwire2 from './images/w1.png';
import wire3 from './images/w2.png';

class TestTube extends React.Component{    
    render(){
        return (
            <motion.div 
                className='testtube'
                id={this.props.ttid}
                whileTap={{                
                    translateX: parseInt(this.props.tx), 
                    translateY: -250,
                    rotate: -90
                }}
                transition={{duration:2}}
            >
                <span 
                    style={{
                        position:'relative', 
                        top:'15px', 
                        left: '10px'
                    }}
                >
                    {this.props.ttname}
                </span>
                <div className='liquid'>
                </div>                    
            </motion.div>
        );
    }
}

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

function InstructItem(props){
    const ins = props.highlight ? {fontWeight: 'bold'} : {};
    return (
        <li style={ins}>
            {props.desc} 
        </li>
    );    
}

class Instructions extends React.Component
{
    render(){
        const info = [
            'Connect a wire between nail and negative terminal of the battery.',
            'Then, connect a wire between positive terminal of battery and bulb.',
            'Now, connect a wire between another nail and switch.',
            'Finally, connect a wire between switch and bulb.',
            'Connect the key to complete the circuit.'
        ];

        const listOfInst = info.map((inst,index)=>{
            let val = this.props.toHighlight === index
            return (
                <InstructItem highlight={val} desc={inst} key={index}/>
            );
        });

        const sc1 = this.props.isInstScreen ? {display: 'block'} : {display: 'none'};
        const sc2 = this.props.isInstScreen ? {display: 'none'} : {display: 'block'};
        
        return (
            <div style={{textAlign: 'center'}}>
                <p 
                    style={{
                        fontSize: '26px',
                        textAlign: 'center'
                    }}
                >
                    Instructions
                </p>
                <div style={sc1}>
                    <ol>
                        {listOfInst}
                    </ol>
                </div>
                <div style={sc2}>
                    <table border='1px'>
                        <thead>
                            <tr>
                                <th>Sample</th>
                                <th>Chemical name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>HCL - Hydrochloric acid</td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>H₂SO₄ - Sulfuric acid</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>C₆H₁₂O₆ - Glucose</td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>C2H5OH - Alcohol</td>
                            </tr>
                        </tbody>                    
                    </table>

                    <label htmlFor='sample'>Which sample do you want to test?</label><br/>
                    {/* <select name='sample' id='sample' onChange={(val)=>this.onSampleChange(val)}>
                        <option value="Hydrochloric acid">A</option>
                        <option value="Sulfuric acid">B</option>
                        <option value="Glucose">C</option>
                        <option value="Alcohol">D</option>
                    </select>
                    <button>Test sample</button> */}

                    <div className='butGrp' name='sample'>
                        <button onClick >Test sample A</button>
                        <button>Test sample B</button>
                        <button>Test sample C</button>
                        <button>Test sample D</button>
                    </div>
                
                </div>                
            </div>
        );
    }
    
}

function Wire(props){

    const basicStyle = {
        display: props.toShow ? 'block' : 'none',
        position: 'absolute',
        height: props.wh+'px',
        width: props.ww+'px',        
        top: props.wtop+'px',
        left: props.wleft+'px',
        transform: `rotate(${props.rot})`
    }
    
    return(
        <img src={props.imgName} style={basicStyle} alt='Black wire'/>                               
    );
}

class Simulator extends React.Component{ 
    constructor(props){
        super(props);
        this.state ={
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }    

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render(){     
        return(
            <div>    
                <CanvasElement 
                    showImage = {(i) => this.props.onWireDrawn(i)}
                />      
                <img src={stand} className='stand' alt='Stand'/>
                <img src={cork} className='cork' alt='Cork'/>

                <div className='beaker'>
                    <div className='beakliquid'>                        
                    </div>
                </div>

                <img src={battery} className='battery' alt='Battery'/>
                <img src={bulb} className='bulb' alt='Bulb'/>            
                <div>
                    <button onClick={this.handleOpenModal} className='diag'>Show diagram</button>
                    <Modal 
                        style={{
                            content: {
                                margin: '10px'
                            }
                        }}
                        className='modal'
                        overlayClassName='overlay-modal'
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                    <img src={cirDiag} className='circuitDiag' alt='Circuit diagram'/>                
                    <button onClick={this.handleCloseModal}>X</button>
                    </Modal>
                </div>

                <img src={nail} className='nail' id='nail-1' alt='Nail 1'/>
                <img src={nail} className='nail' id='nail-2' alt='Nail 2'/>
                <img src={keytop} className='keytop' alt='Switch'/>
                <img src={key} className='key' alt='Key'/>
                
                <Wire imgName={wire3} wh='380' ww='380' wtop='168' wleft='225' rot='80deg' toShow = {this.props.wireInfo.keytopToBulb}/>
                <Wire imgName={bwire} wh='28' wtop='245' wleft='-55' rot='82deg' toShow = {this.props.wireInfo.negTerToNail}/>
                <Wire imgName={rwire} wh='180' ww='310' wtop='110' wleft='113' rot='15deg' toShow = {this.props.wireInfo.posTerToBulb}/>
                <Wire imgName={bwire2} wh='250' ww='250' wtop='313' wleft='89' toShow = {this.props.wireInfo.nailToKeytop}/>


                <TestTube ttid='tt1' tx='-450' ttname='A'/>
                <TestTube ttid='tt2' tx='-530' ttname='B'/>
                <TestTube ttid='tt3' tx='-590' ttname='C'/>
                <TestTube ttid='tt4' tx='-650' ttname='D'/>
            </div>            
        );
    }
} 

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            wireInfo: {
                negTerToNail: false,
                posTerToBulb: false,
                nailToKeytop: false,
                keytopToBulb: false
            },            
            instNumber: 0
        }
    }

    showWire(ch) {
        console.log('IN')
        if(ch === 1){
            this.setState({
                wireInfo: {
                    ...this.state.wireInfo,
                    negTerToNail: true
                },
                instNumber: 1              
            });
        }
        if(ch === 2){
            this.setState({
                wireInfo: {
                    ...this.state.wireInfo,
                    posTerToBulb: true
                },
                instNumber: 2               
            });
        }
        if(ch === 3){
            this.setState({
                wireInfo: {
                    ...this.state.wireInfo,
                    nailToKeytop: true
                },
                instNumber: 3               
            });
        }
        if(ch === 4){
            this.setState({
                wireInfo: {
                    ...this.state.wireInfo,
                    keytopToBulb: true
                },
                instNumber: 4                   
            });
        }        
    }

    render(){
        return (
            <div className="main-container">
                <div className="heading">
                    <h2>Conduction of electricity through acid and bases</h2>    
                </div>
                <div className="content">
                    <div className="simulator">                        
                        <Simulator wireInfo={this.state.wireInfo} onWireDrawn= {(i)=>this.showWire(i)}/>
                    </div>
                    <div className="instructions">
                        <Instructions toHighlight={this.state.instNumber} isInstScreen={this.state.instNumber != 4}/>
                    </div>
                </div>                                
            </div>
        );
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root')
);