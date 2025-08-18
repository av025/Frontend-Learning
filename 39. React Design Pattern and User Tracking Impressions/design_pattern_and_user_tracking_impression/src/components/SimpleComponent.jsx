import ImpressionTrackable from "./ImpressionTrackable";

function SimpleComponent({x}) {
    return <>
    Simple Component {x}
    </>
}

// const EnchancedSimpleTrackableComponent = ImpressionTrackable(SimpleComponent)

// export default EnchancedSimpleTrackableComponent;  

export default SimpleComponent; 
