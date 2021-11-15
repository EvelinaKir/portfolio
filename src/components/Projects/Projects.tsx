import style from "./projects.module.scss";
import { FC, useEffect } from "react";
import { getUserAxiosRepo } from "../../services/reducers/mainReducers";
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

  return (
    <>
      {loading == "pending" && <Spiner />}
      {loading == "succeeded" && data && (
        <div className={style.container}>
          {data.map((elem) => {
            if (elem) {
              return (
                <div key={elem.id}>
                  <Project data={elem} />
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

const Project: FC<{ data: TData }> = ({ data }) => {
  const right = images.imagesSet.find((elem) => elem.name === data.name);
  console.log(data.language);

  if (right)
    return (
      <div className={style.oneProject}>
        <img src={right.image} alt="" />
        <div className={style.oneProjectInfo}>
        <h1>{data.name}</h1>
        <h2>Language: {data.language}</h2>
        <h2>url: <a href={data.html_url}>github</a></h2>
        <h6>Created at: {data.created_at}</h6>
        <h6>Updated at: {data.updated_at}</h6>
        </div>
      </div>
    );
  else return null;
};
