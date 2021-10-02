import React from 'react';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import '../index.css';
import Instructions from '../instructions';
import Simulator from '../simulator';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

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
            prevToTilt: 'Z',
            msg: 'Start constructing circuit by following the instructions.',
            isExpDone: 0,
            testDone: new Set(),
            glowBulb: false,
            classes: "",
            fillBeak: "",
            toDisable: false,
            isExpCompletedOnce: false
        }
    }

    showWire(ch) {
        ch--
        if (this.state.instNumber === ch && ch < 4) {

            let wireInstMap = new Array(4).fill(false)
            for (let i = 0; i < 4; i++) {
                if (i <= ch)
                    wireInstMap[i] = true
            }

            if (ch === 3) {
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
            } else {
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
        } else if (this.state.isInstScreen) {
            this.setState({
                msg: 'Please, construct the circuit according to the instructions.'
            });
        }
    }

    testSample(sampleName) {
        let stat = false
        if(this.state.testDone.size === 5 && sampleName === 'Z')
            stat = true         

        let gbulb = this.state.glowBulb
        let prevT = this.state.toTilt;
        if(gbulb === false && (prevT === 'A' || prevT === 'B')){
            gbulb = true
        }

        let sample = '';
        if(prevT === 'A')
            sample = 'Hydrochloric acid'
        else if(prevT === 'B')
            sample = 'Sulfuric acid'
        else if(prevT === 'C')
            sample = 'Glucose'
        else if(prevT === 'D')
            sample = 'Alcohol'
        
        this.setState({
            toTilt: sampleName,            
            testDone: this.state.testDone.add(sampleName),
            glowBulb: gbulb,            
            isExpDone: stat ? 1 : 0,
            msg: prevT !== 'Z' ?
            (gbulb ? 
            `Note that the bulb is glowing after adding the ${sample}. Please, reset before testing other samples.` : 
            `Note that the bulb is not glowing after adding the ${sample}. Please, reset before testing other samples.`) :
            'Wait for the sample to pour and then observe the bulb for the result.',
            toDisable: prevT !== 'Z' ? !this.state.toDisable : false
        })
    }

    handleBeakerReset (){        
        this.setState({
            classes: "",
            fillBeak: "",
            glowBulb: false,
            toDisable: false,
            msg: !this.state.isInstScreen ? 
            'Try testing other samples and observe the results' : this.state.msg
        });
    }

    triggerAnimation (){
        this.setState({
            classes: 'flowanimation',
            fillBeak: 'fill'
        });
    }

    handleCancel(){
        this.setState({
            isExpDone: 0,
            testDone: new Set(),
            isExpCompletedOnce: true            
        });
    }

    render() {
         
        return (
            <div className="main-container">
                <Dialog open={this.state.isExpDone}>
                    <DialogTitle>{"Experiment completed"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Well done, you have tested all the samples. 
                            Now, check if you are able to answer the questions 
                            related to this topic.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button 
                        onClick={() => this.props.history.push('/evaluation')}
                        color="primary" 
                    >
                        Yes, let's do it
                    </Button>
                    <Button 
                        onClick={() => this.handleCancel()} 
                        color="primary"
                    >
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>   
                <div className="heading" style={{display:'flex', justifyContent:'space-between',padding:'0px 15px'}}>
                    <Button 
                        variant="outlined" 
                        startIcon={<HomeIcon/>} 
                        id='headBut'
                        onClick={() => this.props.history.push('')}
                    >
                        Home
                    </Button>
                    <h2 id='mainHead'>Conduction of electricity through acid and bases</h2>
                    <Button 
                        variant={this.state.isExpCompletedOnce ? "outlined" : "disabled"} 
                        id='headBut'
                        onClick={() => this.props.history.push('/evaluation')}
                        hidden={true}
                    >
                        Self evaluation
                    </Button>
                </div>
                <div className="content">
                    <div className="simulator">
                        <Simulator
                            wireInfo={this.state.wireInfo}
                            onWireDrawn={(i) => this.showWire(i)}
                            message={this.state.msg}
                            toTilt={this.state.toTilt}
                            glowBulb={this.state.glowBulb}
                            classes={this.state.classes}
                            fillBeak={this.state.fillBeak}
                            handleBeakerReset = {() => this.handleBeakerReset()}
                            triggerAnimation = {() => this.triggerAnimation()}
                        />
                    </div>
                    <div className="instructions">
                        <Instructions
                            toHighlight={this.state.instNumber}
                            isInstScreen={this.state.isInstScreen}
                            testSample={(sampleName) => this.testSample(sampleName)}
                            glowBulb={this.state.glowBulb}
                            toDisable={this.state.toDisable}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Container