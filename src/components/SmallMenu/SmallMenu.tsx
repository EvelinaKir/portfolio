import style from './smallMenu.module.scss'
import gear from '../../images/smallMenuGear.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
export const SmallMenu = () => {
    const [show, setShow] = useState<boolean>(false)
    console.log('hi')
    return (
        <div className={style.container}>
            <img onClick={() => setShow(!show)} src={gear} alt="menuButton" />
            <div className={classNames(style.bigMenu, show ? style.showMenu: style.hideMenu)}>
                <ul>
                <li>
          <Link to="/projects">Проекты</Link >
        </li>
        <li>
            <Link to="/profile">Профиль</Link >
        </li>
        <li>
          {" "}
          <Link  to="/contacts">Контакты</Link>
        </li>
                </ul>
            </div>
        </div>
    )
}