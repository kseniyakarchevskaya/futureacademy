import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './more.module.scss';
import { im } from '../Photo.js';

export default function More() {
	const [articleBody, setArticleBody] = useState(null);

	useEffect(() => {
		const fetchClassicData = async () => {
			try {
				const res = await axios.get('http://localhost:3000/api/article-classic');
				setArticleBody(res.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchClassicData();
	}, []);

	if (!articleBody) {
		return <div className={styles.loadingContainer}>Загрузка...</div>;
	}

	return (
		<section className={styles.detailSection}>
			<div className={styles.breadcrumbsWrapper}>
				<span className={styles.inactiveCrumb}>Главная</span>
				<span className={styles.arrowCrumb}>→</span>
				<span className={styles.activeCrumb}>Новости</span>
			</div>

			<div className={styles.titleWrapper}>
				<h1 className={styles.mainTitle}>Заголовок новости</h1>
			</div>

			<div className={styles.dateWrapper}>
				<span className={styles.postDate}>16 ноября 2021</span>
			</div>

			<div className={styles.topTextWrapper}>
				<p className={styles.text}>{articleBody.introduction_text}</p>
			</div>

			<div className={styles.mediaContainer}>
				<div className={styles.mainImageBlock}>
					<img src={im.center}  className={styles.centerImage} />
				</div>
				
			</div>

			<div className={styles.bottomTextWrapper}>
				<p className={styles.text}>{articleBody.main_body_text}</p>
				<p className={styles.text}>{articleBody.conclusion_text}</p>
			</div>
		</section>
	);
}
