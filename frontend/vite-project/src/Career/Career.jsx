import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Career.module.scss';

export default function Career() {
	const [vacancies, setVacancies] = useState([]);
	const [activeCategory, setActiveCategory] = useState('Все');
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		const fetchVacancies = async () => {
			try {
				const res = await axios.get('http://localhost:3000/api/vacancies');
				setVacancies(res.data);
			} catch (error) {
				console.error('Error fetching vacancies:', error);
			}
		};
		fetchVacancies();
	}, []);

	const toggleVacancy = (id) => {
		setExpandedId(expandedId === id ? null : id);
	};

	const filteredVacancies = activeCategory === 'Все'
		? vacancies
		: vacancies.filter(v => v.vacancy_category === activeCategory);

	return (
		<section className={styles.careerSection}>
			<div className={styles.breadcrumbsWrapper}>
				<span className={styles.inactiveCrumb}>Главная</span>
				<span className={styles.arrowCrumb}>→</span>
				<span className={styles.activeCrumb}>Мероприятия</span>
			</div>

			<div className={styles.titleWrapper}>
				<h1 className={styles.mainTitle}>Вакансии</h1>
				<p className={styles.subtitle}>Станьте частью команды ХОД Future Academy</p>
			</div>

			<div className={styles.filterContainer}>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Все' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Все')}
				>
					Все категории
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Робототехника' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Робототехника')}
				>
					Робототехника
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Создание игр' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Создание игр')}
				>
					Создание игр
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Web-разработка' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Web-разработка')}
				>
					Web-разработка
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Мультимедиа' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Мультимедиа')}
				>
					Мультимедиа
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Шахматы' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Шахматы')}
				>
					Шахматы
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === '3D-моделирование и дизайн' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('3D-моделирование и дизайн')}
				>
					3D-моделирование и дизайн
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Английский язык' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Английский язык')}
				>
					Английский язык
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Блогинг' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Блогинг')}
				>
					Блогинг
				</button>
				<button
					className={`${styles.filterButton} ${activeCategory === 'Soft skills' ? styles.activeFilter : ''}`}
					onClick={() => setActiveCategory('Soft skills')}
				>
					Soft skills
				</button>
			</div>

			<div className={styles.vacanciesList}>
				{filteredVacancies.map((item) => {
					const isExpanded = expandedId === item.vacancy_id;
					return (
						<div key={item.vacancy_id} className={styles.vacancyWrapper}>
							<div className={styles.vacancyHeader} onClick={() => toggleVacancy(item.vacancy_id)}>
								<span className={styles.vacancyTitle}>{item.vacancy_title}</span>
								<div className={styles.headerRight}>
									<span className={styles.vacancyCity}>{item.vacancy_city}</span>
									<span className={styles.toggleIcon}>{isExpanded ? '×' : '+'}</span>
								</div>
							</div>

							{isExpanded && (
								<div className={styles.vacancyBody}>
									<p className={styles.greeting}>{item.vacancy_greeting}</p>
									<p className={styles.targetText}>{item.vacancy_target}</p>

									<h4 className={styles.blockTitle}>Что нужно будет делать?</h4>
									<ul className={styles.detailsList}>
										{item.vacancy_duties.split(';;').map((duty, i) => (
											<li key={i} className={styles.listItem}>{duty}</li>
										))}
									</ul>

									<h4 className={styles.blockTitle}>Что мы хотим в тебе видеть?</h4>
									<ul className={styles.detailsList}>
										{item.vacancy_requirements.split(';;').map((req, i) => (
											<li key={i} className={styles.listItem}>{req}</li>
										))}
									</ul>

									<h4 className={styles.blockTitle}>Тебе точно понравится, потому что у нас:</h4>
									<ul className={styles.detailsList}>
										{item.vacancy_benefits.split(';;').map((ben, i) => (
											<li key={i} className={styles.listItem}>{ben}</li>
										))}
									</ul>

									<p className={styles.footerText}>{item.vacancy_footer}</p>

									<div className={styles.buttonWrapper}>
										<button type="button" className={styles.applyButton}>Откликнуться</button>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
