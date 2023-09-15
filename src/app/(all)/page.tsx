import styles from './styles.module.scss';
import Image from 'next/image';
import food from '@public/images/food_photo.jpg';
import food2 from '@public/images/food2_photo.jpg';
import food3 from '@public/images/food3_photo.jpg';
import food4 from '@public/images/food4_photo.jpg';
import food5 from '@public/images/food5_photo.jpg';
import food6 from '@public/images/food6_photo.jpg';

export default function All() {
	return (
		<div className={styles.divPhoto}>
			<Image
				className={styles.photo}
				src={food}
				width={612}
				height={612}
				alt='food'
			/>
			<Image
				className={styles.photo}
				src={food2}
				width={612}
				height={612}
				alt='food3'
			/>
			<Image
				className={styles.photo}
				src={food3}
				width={612}
				height={612}
				alt='food3'
			/>
			<Image
				className={styles.photo}
				src={food4}
				width={612}
				height={612}
				alt='food4'
			/>
			<Image
				className={styles.photo}
				src={food5}
				width={612}
				height={612}
				alt='food5'
			/>
			<Image
				className={styles.photo}
				src={food6}
				width={612}
				height={612}
				alt='food6'
			/>
		</div>
	);
}
