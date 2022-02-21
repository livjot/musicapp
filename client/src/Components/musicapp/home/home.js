import './homepage.css';

const Home = () =>{
    return(
        <>
        <div className="homepage">
            <div className="wrapper">
                <div className="d-flex flex-column text-center align-items-center">
                    <h2 className='m-3 p-2 text-white'>Welcome to Online Music</h2>
                        <p className='text-white lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className='btn bg-white' 
                    type='submit'>Know More</button>
                    </div>

            </div>
        </div>
        <div className='container mt-3 p-3' >
            <div className='row'>
                <div className='col'>
                    {/*<Cards />*/}
                </div>
            </div>
        </div>
        </>
    )
};

export default Home;