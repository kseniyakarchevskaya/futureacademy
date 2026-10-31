import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styles from './academy.module.scss';
import { im } from '../Photo.js';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function Academy() {
    const [data, setData] = useState(null);
    const [teachers, setTeachers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [founderRes, teachersRes] = await Promise.all([
                    axios.get('http://localhost:3000/api/founder-interview'),
                    axios.get('http://localhost:3000/api/teachers'),
                ]);
                setData(founderRes.data[0] || founderRes.data);
                setTeachers(teachersRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAllData();
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (teachers.length === 0) return;
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === teachers.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => resetTimeout();
    }, [currentIndex, teachers]);

    if (!data || teachers.length === 0) {
        return null;
    }

    const displayTeachers = [...teachers, ...teachers, ...teachers];

    return (
        <>
            <section className={styles.sec1}>
                <div className={styles.txt}>
                    <h2>Образовательная платформа</h2>
                    <h2>ХОД Future Academy</h2>
                    <p>Актуальные знания для новичков и профессионалов</p>
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
            <section className={styles.image}>
                <div></div>
            </section>
            <section className={styles.founderSection}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.imageBlock}>
                            <img
                                src={im.user || data.founder_avatar}
                                alt={data.founder_name}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.metaBlock}>
                            <h3 className={styles.name}>{data.founder_name}</h3>
                            <p className={styles.role}>{data.founder_role}</p>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.textBlock}>
                            <p className={styles.paragraph}>{data.interview_paragraph_1}</p>
                            <p className={styles.paragraph}>{data.interview_paragraph_2}</p>
                        </div>
                        <div className={styles.sourceBlock}>
                            <span className={styles.sourceText}>{data.interview_source}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.welcomeSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Наши ценности</h2>
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
            <section className={styles.slider}>
                <div className={styles.zag}>
                    <h2>Наши люди</h2>
                </div>
                <div className={styles.sliderTrackWrapper}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translate3d(${-((currentIndex + teachers.length) * 12.5)}vw, 0, 0)`,
                        }}
                    >
                        {displayTeachers.map((item, index) => (
                            <div key={`${item.teacher_id}-${index}`} className={styles.teacherCard}>
                                <div className={styles.avatarContainer}>
                                    <div className={styles.avatarBorder}>
                                        <img
                                            src={item.teacher_avatar || im.user}
                                            alt={item.teacher_name}
                                            className={styles.avatar}
                                        />
                                    </div>
                                </div>
                                <div className={styles.nameWrapper}>
                                    <h3 className={styles.name}>{item.teacher_name}</h3>
                                </div>
                                <div className={styles.infoWrapper}>
                                    <p className={styles.infoText}>{item.teacher_info_1}</p>
                                    <p className={styles.infoText}>{item.teacher_info_2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.companiesSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.mainTitle}>Наши партнеры</h2>
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
        </>
    );
}

export default Academy;
