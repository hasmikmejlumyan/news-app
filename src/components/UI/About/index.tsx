// styles
import styles from './about.module.scss';

// images
import worldSvg from '../../../assets/images/world.svg';


const About = () => {
    return (
        <div className="container">
            <section className={styles['about-section']}>
                <p className={styles['about__welcome-text']}>
                    Welcome to the <span>news</span> website
                </p>

                <div className={styles['about-info']}>
                    <div className={styles['about-info__discover']}>
                        <div className={styles['about-info__discover-image']}>
                            <img src={worldSvg} />
                        </div>
                        <div className={styles['about-info__discover-info']}>
                            <p className={styles['about-info__discover-text']}>
                                Discover the world with us
                            </p>
                            <ul className={styles['about-info__discover-info-types']}>
                                <li>Variety of fields</li>
                                <li>Reliable sources</li>
                                <li>Regularly updated material</li>
                            </ul>
                            <p className={styles['about-info__discover-text']}>
                                We will help you find all kinds of facts and news from the world
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;