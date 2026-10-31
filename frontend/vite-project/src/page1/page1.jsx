import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { im } from '../Photo.js';
import styles from './page1.module.scss';
function Page1() {
    const [activeTab, setActiveTab] = useState('kids');

    const tabs = [
        { id: 'kids', title: 'Дети', age: '8 — 14 лет', icon: im.e1 },
        { id: 'teens', title: 'Подростки', age: '14 — 18 лет', icon: im.e2 },
        { id: 'adults', title: 'Взрослые', age: '18+ лет', icon: im.e3 },
    ];

    const tags = [
        { id: 'robotics', text: 'Робототехника' },
        { id: 'gamedev', text: 'Создание игр' },
        { id: 'web', text: 'Web-разработка' },
        { id: 'multimedia', text: 'Мультимедиа' },
        { id: 'chess', text: 'Шахматы' },
        { id: '3d', text: '3D-моделирование и дизайн' },
        { id: 'english', text: 'Английский язык', highlighted: true },
        { id: 'blogging', text: 'Блогинг' },
        { id: 'softskills', text: 'Soft skills' },
    ];

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
			setCurrentIndex((prevIndex) => 
				prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
			);
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
                    <h2>Образовательная платформа</h2>
                    <h2>ХОД Future Academy</h2>
                    <p>Актуальные знания для новичков и профессионалов</p>
                </div>
            </section>
            <section className={styles.coursesSection}>
                <div className={styles.vn}>
                    <div className={styles.leftColumn}>
                        <div className={styles.bubbleContainer}>
                            <div className={styles.speechBubble}>
                                <h3 className={styles.bubbleTitle}>Кем вы хотите стать?</h3>
                                <p className={styles.bubbleText}>
                                    Пора найти себя и выбрать подходящий курс :)
                                </p>
                                <p className={styles.bubbleFooter}>Удачи!</p>
                                <div className={styles.bubbleArrow}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.tabsContainer}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <img
                                        src={tab.icon}
                                        alt={tab.title}
                                        className={styles.tabIcon}
                                    />
                                    <div className={styles.tabInfo}>
                                        <span className={styles.tabTitle}>{tab.title}</span>
                                        <span className={styles.tabAge}>{tab.age}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.tagsContainer}>
                            {tags.map((tag) => (
                                <button
                                    key={tag.id}
                                    className={`${styles.tagButton} ${tag.highlighted ? styles.highlightedTag : ''}`}
                                >
                                    {tag.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.image}>
                <div></div>
            </section>
            <section className={styles.statsSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>
                        Актуальные знания от признанных экспертов рынка для новичков и практикующих
                        специалистов.
                    </h2>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.statCard}>
                        <div className={styles.numberWrapper}>
                            <span className={styles.statNumber}>600</span>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.statText}>Курсов</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.numberWrapper}>
                            <span className={styles.statNumber}>82</span>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.statText}>Ведущих преподавателей</p>
                        </div>
                    </div>

                    <div className={styles.statCardPlus}>
                        <div className={styles.numberWrapper}>
                            <span className={styles.statNumber}>14 795</span>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.statText}>Выпускников</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.dashboardSection}>
                <div className={styles.bannerCard}>
                    <div className={styles.dateBlock}>
                        <span className={styles.day}>25</span>
                        <span className={styles.month}>ноября</span>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3 className={styles.bannerTitle}>День открытых дверей</h3>
                        <p className={styles.bannerText}>
                            Приглашаем всех желающих на бесплатную экскурсию в мир востребованных
                            профессий и полезных навыков
                        </p>
                    </div>

                    <div className={styles.actionBlock}>
                        <button className={styles.bannerButton}>
                            Записаться
                            <span className={styles.arrowRight}></span>
                        </button>
                    </div>
                </div>

                <div className={styles.cardsGrid}>
                    <div className={styles.blueCard}>
                        <div className={styles.iconWrapper}>
                            <img
                                src={im.monitor}
                                
                                className={styles.cardIcon}
                            />
                        </div>
                        <h4 className={styles.cardTitle}>Программы обучения</h4>
                        <p className={styles.cardText}>
                            В списке наших курсов вы сможете найти профессию и занятие по душе,
                            изучить новое и получить практические знания, которые помогут получить
                            работу мечты.
                        </p>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.detailsButton}>
                                Подробнее
                                <span className={styles.arrowRightBlue}></span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.greenCard}>
                            <div className={styles.smallIconWrapper}>
                                <img
                                    src={im.newspaper}
                                    
                                    className={styles.smallCardIcon}
                                />
                            </div>
                            <h4 className={styles.smallCardTitle}>Новости Академии</h4>
                        </div>

                        <div className={styles.pinkCard}>
                            <div className={styles.smallIconWrapper}>
                                <img src={im.diagram}  className={styles.smallCardIcon} />
                            </div>
                            <h4 className={styles.smallCardTitle}>Мир IT</h4>
                        </div>

                        <div className={styles.yellowCard}>
                            <div className={styles.yellowLeft}>
                                <img src={im.hh}  className={styles.yellowIcon} />
                            </div>
                            <div className={styles.yellowRight}>
                                <h4 className={styles.yellowTitle}>Попробуй!</h4>
                                <p className={styles.yellowText}>
                                    Пройдите тест и узнайте свои способности в сфере информационных
                                    технологий
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.slider}>
                <div className={styles.zag}><h2>Отзывы наших студентов</h2></div>
                <div className={styles.sliderTrackWrapper}>
                    <div 
                        className={styles.sliderTrack}
                        style={{ transform: `translate3d(${-((currentIndex + reviews.length) * 16.5)}vw, 0, 0)` }}
                    >
                        {displayReviews.map((item, index) => (
                            <div key={`${item.review_id}-${index}`} className={styles.reviewCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.avatarWrapper}>
                                        <img src={item.student_avatar} alt="Аватар" className={styles.avatar} />
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
                                    <span className={styles.ratingValue}>{parseFloat(item.review_rating).toFixed(2)} / 5</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
		    </section>
            <section className={styles.welcomeSection}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Добро пожаловать в Академию будущего ХОД</h2>
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

export default Page1;
