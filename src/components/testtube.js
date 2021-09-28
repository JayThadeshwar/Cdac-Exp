import React from 'react';
import { motion } from 'framer-motion';

class TestTube extends React.Component {    
    render() {
        const variants = {
            rotate: {
                translateX: parseInt(this.props.tx),
                translateY: -250,
                rotate: -90,
                transition: { duration: 1.5 }
            },
            stop: {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                transition: { duration: 1 }
            }
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
                    className='liquid'                    
                >
                </motion.div>
            </motion.div>
        );
    }
}

export default TestTube