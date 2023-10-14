import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/APIFetch';
import css from './CastList.module.css';
import { IMAGEBASEURL } from '../../servises/APIFetch';
import stockPhoto from '../default/images/logo_imt_small2_medium.jpeg';

const CastList = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map(actor => {
        const { id, name, profile_path } = actor;

        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `${IMAGEBASEURL}${profile_path}`
                  : `${stockPhoto}`
              }
              alt={name}
              style={{ width: 100, heigth: 50 }}
            />
            <h3>{name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
