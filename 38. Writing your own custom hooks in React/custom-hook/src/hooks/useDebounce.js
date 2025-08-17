import { useEffect, useState } from "react";

export default function useDebounce(initialValue, delay) {
    const [state, setState] = useState(initialValue);
    const [debounceState, setDebounceState] = useState(initialValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceState(state);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [state, delay]);

    return [state, setState, debounceState];
}
