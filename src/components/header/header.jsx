import React from 'react'
import {Container, LogoutBtn, Logo} from '../index.js'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Sign Up",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus
    }
  ]
  return (
    <header className='py-3 shadow bg-main '>
      <Container>
        <nav className='flex flex-wrap'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className='flex-wrap shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-zinc-500 bg-zinc-800 duration-300 px-4 py-1 rounded-full text-zinc-100 font-semibold mx-2 text-sm'>{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header