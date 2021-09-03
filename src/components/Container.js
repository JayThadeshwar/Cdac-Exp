import React from 'react';

import '../index.css';
import Instructions from '../instructions';
import Simulator from '../simulator';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wireInfo: {
                negTerToNail: false,
                posTerToBulb: false,
                nailToKeytop: false,
                keytopToBulb: false
            },
            instNumber: 0,
            isInstScreen: true,
            toTilt: 'Z',
            msg: 'Start constructing circuit by following the instructions.'
        }
    }

    showWire(ch) {
        ch--
        if (this.state.instNumber == ch && ch < 4) {

            let wireInstMap = new Array(4).fill(false)
            for (let i = 0; i < 4; i++) {
                if (i <= ch)
                    wireInstMap[i] = true
            }

            if(ch == 3){
                this.setState({
                    wireInfo: {
                        negTerToNail: wireInstMap[0],
                        posTerToBulb: wireInstMap[1],
                        nailToKeytop: wireInstMap[2],
                        keytopToBulb: wireInstMap[3]
                    },
                    instNumber: ch + 1,
                    msg: 'Great work, you have constructed the circuit. Now start testing the samples.',
                    isInstScreen: false
                });                
            } else{
                this.setState({
                    wireInfo: {
                        negTerToNail: wireInstMap[0],
                        posTerToBulb: wireInstMap[1],
                        nailToKeytop: wireInstMap[2],
                        keytopToBulb: wireInstMap[3]
                    },
                    instNumber: ch + 1,
                    msg: 'Well done! You are doing great.'                
                });
            }            
        } else if(this.state.isInstScreen){
            this.setState({
                msg: 'Please, construct the circuit according to the instructions.'
            });
        }
    }

    testSample(sampleName){
        this.setState({
            toTilt: sampleName
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="heading">
                    <h2>Conduction of electricity through acid and bases</h2>
                </div>
                <div className="content">
                    <div className="simulator">
                        <Simulator 
                            wireInfo={this.state.wireInfo} 
                            onWireDrawn={(i) => this.showWire(i)} 
                            message={this.state.msg} 
                            toTilt={this.state.toTilt}
                        />
                    </div>
                    <div className="instructions">
                        <Instructions 
                            toHighlight={this.state.instNumber} 
                            isInstScreen={this.state.isInstScreen} 
                            testSample={(sampleName)=> this.testSample(sampleName)}    
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Container