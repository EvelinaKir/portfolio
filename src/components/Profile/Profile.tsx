import style from './profile.module.scss'
import { ageCounter } from '../../services/functions'

export const Profile = () => {

    return (
        <div className={style.container}>
            <div className={style.profileImage}>
                <img src="https://avatars.githubusercontent.com/u/84317331?v=4" alt="" />
            </div>
            <div className={style.profileInfo}>
                <h1>Frontend Developer</h1>
                <div className={style.point}><span className={style.pointTitle}>ФИО:</span><span className={style.pointContent}>Киричкова Эвелина Владимировна</span></div>
                <div className={style.point}><span className={style.pointTitle}>Возраст:</span><span className={style.pointContent}>{`${ageCounter(1997)} года`}</span></div>
                <div className={style.point}><span className={style.pointTitle}>О себе:</span><span className={style.pointContent}>Свободно владею английским языком, умею работать в команде, продала душу фронтенду</span></div>
                <div className={style.point}><span className={style.pointTitle}>Стек:</span><span className={style.pointContent}></span></div>
            </div>
        </div>
    )
} 