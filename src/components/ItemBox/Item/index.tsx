import styles from './Item.module.scss';
import img from '../../../assets/img/certificatesImg/teste.png';

//interface de um array de obn
interface Certificate {
    title: string;
    description: string;
    image: string;
    hours: number;
    hoursTxt: string;
    tags: string[];
  }
interface Props {
certificates: Certificate[];
}

export const Item = (certificates:Props) => {
    return (
        <>
            {certificates.certificates.map((certificate: Certificate) => (
                <div className={styles.item}>
                    <img src={certificate.image} alt="" />
                </div>
            ))}
        </>
    );
};