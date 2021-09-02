import React from 'react';
import InstructItem from './components/instruct_item'

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

export default Instructions;