import React from 'react';
import { motion } from 'framer-motion';

// defliquid : true
// liquid : false

class TestTube extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            liqClass: 'defliquid'
        }
    }   

    render() {
        const variants = {
            rotate: {
                translateX: parseInt(this.props.tx),
                translateY: -270,
                rotate: -100,
                transition: { duration: 1.5 }
            },
            stop: {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                transition: { duration: 1 }
            }
        }

        if(this.state.liqClass === 'defliquid' && this.props.toTilt === this.props.ttname){
            let liq = 'liquid';
            this.setState({
                liqClass: liq
            });
        }
    
        return (
            <motion.div
                className='testtube'
                id={this.props.ttid}
                variants={variants}
                animate={this.props.tilt ? 'rotate' : 'stop'}                
            >
                <span
                    style={{
                        position: 'relative',
                        top: '15px',
                        left: '10px'
                    }}
                >
                    {this.props.ttname}
                </span>
                <motion.div 
                    className={this.state.liqClass}                    
                >
                </motion.div>
            </motion.div>
        );
    }
}

export default TestTube