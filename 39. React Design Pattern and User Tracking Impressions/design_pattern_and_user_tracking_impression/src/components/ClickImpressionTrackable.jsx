function ClickImpressionTrackable(ChildComponent) {
  return (props) => {
    const handleUserClick = () => {
      console.log("User Clicked ", ChildComponent.name);
    };

    return (
      <div onClick={handleUserClick}>
        <ChildComponent {...props} />
      </div>
    );
  };
}

export default ClickImpressionTrackable;
