import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';



function App() {
    return (
        <>
            <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
                {/* Fullscreen Background Layer */}
                <div className='fixed inset-0 -z-10 h-screen w-screen'>
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
                </div>
                
                {/* Main Container */}
                <div className='container mx-auto px-8'>
                    <NavBar />
                    <Hero />
                    <About />
                    <Technologies/>
                    <Experience/>
                    <Projects/>
                    <Contact/>
                </div>
            </div>
        </>
    );
}

export default App;