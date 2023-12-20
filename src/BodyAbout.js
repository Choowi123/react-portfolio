import './App.css'
import FlipCard from "./FlipCard.js"

function BodyAbout() {
    return (
        <>
            <div className='body'>
                <h1 className='intro2'>About Me</h1>
                <img src='/about-me-pic.JPG' className='my-pic2' alt='myPic'></img>
                <FlipCard />
            </div>
        </>
    )
}

export default BodyAbout