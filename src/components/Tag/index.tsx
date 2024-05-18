import Icons from "../../data/iconTags";
import styles from "./Tag.module.scss";


interface TagProps {
    tag: string;

}
export const Tag = ({tag}:TagProps) => {
    const icon = Icons(tag);
    if (icon) {
        return (
            <img className={styles.tag} title={tag} src={`${icon}`} />
        );
    }
    return null;
    

    

};