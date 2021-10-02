import Button from '@material-ui/core/Button';

function TestButton(props){
    let variantType = props.toDisable ? 'disabled' : 'outlined'
    return (
        <Button 
            variant={variantType}
            color="primary" 
            onClick={() => {
                props.testSample(props.sampleName)
                setTimeout(() => {
                    props.testSample('Z')
                }, 11500)
            }}
        >
            Test sample {props.sampleName}
        </Button>
    );
}

export default TestButton;