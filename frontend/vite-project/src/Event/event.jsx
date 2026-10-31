import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './event.module.scss';
import { im } from '../Photo.js';

export default function Event() {
	return (
		<section className={styles.eventsSection}>
			<div className={styles.breadcrumbsWrapper}>
				<span className={styles.inactiveCrumb}>Главная</span>
				<span className={styles.arrowCrumb}>→</span>
				<span className={styles.activeCrumb}>Мероприятия</span>
			</div>

			<div className={styles.titleWrapper}>
				<h1 className={styles.mainTitle}>Все мероприятия</h1>
			</div>

			<div className={styles.bannerCard}>
				<div className={styles.dateBlock}>
					<span className={styles.day}>25</span>
					<span className={styles.month}>ноября</span>
				</div>
				
				<div className={styles.infoBlock}>
					<h3 className={styles.bannerTitle}>День открытых дверей</h3>
					<p className={styles.bannerText}>
						Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков
					</p>
				</div>

				<div className={styles.actionBlock}>
					<NavLink to="/event-detail" className={styles.bannerButton}>
						Записаться
						<span className={styles.arrowRight}></span>
					</NavLink>
				</div>
			</div>

			<div className={styles.eventsGrid}>
				
				<div className={`${styles.eventCard} ${styles.blueBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.yellowBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.purpleBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

				

				<div className={`${styles.eventCardWide} ${styles.greenBg}`}>
					<div className={styles.imageColumn}>
						<img src={im.bb1} className={styles.speakerImg} />
					</div>
					<div className={styles.contentColumn}>
						<div className={styles.tagWrapper}>
							<span className={styles.cardTag}>Вебинар</span>
						</div>
						<div className={styles.titleCardWrapper}>
							<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
						</div>
						<div className={styles.textWrapper}>
							<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
						</div>
						<div className={styles.dateCardWrapper}>
							<span className={styles.cardDate}>16 ноября 2021</span>
						</div>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.darkPurpleBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTagWhite}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<h3 className={styles.cardTitleWhite}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardTextWhite}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDateWhite}>16 ноября 2021</span>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.blueBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.lightPinkBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

				<div className={`${styles.eventCard} ${styles.orangeBg}`}>
					<div className={styles.tagWrapper}>
						<span className={styles.cardTag}>Встреча</span>
					</div>
					<div className={styles.titleCardWrapper}>
						<img src={im.c1} alt="icon" className={styles.cardIcon} />
						<h3 className={styles.cardTitle}>Заголовок мероприятия</h3>
					</div>
					<div className={styles.textWrapper}>
						<p className={styles.cardText}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.</p>
					</div>
					<div className={styles.dateCardWrapper}>
						<span className={styles.cardDate}>16 ноября 2021</span>
					</div>
				</div>

			</div>
		</section>
	);
}
