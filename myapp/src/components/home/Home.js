import Navbar from '../navbar/Navbar';
import Intro from '../intro/Intro';
import  './home.css'


function Home()
{
	return(
		<div className='home'>
			<Navbar/>
			<Intro/>
		</div>
	)
	
}

export  default Home;