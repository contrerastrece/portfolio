import {Link, NavLink} from 'react-router-dom'
import './nav.css'
export const Nav = () => {
  return (
    <>
    <div className='nav_container'>
        <div className='logo'>
            <h2>CT</h2>
        </div>
        <div className='links'>
            <ul>
                <li>
                    <NavLink to='/' className='link'>Home</NavLink>
                    <NavLink to='/about' className='link'>About</NavLink>
                    <NavLink to='/project' className='link'>Project</NavLink>
                    <NavLink to='/contact' className='link'>Contact</NavLink>
                </li>
            </ul>
        </div>
        <div className='btn'>
            <Link to='/contact' className='btnlink'>Let&rsquo;s Talk</Link>
        </div>
    </div>
    </>
  )
}