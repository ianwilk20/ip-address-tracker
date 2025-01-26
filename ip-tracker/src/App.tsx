import './App.css'
import IPTracker from './pages/IPTracker'

function App() {
    return (
        <main className="w-[100vw] h-[100vh] overflow-x-hidden">
            <IPTracker />
            <div className="bg-white md:bg-transparent attribution py-4 text-xs sm:text-sm text-center text-gray-500">
                Challenge by&nbsp;
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className="underline text-blue-600 font-medium hover:text-black"
                >
                    Frontend Mentor
                </a>
                . Coded by&nbsp;
                <a
                    href="https://github.com/ianwilk20"
                    className="underline text-blue-600 font-medium hover:text-black"
                >
                    Ian Wilkinson
                </a>
                .
            </div>
        </main>
    )
}

export default App
