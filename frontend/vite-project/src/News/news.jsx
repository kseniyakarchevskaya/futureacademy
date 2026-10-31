import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './news.module.scss';
import { im } from '../Photo.js';

export default function News() {
	const [blogPosts1, setBlogPosts1] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('http://localhost:3000/api/blog-posts1');
				setBlogPosts1(res.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={styles.newsSection}>
			<div className={styles.breadcrumbsWrapper}>
				<span className={styles.inactiveCrumb}>Главная</span>
				<span className={styles.arrowCrumb}>→</span>
				<span className={styles.activeCrumb}>Новости</span>
			</div>

			<div className={styles.titleWrapper}>
				<h1 className={styles.mainTitle}>Новости ХОД Future Academy</h1>
			</div>

			<div className={styles.newsGrid}>
				{blogPosts1.map((item) => (
					<div key={item.id} className={styles.newsCard}>
						<div className={styles.imageWrapper}>
							<img src={item.image_url} alt={item.title} className={styles.cardImage} />
						</div>
						
						<div className={styles.cardContent}>
							<div className={styles.dateWrapper}>
								<span className={styles.cardDate}>
									{new Date(item.publication_date).toLocaleDateString('ru-RU', {
										day: 'numeric',
										month: 'long',
										year: 'numeric'
									})}
								</span>
							</div>
							
							<div className={styles.titleCardWrapper}>
								<h3 className={styles.cardTitle}>{item.title}</h3>
							</div>
							
							<div className={styles.textWrapper}>
								<p className={styles.cardText}>{item.description}</p>
							</div>
							
							<div className={styles.buttonWrapper}>
								<NavLink to={"/more"} className={styles.detailsButton}>
									Подробнее
									<img src={im.st}  className={styles.arrowIcon} />
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
