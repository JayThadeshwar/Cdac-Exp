function InstructItem(props){
    const ins = props.highlight ? {fontWeight: 'bold'} : {};
    return (
        <li style={ins}>
            {props.desc} 
        </li>
    );    
}

export default InstructItem;