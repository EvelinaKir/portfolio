import style from "./background.module.scss";
import gear1 from '../../images/gear1.svg'
import gear2 from '../../images/gear2.svg'
import gear3 from '../../images/gear3.svg'
import gear4 from '../../images/gear4.svg'
import gear5 from '../../images/gear5.svg'

export const Background = () => {
  return (
    <div className={style.container}>
      <img className={style.gear1} src={gear1} alt="gear1" />
      <img className={style.gear2} src={gear2} alt="gear1" />
      <img className={style.gear3} src={gear3} alt="gear1" />
      <img className={style.gear4} src={gear4} alt="gear1" />
      <img className={style.gear5} src={gear5} alt="gear1" />
      <img className={style.gear6} src={gear5} alt="gear1" />
      <img className={style.gear7} src={gear5} alt="gear1" />
    </div>
  );
};
