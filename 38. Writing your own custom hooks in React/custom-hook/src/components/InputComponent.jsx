import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function InputComponent() {
    const [search, setSearch, debouncedSearch] = useDebounce("", 3000);

    useEffect(() => {
        console.log("Debounced:", debouncedSearch);
    }, [debouncedSearch]);

    return (
        <input
            type="text"
            value={search}  
            onChange={(e) => setSearch(e.target.value)}
        />
    );
} 

export default InputComponent;
