import { Button } from './Button';
import { useState } from 'react';
import { Count } from './Count';
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return <>
        <h1>Counter</h1>
        <Count value={ count }/>
        <Button label ={'Increment'} onClick ={() => setCount(count + 1)}/>
        <Button label ={'Decrement'} onClick = {() => setCount(count - 1)}/>
    </>
    
}
export { Counter };