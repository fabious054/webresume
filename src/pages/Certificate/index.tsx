import styles from './Certificate.module.scss';
import { useParams } from 'react-router-dom';

interface Certificate {
    id: number;
    title: string;
    description: string;
    image: string;
    hours: number;
    hoursTxt: string;
    tags: string[];
}

export default function Certificate() {
    const {id} = useParams();
    return(
        <div>{id}</div>
    );
}