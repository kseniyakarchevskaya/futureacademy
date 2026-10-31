import React, { useState } from 'react';
import axios from 'axios';
import styles from './auth.module.scss';
import { im } from '../Photo.js';

export default function Auth() {
	const [isLoginTab, setIsLoginTab] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleAuthSubmit = async (e) => {
		e.preventDefault();
		if (isLoginTab) {
			return;
		}

		try {
			const response = await axios.post('http://localhost:3000/api/register', {
				name,
				email,
				password
			});
			alert('Регистрация успешна!');
			setName('');
			setEmail('');
			setPassword('');
		} catch (error) {
			console.error('Registration error:', error);
			alert('Ошибка регистрации');
		}
	};

	return (
		<section className={styles.authSection}>
			<div className={styles.authCard}>
				
				<div className={styles.leftColumn}>
					<div className={styles.bubbleContainer}>
						<div className={styles.speechBubble}>
							<p className={styles.bubbleText}>
								Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта
							</p>
						</div>
					</div>
				</div>

				<div className={styles.rightColumn}>
					<div className={styles.tabsContainer}>
						<button 
							type="button"
							className={`${styles.tabButton} ${isLoginTab ? styles.activeTab : ''}`}
							onClick={() => setIsLoginTab(true)}
						>
							Вход
						</button>
						<button 
							type="button"
							className={`${styles.tabButton} ${!isLoginTab ? styles.activeTab : ''}`}
							onClick={() => setIsLoginTab(false)}
						>
							Регистрация
						</button>
					</div>

					<form className={styles.authForm} onSubmit={handleAuthSubmit}>
						{!isLoginTab && (
							<div className={styles.inputWrapper}>
								<input 
									type="text" 
									placeholder="Имя" 
									value={name}
									onChange={(e) => setName(e.target.value)}
									className={styles.formInput} 
								/>
							</div>
						)}
						
						<div className={styles.inputWrapper}>
							<input 
								type="email" 
								placeholder="Электронная почта" 
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={styles.formInput} 
							/>
						</div>
						
						<div className={styles.inputWrapper}>
							<input 
								type="password" 
								placeholder="Пароль" 
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={styles.formInput} 
							/>
						</div>

						<div className={styles.socialsBlock}>
							<span className={styles.socialsTitle}>Войти с помощью соцсетей:</span>
							<div className={styles.socialsIcons}>
								<img src={im.w1} alt="vk" className={styles.socialIcon} />
								<img src={im.w2} alt="inst" className={styles.socialIcon} />
								<img src={im.w3} alt="fb" className={styles.socialIcon} />
								<img src={im.w4} alt="yt" className={styles.socialIcon} />
								<img src={im.w5} alt="tg" className={styles.socialIcon} />
							</div>
						</div>

						<div className={styles.buttonWrapper}>
							<button type="submit" className={styles.submitButton}>
								{isLoginTab ? 'Войти' : 'Зарегистрироваться'}
							</button>
						</div>
					</form>
				</div>

			</div>
		</section>
	);
}
