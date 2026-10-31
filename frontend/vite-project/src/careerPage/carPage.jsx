import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styles from './carPage.module.scss';
import { im } from '../Photo.js';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function carPage() {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchReviewsData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/reviews');
                setReviews(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchReviewsData();
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (reviews.length === 0) return;

        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => {
            resetTimeout();
        };
    }, [currentIndex, reviews]);

    if (reviews.length === 0) {
        return null;
    }

    const displayReviews = [...reviews, ...reviews, ...reviews];

    return (
        <>
            <section className={styles.sec1}>
                <div className={styles.txt}>
                    <h2>Поможем построить карьеру</h2>
                    <p>Карьерный центр ХОД Future Academy</p>
                    <button>Задать вопрос о трудоустройстве</button>
                </div>
            </section>
            <section className={styles.featuresSection}>
                <div className={styles.leftColumn}>
                    <div className={styles.bubbleContainer}>
                        <div className={styles.speechBubble}>
                            <p className={styles.bubbleText}>
                                С нами вы найдёте работу о которой мечтали
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.k1} alt="Крестик" className={styles.featureIcon} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.featureTitle}>Заголовок</h3>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.featureText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
                                elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                                condimentum, ligula eget
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.k2} alt="Круг" className={styles.featureIcon} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.featureTitle}>Заголовок</h3>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.featureText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
                                elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                                condimentum, ligula eget
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.k3} alt="Треугольник" className={styles.featureIcon} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.featureTitle}>Заголовок</h3>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.featureText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
                                elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                                condimentum, ligula eget
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.whyUsSection}>
                <div className={styles.contentContainer}>
                    <div className={styles.topBlock}>
                        <h2 className={styles.mainTitle}>
                            Почему вы точно найдете работу с ХОД Future Academy
                        </h2>
                        <p className={styles.descriptionText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque
                            pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper
                            nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent
                            vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis,
                            luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non
                            efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in
                            faucibus.
                        </p>
                    </div>

                    <div className={styles.gridContainer}>
                        <div className={styles.statCard}>
                            <div className={styles.imageWrapper}>
                                <img src={im.aa1} alt="600" className={styles.statImg} />
                            </div>
                            <div className={styles.textWrapper}>
                                <p className={styles.statText}>Вакансий</p>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.imageWrapper}>
                                <img src={im.aa2} alt="82%" className={styles.statImg} />
                            </div>
                            <div className={styles.textWrapper}>
                                <p className={styles.statText}>Трудоустроенных студентов</p>
                            </div>
                        </div>

                        <div className={styles.statCardPlus}>
                            <div className={styles.imageWrapper}>
                                <img src={im.aa3} alt="98 795" className={styles.statImg} />
                            </div>
                            <div className={styles.textWrapper}>
                                <p className={styles.statText}>
                                    Средняя зарплата наших выпускников
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.careerPathSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.mainTitle}>Ваш путь к трудоустройству</h2>
                </div>

                <div className={styles.stepsContainer}>
                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.kr1} alt="Крестик" className={styles.stepIcon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.stepText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo.
                                In scelerisque pulvinar sem, et gravida mi tincidunt nec.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.kr2} alt="Круг" className={styles.stepIcon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.stepText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo.
                                In scelerisque pulvinar sem.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.kr3} alt="Треугольник" className={styles.stepIcon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.stepText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo.
                                In scelerisque pulvinar sem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    <button type="button" className={styles.actionButton}>
                        Задать вопрос о трудоустройстве
                    </button>
                </div>
            </section>
            <section className={styles.vacanciesSection}>
                <NavLink to="/career" className={styles.titleWrapper}>
                    <h2 className={styles.mainTitle}>Примеры активных вакансий</h2>
                </NavLink>
                

                <div className={styles.cardsGrid}>
                    <div className={`${styles.vacancyCard} ${styles.blueBg}`}>
                        <h3 className={styles.cardTitle}>Графический дизайнер</h3>
                        <p className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo.
                        </p>
                        <span className={styles.cardSalary}>от 80 000 ₽ в месяц</span>
                    </div>

                    <div className={`${styles.vacancyCard} ${styles.greenBg}`}>
                        <h3 className={styles.cardTitle}>Веб-разработчик</h3>
                        <p className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo.
                        </p>
                        <span className={styles.cardSalary}>от 90 000 ₽ в месяц</span>
                    </div>

                    <div className={`${styles.vacancyCard} ${styles.orangeBg}`}>
                        <h3 className={styles.cardTitle}>Графический дизайнер</h3>
                        <p className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo.
                        </p>
                        <span className={styles.cardSalary}>от 80 000 ₽ в месяц</span>
                    </div>

                    <div className={`${styles.vacancyCard} ${styles.lightBlueBg}`}>
                        <h3 className={styles.cardTitle}>Графический дизайнер</h3>
                        <p className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo.
                        </p>
                        <span className={styles.cardSalary}>от 80 000 ₽ в месяц</span>
                    </div>

                    <div className={`${styles.vacancyCard} ${styles.yellowBg}`}>
                        <h3 className={styles.cardTitle}>Веб-разработчик</h3>
                        <p className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            quis tellus feugiat, posuere magna et, scelerisque leo.
                        </p>
                        <span className={styles.cardSalary}>от 90 000 ₽ в месяц</span>
                    </div>
                </div>
            </section>
            <section className={styles.companiesSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.mainTitle}>Компании где уже работают наши студенты</h2>
                </div>

                <div className={styles.logosGrid}>
                    <div className={styles.logoCard}>
                        <img src={im.i1} alt="Тинькофф" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i2} alt="Альфа Банк" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i3} alt="Вконтакте" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i4} alt="Avito" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i2} alt="Альфа Банк" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i3} alt="Вконтакте" className={styles.logoImg} />
                    </div>

                    <div className={styles.logoCard}>
                        <img src={im.i4} alt="Avito" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i3} alt="Вконтакте" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i1} alt="Тинькофф" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i2} alt="Альфа Банк" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i4} alt="Avito" className={styles.logoImg} />
                    </div>
                    <div className={styles.logoCard}>
                        <img src={im.i1} alt="Тинькофф" className={styles.logoImg} />
                    </div>
                </div>
            </section>
            <section className={styles.slider}>
                <div className={styles.zag}>
                    <h2>Истории успеха</h2>
                </div>
                <div className={styles.sliderTrackWrapper}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translate3d(${-((currentIndex + reviews.length) * 16.5)}vw, 0, 0)`,
                        }}
                    >
                        {displayReviews.map((item, index) => (
                            <div key={`${item.review_id}-${index}`} className={styles.reviewCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.avatarWrapper}>
                                        <img
                                            src={item.student_avatar}
                                            alt="Аватар"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.name}>{item.student_name}</span>
                                        <span className={styles.course}>{item.course_title}</span>
                                    </div>
                                </div>

                                <div className={styles.textWrapper}>
                                    <p className={styles.reviewText}>{item.review_text}</p>
                                </div>

                                <div className={styles.ratingWrapper}>
                                    <span className={styles.starIcon}>★</span>
                                    <span className={styles.ratingValue}>
                                        {parseFloat(item.review_rating).toFixed(2)} / 5
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.welcomeSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Помогаем с трудоустройством</h2>
                </div>

                <div className={styles.featuresContainer}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img src={im.m1} alt="Передовой подход" className={styles.icon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>
                                Передовой подход к образовательному процессу
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img
                                src={im.m2}
                                alt="Непрерывное усовершенствование"
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>
                                Непрерывное усовершенствование и пополнение базы курсов
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img
                                src={im.m3}
                                alt="Только практикующие преподаватели"
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>Только практикующие преподаватели</p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <img
                                src={im.m4}
                                alt="Сопровождение на всех этапах"
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>
                                Сопровождение на всех этапах. От начала обучения до трудоустройства
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default carPage;
