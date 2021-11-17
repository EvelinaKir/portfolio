import style from './smallMenu.module.scss'
import gear from '../../images/smallMenuGear.svg'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import classNames from 'classnames'
import gsap from "gsap";

export const SmallMenu = () => {
const menuRef = useRef<any>(null)
const navigate = useNavigate()


useEffect(() => {
gsap.to(menuRef.current, {
    filter: 'blur(0px)'
})
},[])


const handleGo = (path: string) => {
const projectTl = gsap.timeline({onComplete: () => navigate(path)})
projectTl.to(menuRef.current,{
    marginBottom: '100vh'
})

}

    const [show, setShow] = useState<boolean>(false)
    return (
        <>
        <div ref={menuRef} className={style.container}>
            <img className={show ? style.turn : style.noTurn} onClick={() => setShow(!show)} src={gear} alt="menuButton" />
            <div  className={classNames(style.bigMenu, show ? style.showMenu: style.hideMenu)}>
                <ul>
                <li>
                <button onClick={() => navigate('/projects')} className={style.navButton}>Projects</button>
        </li>
        <li>
        <button onClick={() => navigate('/profile')} className={style.navButton}>Profile</button>
        </li>
                </ul>
            </div>
        </div>
        <div>

        </div>
        </>
    )
}