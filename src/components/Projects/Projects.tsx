import style from "./projects.module.scss";
import { FC, useEffect, useState } from "react";
import {
  getUserAxiosRepo,
  profileSlice,
} from "../../services/reducers/mainReducers";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { Spiner } from "../Spiner/Spiner";
import { TData } from "../../services/reducers/mainReducers";
import { images } from "../../utils/imagesSet/imagesSet";
export const Projects = () => {
  const { data, loading, error } = useAppSelector(
    (state) => state.profileReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAxiosRepo());
  }, []);

  const writeProject = profileSlice.actions.writeCurrentProject;
  const currentProject = useAppSelector(
    (state) => state.profileReducer.currentProject
  );

  return (
    <>
      {loading == "pending" && <Spiner />}
      {loading == "succeeded" && data && (
        <div className={style.container}>
          <div className={style.rowContainer}>
            {data.map((elem) => {
              if (elem) {
                return (
                  <div
                    onClick={() => dispatch(writeProject(elem))}
                    key={elem.id}
                  >
                    <ProjectPreview data={elem} />
                  </div>
                );
              }
            })}
          </div>

          <div className={style.currentProject}>
            {currentProject && <ProjectDetailed />}
            {!currentProject && <h1>Choose the project</h1>}
          </div>
        </div>
      )}
    </>
  );
};

const ProjectPreview: FC<{ data: TData }> = ({ data }) => {
  const right = images.imagesSet.find((elem) => elem.name === data.name);
  console.log(data.language);

  if (right)
    return (
      <div className={style.oneProject}>
        <img src={right.image} alt="" />
      </div>
    );
  else return null;
};

const ProjectDetailed = () => {
  const [bigImage, setBigImage] = useState<boolean>(false);
  const currentProject = useAppSelector(
    (state) => state.profileReducer.currentProject
  );

  const getDate = (date: string) => {
    return new Date(date)
      .toLocaleString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .toString();
  };

  const right = images.imagesSet.find(
    (elem) => elem.name === currentProject!.name
  );
  return (
    <div className={style.detailedCurrentProjectContainer}>
      <div className={style.detailedCurrentProject}>
        <div className={style.currentProjectImage}>
          <img
            className={bigImage ? style.bigImage : style.smallImage}
            onClick={() => {
              setBigImage(!bigImage);
            }}
            src={right?.image}
            alt="currentProjectImage"
          />
        </div>
        <div className={style.currentProjectInfo}>
          <ul>
            <li>
              <h1 className={style.titleDetailProject}>Name:</h1>
              <h1>
                {`<`}
                {currentProject?.name}
                {`>`}
              </h1>
            </li>
            <li>
              <h1 className={style.titleDetailProject}>Language:</h1>
              <h1>{currentProject?.language}</h1>
            </li>
            <li>
              <h1 className={style.titleDetailProject}>Created at:</h1>
              <h1>{getDate(currentProject!.created_at)}</h1>
            </li>
            <li>
              <h1 className={style.titleDetailProject}>Updated at:</h1>
              <h1>{getDate(currentProject!.updated_at)}</h1>
            </li>
            <li>
              <h1 className={style.titleDetailProject}>Links:</h1>
              <div className={style.links}>
                <a href={currentProject?.html_url}>Github repo</a>
                <a
                  href={`https://evelinakir.github.io/${currentProject?.name}/`}
                >
                  github pages
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.subInfo}>
      <h1 className={style.titleDetailProject}>Used:</h1>
            <div className={style.used}>{currentProject!.topics.map((elem:string) => (<span>{elem}</span>))}</div>
      </div>
    </div>
  );
};
