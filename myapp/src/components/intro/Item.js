import { FiPlay } from 'react-icons/fi';
// import { VscStarEmpty } from 'react-icons/vs';
import { RiPagesLine } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { GiVrHeadset } from 'react-icons/gi';
import { SlLike } from 'react-icons/sl';
import { FiMessageSquare } from 'react-icons/fi';
import './item.css'
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react';

const list =[
	{name:"item1 duration1",icon:  <FiPlay/> ,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."},
	{name:"item1 duration2",icon:  <RiPagesLine/> ,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."},
	{name:"item1 duration3",icon: <TbWorld/>,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."},
	{name:"item1 duration4",icon:  <GiVrHeadset/> ,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."},
	{name:"item1 duration5",icon:  <SlLike/> ,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."},
	{name:"item1 duration6",icon:  <FiMessageSquare/> ,title:"Instant Features", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."}
]



function Item() {
	const {Value, setValue} = useState(0);


	const springs = useSpring({
    from: { x: -20},
    to: { x:  0 },
	 
  })
	return (
		 <div className="item">
			<div   className="wrapper">
				{list.map((user) => (
  					<animated.div style={{ ...springs }}  className={user.name}>
						<div className='circle_item'>
						<div className='play'>{user.icon}</div>
						</div>
						<h2>{user.title}</h2>
						<p>{user.desc}</p>
					</animated.div>
  				))}
			 </div>
			 <div className='ligne_bottom'></div> 
		</div>
	)
}

export default Item;