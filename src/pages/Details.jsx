import { useEffect, useState } from 'react';
import { getOne } from '../api/details';
import styles from './Details.module.css';
import { BackButton } from '../components/BackButton';

export const Details = ({ location, history, match }) => {
  console.log(location, history, match);
  const [details, setDetail] = useState(undefined);
  const fetchDetails = async () => {
    const { data } = await getOne(match.params.id);
    console.log(data);
    setDetail(data);
  };
  useEffect(() => {
    fetchDetails();
  }, [match.params.id]);

  return (
    <div className={styles.root}>
      <BackButton />
      {details ? (
        <>
          <div className={styles.imageContainer}>
            <img src={details.images.original.url} alt='' />
          </div>
          <div className={styles.descriptionContainer}>
            <ul className={styles.detailsList}>
              <li className={styles.listItem}>{details.title}</li>
              <li className={styles.listItem}>
                <a href={details.url} target='blank' rel='noopener'>
                  Open on GIPHY.COM
                </a>
              </li>
              <li className={styles.listItem}>
                <button>Copy link</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        'Loading'
      )}
    </div>
  );
};
