"use client"

import Link from 'next/link'
import React from 'react'
import "./login.css"
import { usePathname } from 'next/navigation'

const Layout = ({ children }) => {
    const pathName = usePathname()
    // console.log("pathName", pathName)
    return (
        <div>
            {pathName != "/layout/loginteacher" ?
                <ul className='login-menu'>
                    <li>
                        <h4>Login Navbar</h4>
                    </li>
                    <li>
                        <Link href="/layout">Login Main</Link>
                    </li>
                    <li>
                        <Link href="/layout/loginstudent">Student Login</Link>
                    </li>
                    <li>
                        <Link href="/layout/loginteacher">Teacher Login</Link>
                    </li>
                </ul> : <Link href="/layout">Login Main</Link>
            }
            {
                children
            }
        </div>
    )
}

export default Layout