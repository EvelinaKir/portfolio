import style from './smallMenu.module.scss'
import gear from '../../images/smallMenuGear.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
export const SmallMenu = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className={style.container}>
            <img className={show ? style.turn : style.noTurn} onClick={() => setShow(!show)} src={gear} alt="menuButton" />
            <div className={classNames(style.bigMenu, show ? style.showMenu: style.hideMenu)}>
                <ul>
                <li>
          <Link to="/projects">Projects</Link >
        </li>
        <li>
            <Link to="/profile">Profile</Link >
        </li>
        <li>
          <Link  to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link  to="/abilities">Abilities</Link>
        </li>
                </ul>
            </div>
        </div>
    )
}