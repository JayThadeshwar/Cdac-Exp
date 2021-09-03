import Modal from 'react-modal';
import React from 'react';

import Wire from './components/wire';
import CanvasElement from './components/canvas_area';
import TestTube from './components/testtube';

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
        const toTilt = this.props.toTilt
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

                <div className='ttcol'>
                <TestTube ttid='tt1' tx='-450' ttname='A' tilt={toTilt === 'A'}/>
                <TestTube ttid='tt2' tx='-530' ttname='B' tilt={toTilt === 'B'}/>
                <TestTube ttid='tt3' tx='-590' ttname='C' tilt={toTilt === 'C'}/>
                <TestTube ttid='tt4' tx='-650' ttname='D' tilt={toTilt === 'D'}/>
                </div>
                <div className='notificationSec'>
                    <span className='notificationMsg'>
                        {this.props.message}
                    </span>                    
                </div>
            </div>            
        );
    }
} 

export default Simulator;