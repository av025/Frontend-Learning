//* Let's create Impression Trackable Component which track user interaction
  const ImpressionTrackable = function (ChildComponent) {
    return (props) => {
      console.log("Impression Trackable", props);

      const handleUserClick = () => {
        console.log("Handle User Click", ChildComponent.name)
        //* Printing the Component Name means function name every function have this property !!!!
      }

      const handleMouseEnter = () => {
        console.log("Handle Mouse Enter ", ChildComponent.name);
      }

      return (
        <div onClick={handleUserClick} onMouseEnter={handleMouseEnter}>
          <ChildComponent {...props} />
        </div>
      )
    }
  }

  export default ImpressionTrackable; 