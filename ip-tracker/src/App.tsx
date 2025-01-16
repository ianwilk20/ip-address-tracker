import { useState } from 'react'
import './App.css'
import IPTracker from './pages/IPTracker'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <IPTracker />
        </>
    )
}

export default App
