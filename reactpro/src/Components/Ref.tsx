import { useEffect, useRef, useState } from "react"

const Ref = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);


return(
    <div>
        <h1>Current Count: {count}</h1>
        <h2>Previous Count: {prevCountRef.current}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
);
};

export default Ref;