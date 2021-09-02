function Wire(props) {

    const basicStyle = {
        display: props.toShow ? 'block' : 'none',
        position: 'absolute',
        height: props.wh + 'px',
        width: props.ww + 'px',
        top: props.wtop + 'px',
        left: props.wleft + 'px',
        transform: `rotate(${props.rot})`
    }

    return (
        <img src={props.imgName} style={basicStyle} alt='Black wire' />
    );
}

export default Wire;