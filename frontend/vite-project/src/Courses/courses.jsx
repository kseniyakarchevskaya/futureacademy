import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import styles from './courses.module.scss';
import { im } from '../Photo.js';
const ageGroups = [
    { id: 'Дети', years: '8 — 14 лет', icon: im.e1 },
    { id: 'Подростки', years: '14 — 18 лет', icon: im.e2 },
    { id: 'Взрослые', years: '18 — ∞', icon: im.e3 },
];
const directions = ['Робототехника', 'Создание игр', 'Web-разработка', 'Мультимедиа', 'Шахматы', '3D-моделирование и дизайн', 'Английский язык', 'Блогинг', 'Soft skills'];
const difficulties = ['Новичок', 'Пользователь', 'Профессионал', 'Читер'];
const types = ['Любой', 'Профессия', 'Курс'];
const colors = ['blue', 'orange', 'yellow', 'purple', 'green', 'blue', 'lavender', 'yellow', 'pink', 'purple'];

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [ageGroup, setAgeGroup] = useState('Дети');
    const [difficulty, setDifficulty] = useState('Новичок');
    const [type, setType] = useState('Любой');
    const [direction, setDirection] = useState('');
    const [duration, setDuration] = useState(24);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/courses')
            .then(({ data }) => setCourses(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    const filteredCourses = useMemo(() => courses.filter((course) =>
        course.age_group === ageGroup && course.difficulty === difficulty &&
        (type === 'Любой' || course.course_type === type) &&
        (!direction || course.direction === direction) && Number(course.duration_months) <= duration
    ), [courses, ageGroup, difficulty, type, direction, duration]);

    return (
        <main className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>Все программы обучения</h1>
                <div className={styles.ageTabs} role="tablist" aria-label="Возраст">
                    {ageGroups.map((group) => <button key={group.id} type="button" role="tab" aria-selected={ageGroup === group.id}
                        className={`${styles.ageTab} ${ageGroup === group.id ? styles.activeAge : ''}`} onClick={() => setAgeGroup(group.id)}>
                        <img className={styles.ageIcon} src={group.icon} alt="" aria-hidden="true" />
                        <span><strong>{group.id}</strong><small>{group.years}</small></span>
                    </button>)}
                </div>

                <div className={styles.catalog}>
                    <aside className={styles.filters} aria-label="Фильтры курсов">
                        <fieldset className={styles.filterGroup}>
                            <legend>Уровень сложности</legend>
                            {difficulties.map((item) => <label className={styles.radioOption} key={item}>
                                <input type="radio" name="difficulty" checked={difficulty === item} onChange={() => setDifficulty(item)} /><span>{item}</span>
                            </label>)}
                        </fieldset>
                        <fieldset className={styles.filterGroup}>
                            <legend>Тип обучения</legend>
                            {types.map((item) => <label className={styles.radioOption} key={item}>
                                <input type="radio" name="type" checked={type === item} onChange={() => setType(item)} /><span>{item}</span>
                            </label>)}
                        </fieldset>
                        <div className={styles.durationGroup}>
                            <label htmlFor="duration">Длительность</label><span>от 1 до {duration} месяцев</span>
                            <input id="duration" type="range" min="1" max="24" value={duration} onChange={(event) => setDuration(Number(event.target.value))} />
                        </div>
                    </aside>

                    <section className={styles.results} aria-label="Программы обучения">
                        <div className={styles.directionBlock}><h2>Направление</h2><div className={styles.directionList}>
                            {directions.map((item) => <button type="button" key={item} className={`${styles.directionButton} ${direction === item ? styles.selectedDirection : ''}`}
                                aria-pressed={direction === item} onClick={() => setDirection(direction === item ? '' : item)}>{item}</button>)}
                        </div></div>
                        <div className={styles.cards}>
                            {loading && <p className={styles.message}>Загружаем программы обучения…</p>}
                            {!loading && error && <p className={styles.message}>Не удалось загрузить курсы. Проверьте, что сервер запущен и SQL-скрипт добавлен в базу.</p>}
                            {!loading && !error && filteredCourses.length === 0 && <p className={styles.message}>По выбранным фильтрам программ нет. Измените параметры поиска.</p>}
                            {filteredCourses.map((course, index) => <article className={`${styles.courseCard} ${styles[course.card_color] || styles[colors[index % colors.length]]}`} key={course.course_id}>
                                <span className={styles.cardType}>{course.course_type}</span>
                                <h3><span className={styles.courseIcon} aria-hidden="true">▦</span>{course.title}</h3>
                                <p className={styles.description}>{course.description}</p>
                                <div className={styles.cardBottom}><span>{course.duration_months} {Number(course.duration_months) === 1 ? 'месяц' : Number(course.duration_months) < 5 ? 'месяца' : 'месяцев'}</span>
                                    {Number(course.discount_percent) > 0 && <span className={styles.discount}>-{course.discount_percent}%</span>}</div>
                            </article>)}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
