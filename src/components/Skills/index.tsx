import styles from './Skills.module.scss';
import starPng from '../../assets/img/star.png';

interface jsonProps {
    componentLabel: string;
    skills: Array<{
        name: string;
        stars: number;
    }>;
}

export default function Skills(skills: jsonProps) {
    const skillsList = skills.skills;

    function renderStars(stars: number, skillStars: number) {
        const starsArray = [];
        for (let i = 0; i < stars; i++) {
            if (i < skillStars) {
                starsArray.push(
                    <img className={styles.color} key={i} src={starPng} alt="" />
                );
            }
            else {
                starsArray.push(
                    <img key={i} src={starPng} alt="" />
                );
            }
        }
        return starsArray;
    };

    return (
        <section className={styles.skills}>
            <h2>{skills.componentLabel} :</h2>
            <ul>
                {skillsList.map((skill: any) => (
                    <li key={skill.name}>
                        <div className={styles.skill__box}>
                            <p className={styles.skill__title}>{skill.name}</p>
                            <div className={styles.skill__stars_box}>
                                {renderStars(5,skill.stars).map((star, index) => (
                                    star
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}