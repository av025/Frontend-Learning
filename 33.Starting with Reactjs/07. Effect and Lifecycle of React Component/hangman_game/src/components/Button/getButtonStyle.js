export function getButtonStyle(buttonStyle) { 

    if(buttonStyle === "primary") {
        return `bg-blue-500 hover:bg-blue-700`
    }else if(buttonStyle === "warning") {
        return `bg-yellow-500 hover:bg-yellow-700`
    }else if(buttonStyle === "success") {
        return `bg-green-500 hover:bg-green-700`
    }else if(buttonStyle === "secondary") {
        return `bg-gray-500 hover:bg-gray-700`
    }else if(buttonStyle === "error") {
        return `bg-red-500 hover:bg-red-700`
    }

}