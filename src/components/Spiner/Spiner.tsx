import style from './spiner.module.scss'
import spiner from '../../images/spiner.svg'
export const Spiner = () => {
    return (
        <div className={style.container}>
            <img src={spiner} alt="" />
        </div>
    )
}