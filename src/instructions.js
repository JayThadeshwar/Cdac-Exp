import React from 'react';

import InstructItem from './components/instruct_item'
import TestButton from './components/testbutton'

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
            <div>
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

                    <label htmlFor='sample' style={{margin:'0px 20px'}}>Which sample do you want to test?</label><br/>                    

                    <div className='butGrp' name='sample'>
                        <TestButton testSample={this.props.testSample} sampleName='A' toDisable={this.props.toDisable}/>
                        <TestButton testSample={this.props.testSample} sampleName='B' toDisable={this.props.toDisable}/>
                        <TestButton testSample={this.props.testSample} sampleName='C' toDisable={this.props.toDisable}/>
                        <TestButton testSample={this.props.testSample} sampleName='D' toDisable={this.props.toDisable}/>                       
                    </div>
                
                </div>                
            </div>
        );
    }   
}

export default Instructions;