import Button from '@material-ui/core/Button';

function TestButton(props){
    return (
        <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => {
                props.testSample(props.sampleName)
                setTimeout(() => {
                    props.testSample('Z')
                }, 3500)
            }}
        >
            Test sample {props.sampleName}
        </Button>
    );
}

export default TestButton;