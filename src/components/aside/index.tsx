import styles from './styles.module.scss';
import Image from 'next/image';
import profilePicture from '@public/images/profilePicture.jpg';

export default function Aside() {
	return (
		<aside className={styles.navBar}>
			<div className={styles.containerProfile}>
				<Image
					className={styles.profileImage}
					src={profilePicture}
					width={2080}
					height={2080}
					alt='profilePicture'
				/>
				<h2 className={styles.profileName}>Arthur de Assis</h2>
				<h3 className={styles.profileEmail}>
					contato.assisarthur@gmail.com
				</h3>
			</div>
			<div className={styles.containerNavBarSection}>
				<section className={styles.navBarSection}>
					<h2 className={styles.navBarSectionTitle}>Design</h2>
					<h2 className={styles.navBarSectionTitle}>Barbeque</h2>
					<h2 className={styles.navBarSectionTitle}>Productivity</h2>
					<h2 className={styles.navBarSectionTitle}>Workout</h2>
					<h2 className={styles.navBarSectionTitle}>Books</h2>
					<h2 className={styles.navBarSectionTitle}>Snack</h2>
				</section>
			</div>
		</aside>
	);
}
