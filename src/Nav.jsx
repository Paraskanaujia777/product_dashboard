
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup')

    }
    return (
        
            <div className='listStyle'>

                {auth ? <div> <ul >
                    <li> <Link to='/'  >homepage</Link>  </li>
                    <li> <Link to='/add'  >Add Product</Link>  </li>
                    <li> <Link to='/update'  >Update Product</Link>  </li>
                    <li> <Link onClick={logout} to='/signup'  >Logout == ({JSON.parse(auth).name})</Link></li> </ul> </div> :

                   <div> <ul className='listStyle'>
                        <li><Link to='/signup'  >Signup</Link>  </li>
                        <li><Link to='/login'  >Login</Link>  </li>

                    </ul> </div>}

            </div>

        



    )
}

export default Nav