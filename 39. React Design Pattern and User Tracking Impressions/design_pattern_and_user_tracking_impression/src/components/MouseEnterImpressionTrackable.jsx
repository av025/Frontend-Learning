function MouseEnterImpressionTrackable({children}) {
  
    const mouseEnterHandler = () => {  
        console.log("Mouse Enter ", children.name)
    
    }

    return <div onMouseEnter={mouseEnterHandler}>
        {children}
    </div>
}; 

export default MouseEnterImpressionTrackable; 