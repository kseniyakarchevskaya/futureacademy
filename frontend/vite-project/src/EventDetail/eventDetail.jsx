import { useState } from 'react';
import styles from './eventDetail.module.scss';
import sova from '../assets/sova1.png';
import heroPhoto from '../assets/event-hero-optimized.png';
import speaker1 from '../assets/event-speaker-1.png';
import speaker2 from '../assets/event-speaker-2.png';
import speaker3 from '../assets/event-speaker-3.png';
import speaker4 from '../assets/event-speaker-4.png';
import gallery1 from '../assets/event-gallery-1.png';
import gallery2 from '../assets/event-gallery-2.png';
import gallery3 from '../assets/event-gallery-3.png';
import gallery4 from '../assets/event-gallery-4.png';
import gallery5 from '../assets/event-gallery-5.png';
import gallery6 from '../assets/event-gallery-6.png';

const advantages = [
    'Узнайте самые востребованные профессии, на которые более 113 тысяч вакансий',
    'Выберите подходящую именно для вас',
    'Сделайте первые шаги к возможности выйти на доход более 100 тысяч рублей',
];

const speakers = [speaker1, speaker2, speaker3, speaker4];
const gallery = [gallery6, gallery1, gallery3, gallery4, gallery5, gallery2];
const programDays = [
    { title: 'День первый', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.' },
    { title: 'День второй', text: 'Попробуем себя в практических заданиях, пообщаемся с экспертами и составим план дальнейшего обучения.' },
    { title: 'День третий', text: 'Подведём итоги интенсива, обсудим карьерные возможности и ответим на ваши вопросы.' },
];

export default function EventDetail() {
    const [openDay, setOpenDay] = useState(0);

    return (
        <main className={styles.eventPage}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <h1>Название мероприятия</h1>
                        <p className={styles.subtitle}>Подпись к названию</p>
                        <div className={styles.advantages}>
                            {advantages.map((item) => <p key={item}>{item}</p>)}
                        </div>
                        <h2>Запишись сейчас</h2>
                        <a href="#registration" className={styles.heroButton}>Записаться на интенсив</a>
                    </div>
                </div>
            </section>

            <section className={styles.programSection}>
                <div className={styles.contentWidth}>
                    <div className={styles.introGrid}>
                        <div className={styles.owlPromo}>
                           
                        </div>
                        <div className={styles.benefitGrid}>
                            {['×', '●', '▲'].map((icon, index) => <article className={styles.benefit} key={icon}>
                                <span className={`${styles.benefitIcon} ${styles[`benefitIcon${index + 1}`]}`} aria-hidden="true">{icon}</span>
                                <h3>Заголовок</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</p>
                            </article>)}
                        </div>
                    </div>

                    <div className={styles.programIntro}>
                        <h2>Программа мероприятия</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst.</p>
                    </div>

                    <div className={styles.accordion}>
                        {programDays.map((day, index) => {
                            const isOpen = openDay === index;
                            return <article className={`${styles.dayCard} ${isOpen ? styles.dayOpen : ''}`} key={day.title}>
                                <button className={styles.dayToggle} type="button" aria-expanded={isOpen} onClick={() => setOpenDay(isOpen ? -1 : index)}>
                                    <span>{day.title}</span><span className={styles.toggleIcon} aria-hidden="true">{isOpen ? '×' : '+'}</span>
                                </button>
                                {isOpen && <p className={styles.dayDescription}>{day.text}</p>}
                            </article>;
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.speakersSection}>
                <span className={`${styles.shape} ${styles.speakerCross}`} aria-hidden="true" />
                <div className={styles.speakersContent}>
                    <h2>Мероприятие проводят</h2>
                    <div className={styles.speakerGrid}>
                        {speakers.map((photo, index) => <article className={styles.speakerCard} key={photo}>
                            <img className={styles.speakerPhoto} src={photo} alt={`Ведущий мероприятия ${index + 1}`} />
                            <h3>Имя Фамилия</h3>
                            <p>Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.</p>
                        </article>)}
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className={styles.contentWidth}>
                    <h2>Фотографии с прошлых мероприятий</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo.</p>
                </div>
                <div className={styles.galleryViewport}>
                    <div className={styles.galleryTrack}>
                        {gallery.map((photo, index) => <img src={photo} alt={`Фото с прошлого мероприятия ${index + 1}`} key={photo} />)}
                    </div>
                </div>
                <div className={styles.galleryProgress}><span /></div>
            </section>
        </main>
    );
}
