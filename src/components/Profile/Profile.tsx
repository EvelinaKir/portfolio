import style from "./profile.module.scss";
import { ageCounter } from "../../services/functions";
import me from "../../images/me.jpg";

export const Profile = () => {
  return (
    <div className={style.container}>
      <div className={style.profileImage}>
        <img src={me} alt="photo" />
      </div>
      <div className={style.profileInfo}>
        <div className={style.point}>
          <span className={style.pointTitle}>Name:</span>
          <span className={style.pointContent}>Kirichkova Evelina</span>
        </div>
        <div className={style.point}>
          <span className={style.pointTitle}>Age:</span>
          <span className={style.pointContent}>{`${ageCounter(1997)}`}</span>
        </div>
        <div className={style.point}>
          <span className={style.pointTitle}>About me:</span>
          <span className={style.pointContent}>
            Fell in love with frontend development. Team work - best work!
          </span>
        </div>
        <div className={style.point}>
          <span className={style.pointTitle}>Abilities:</span>
          <span className={style.pointContent}>
            HTML
            CSS
            SCSS 
            Javascript
            Typescript 
            React Js
            Redux (+toolkit)
            Axios <br/>
            And that is only the beginning... 
          </span>
        </div>
      </div>
    </div>
  );
};
