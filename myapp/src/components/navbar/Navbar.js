import './navbar.css'

function Navbar()
{
	return(
		<div className='navbar'> 
			<div className='left'>
				<div className='logo'>
					LOGO
				</div>
			</div>
			<div className='right'>
				<input className='button_login1' type="button" value='LOG IN'></input>
				<input className='button_login2' type="button" value='LOG OUT'></input>
			</div>
		</div>
	)
}

export default Navbar;