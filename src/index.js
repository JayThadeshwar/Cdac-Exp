import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import Instructions from './instructions';
import Simulator from './simulator';

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