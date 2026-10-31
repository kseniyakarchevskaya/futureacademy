import React from 'react';
import styles from './Footer.module.scss';
import { im } from '../Photo.js';
import logo from '../assets/logo.png';

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			
			<div className={styles.feedbackCard} id="registration">
				<div className={styles.owlBlock}>
					<img src={im.sov} alt="Сова" className={styles.owlImg} />
				</div>

				<form className={styles.feedbackForm} onSubmit={(e) => e.preventDefault()}>
					<div className={styles.inputRowFull}>
						<input type="text" placeholder="Ваше имя" className={styles.formInput} />
					</div>
					<div className={styles.inputRowSplit}>
						<input type="tel" placeholder="Ваш телефон" className={styles.formInputSplit} />
						<input type="email" placeholder="Ваш e-mail" className={styles.formInputSplit} />
					</div>
					<div className={styles.submitRow}>
						<p className={styles.disclaimer}>
							Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой
						</p>
						<button type="submit" className={styles.submitButton}>Отправить</button>
					</div>
				</form>
			</div>

			
			<div className={styles.mainFooter}>
				<div className={styles.footerGrid}>
					
					
					<div className={styles.contactsColumn}>
						<div className={styles.logoWrapper}>
							<img src={logo} alt="Future Academy" className={styles.footerLogo} />
						</div>
						<div className={styles.phoneWrapper}>
							<a href="tel:88009503398" className={styles.footerPhone}>8 800 950-33-98</a>
						</div>
						<div className={styles.addressWrapper}>
							<p className={styles.footerAddress}>г. Москва, ул. Ленина, д. 50</p>
						</div>
						<div className={styles.mailWrapper}>
							<a href="mailto:info@hodfutureacademy.ru" className={styles.footerMail}>info@hodfutureacademy.ru</a>
						</div>
						<div className={styles.socialsWrapper}>
							<img src={im.w1} alt="vk" className={styles.socialIcon} />
							<img src={im.w2} alt="ok" className={styles.socialIcon} />
							<img src={im.w3} alt="fb" className={styles.socialIcon} />
							<img src={im.w4} alt="inst" className={styles.socialIcon} />
							<img src={im.w5} alt="tg" className={styles.socialIcon} />
						</div>
						<div className={styles.copyWrapper}>
							<p className={styles.footerCopy}>© ХОД Future Academy</p>
						</div>
					</div>

					
					<div className={styles.linksColumn}>
						<h4 className={styles.columnTitle}>Детям</h4>
						<a href="#robotics" className={styles.columnLink}>Робототехника</a>
						<a href="#gamedev" className={styles.columnLink}>Создание игр</a>
						<a href="#programming" className={styles.columnLink}>Программирование</a>
						<a href="#multimedia" className={styles.columnLink}>Мультимедиа</a>
						<a href="#softskills" className={styles.columnLink}>Soft skills</a>
						<a href="#chess" className={styles.columnLink}>Шахматы</a>
						<a href="#blogging" className={styles.columnLink}>Блогинг</a>
					</div>

					
					<div className={styles.linksColumn}>
						<h4 className={styles.columnTitle}>Подросткам</h4>
						<a href="#web" className={styles.columnLink}>Web-разработка</a>
						<a href="#applied" className={styles.columnLink}>Прикладное программирование</a>
						<a href="#design" className={styles.columnLink}>Графическое моделирование</a>
						<a href="#gamedev-teen" className={styles.columnLink}>Game Development</a>
						<a href="#softskills-teen" className={styles.columnLink}>Soft skills</a>
						<a href="#mobile" className={styles.columnLink}>Разработка мобильных приложений</a>
						<a href="#blogging-teen" className={styles.columnLink}>Блогинг</a>
					</div>

					
					<div className={styles.linksColumn}>
						<h4 className={styles.columnTitle}>Взрослым</h4>
						<a href="#unity" className={styles.columnLink}>Разработчик игр на Unity</a>
						<a href="#software" className={styles.columnLink}>Разработка ПО</a>
						<a href="#graphic" className={styles.columnLink}>Графический Дизайн</a>
						<a href="#qa" className={styles.columnLink}>Тестировщик ПО</a>
						<a href="#marketing" className={styles.columnLink}>Интернет Маркетинг</a>
						<a href="#java" className={styles.columnLink}>Java-разработчик</a>
						<a href="#python" className={styles.columnLink}>Python-разработчик</a>
					</div>

					
					<div className={styles.linksColumn}>
						<h4 className={styles.columnTitle}>Информация</h4>
						<a href="#about" className={styles.columnLink}>Об академии</a>
						<a href="#events" className={styles.columnLink}>Мероприятия</a>
						<a href="#news" className={styles.columnLink}>Новости</a>
						<a href="#knowledge" className={styles.columnLink}>База знаний</a>
						<a href="#career" className={styles.columnLink}>Карьера</a>
						<a href="#contacts" className={styles.columnLink}>Контакты</a>
					</div>

				</div>
			</div>
		</footer>
	);
}
