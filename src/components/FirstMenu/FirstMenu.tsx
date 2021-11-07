import style from "./firstMenu.module.scss";
import { Link } from "react-router-dom";
import gear from '../../images/gear.svg'
import leftHalfGear from '../../images/leftHalfGear.png'
import rightHalfGear from '../../images/rightHalfGear.png'
import { useState } from "react";
export const FirstMenu = () => {
const [move, setMove] = useState<boolean>(false)
const left = !move ? style.leftHalfGear : style.leftHalfGearMove
const right = !move ? style.rightHalfGear : style.rightHalfGearMove
const menuStyle = !move ? style.navBar : style.navBarMove
  return (
    <div className={style.container}>
      <div className={style.menuButton}>
      <img className={left} src={leftHalfGear} alt="navigationBar" />
      <button onClick={() => setMove(!move)} className={!move? style.openMenu: style.hidden} />
      <img className={right} src={rightHalfGear} alt="navigationBar" />   
      </div>
      <div>
        <ul className={menuStyle}>
        <li>
          <Link to="/projects">Проекты</Link >
        </li>
        <li>
          <div>
            <Link to="/profile">Профиль</Link >
          </div>
        </li>
        <li>
          {" "}
          <Link  to="/contacts">Контакты</Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
};
