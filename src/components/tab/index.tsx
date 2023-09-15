import styles from './styles.module.scss';
import Link from 'next/link';

async function GetDessertPhotos() {
	const dessertApi = `http://localhost:21262/dessert/`;
	const dessert = [];
	let index = 1;
}
async function GetDrinksPhotos() {
	const drinksApi = `http://localhost:21262/drinks/`;
	const drinks = [];
	let index = 1;
}

export default async function Tab() {
	return (
		<div>
			<div className={styles.tab}>
				<Link href='/' className={styles.tabDiv}>
					<h2 className={styles.tabTitle}>All</h2>
					<div className={styles.tabButton}></div>
				</Link>
				<Link href='/salty' className={styles.tabDiv}>
					<h2 className={styles.tabTitle}>Salty</h2>
					<div className={styles.tabButton}></div>
				</Link>
				<Link href='/dessert' className={styles.tabDiv}>
					<h2 className={styles.tabTitle}>Dessert</h2>
					<div className={styles.tabButton}></div>
				</Link>
				<Link href='/drinks' className={styles.tabDiv}>
					<h2 className={styles.tabTitle}>Drinks</h2>
					<div className={styles.tabButton}></div>
				</Link>
			</div>
		</div>
	);
}
