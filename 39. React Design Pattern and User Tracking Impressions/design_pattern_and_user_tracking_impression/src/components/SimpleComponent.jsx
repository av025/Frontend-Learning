import ImpressionTrackable from "./ImpressionTrackable";

function SimpleComponent() {
    return <>
    Simple Component
    </>
}

const EnchancedSimpleTrackableComponent = ImpressionTrackable(SimpleComponent);

export default EnchancedSimpleTrackableComponent; 