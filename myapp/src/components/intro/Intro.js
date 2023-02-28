import './intro.css'
import { GrPlayFill } from 'react-icons/gr';
import Item from './Item';

function Intro()
{
	return(
		<div className='intro'>
			<div className='top_intro'>
			<h4>Landing template for startups</h4>
			<p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
			</div>
			<div className='bottom_intro'>
				<input className='button_intro1' type="button" value='Start free trial'></input>
				<input className='button_intro2' type="button" value='Learn more'></input>
			</div>
			<div className='image_intro'>
				<img className='img_intro' alt="fff" src='https://open.cruip.com/assets/hero-image-01-247d9f10.jpg'></img>
				<div className='circle'>
					<GrPlayFill className='play'/>
				</div>
			</div>
			<div className='middle_top'>
				<h1>The majority our customers do not understand their workflows.</h1>
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<Item/>
		</div>	
	)

}

export default Intro;