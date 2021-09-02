import React from 'react';
import { motion } from 'framer-motion';

class TestTube extends React.Component {
    render() {
        return (
            <motion.div
                className='testtube'
                id={this.props.ttid}
                whileTap={{
                    translateX: parseInt(this.props.tx),
                    translateY: -250,
                    rotate: -90
                }}
                transition={{ duration: 2 }}
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
                <div className='liquid'>
                </div>
            </motion.div>
        );
    }
}

export default TestTube