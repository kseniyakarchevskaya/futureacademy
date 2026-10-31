import React from 'react';
import styles from './contact.module.scss';
import { im } from '../Photo.js';

export default function Contact() {
	return (
		<section className={styles.contactsSection}>
			<div className={styles.breadcrumbsWrapper}>
				<span className={styles.inactiveCrumb}>Главная</span>
				<span className={styles.arrowCrumb}>→</span>
				<span className={styles.activeCrumb}>Контакты</span>
			</div>

			<div className={styles.titleWrapper}>
				<h1 className={styles.mainTitle}>Контакты</h1>
			</div>

			<div className={styles.contentGrid}>
				<div className={styles.infoColumn}>
					<div className={styles.infoBlock}>
						<div className={styles.iconWrapper}>
							<img src={im.te1}  className={styles.infoIcon} />
						</div>
						<div className={styles.textWrapper}>
							<a href="tel:88009503398" className={styles.phoneLink}>8 800 950-33-98</a>
						</div>
					</div>

					<div className={styles.infoBlock}>
						<div className={styles.iconWrapper}>
							<img src={im.te2} className={styles.infoIcon} />
						</div>
						<div className={styles.textWrapper}>
							<a href="mailto:info@hodfutureacademy.ru" className={styles.mailLink}>info@hodfutureacademy.ru</a>
						</div>
					</div>

					<div className={styles.infoBlockAddress}>
						<div className={styles.iconWrapperAddress}>
							<img src={im.te3}  className={styles.infoIcon} />
						</div>
						<div className={styles.textWrapperAddress}>
							<p className={styles.addressText}>г. Москва, ул. Ленина, д. 50</p>
						</div>
					</div>

					<div className={styles.socialsWrapper}>
						<img src={im.w1}  className={styles.socialIcon} />
						<img src={im.w2}  className={styles.socialIcon} />
						<img src={im.w3} className={styles.socialIcon} />
						<img src={im.w4} className={styles.socialIcon} />
						<img src={im.w5} className={styles.socialIcon} />
					</div>

					<div className={styles.buttonWrapper}>
						<button className={styles.dzenButton}>
							<img src={im.te4}/>
						</button>
					</div>
				</div>

				<div className={styles.mapColumn}>
					<div className={styles.mapContainer}><img src={im.karta}/></div>
				</div>
			</div>
		</section>
	);
}