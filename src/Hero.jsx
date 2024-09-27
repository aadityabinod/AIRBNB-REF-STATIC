import hello from './assets/hello.png'
import '/home/azon/Documents/VS CODE/react/air-bnb/src/App.css'

// Import the image files

function Hero() {
    return (
        <img className='Hero' src={hello} alt="Hello" /> // Return the JSX
    );
}

export default Hero; // Make sure to export the component
