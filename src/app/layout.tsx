import styles from './styles.module.scss';
import Image from 'next/image';
import profile from '@public/images/profile.jpg';
import profile2 from '@public/images/profile2.jpg';
import profile3 from '@public/images/profile3.jpg';
import { Poppins } from 'next/font/google';
import '../styles/reset.scss';
import Tab from '../components/tab/index';
import Plus from '@public/images/plus-bold.svg';
import Aside from '@/components/aside';
import { HiMenu } from 'react-icons/Hi';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<div className={styles.containerHomePage}>
					<Aside />

					<main className={styles.home}>
						<header className={styles.containerHeader}>
							<div className={styles.containerHomeTitle}>
								<h1 className={styles.homeTitle}>Barbeque</h1>

								<Image
									className={styles.homeImage}
									src={profile}
									width={2080}
									height={2080}
									alt='profile'
								/>

								<Image
									className={styles.homeImage2}
									src={profile2}
									width={2080}
									height={2080}
									alt='profile2'
								/>

								<Image
									className={styles.homeImage3}
									src={profile3}
									width={2080}
									height={2080}
									alt='profile3'
								/>
							</div>
							<div className={styles.plusDiv}>
								<Image
									className={styles.plus}
									alt='Plus'
									src={Plus}
								/>
							</div>
							<HiMenu className={styles.menuIcon} />
						</header>
						<Tab />
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
