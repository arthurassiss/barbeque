import styles from './styles.module.scss';
import Image from 'next/image';

type TDrinks = {
	name: string;
	images: string[];
};

async function GetDrinksPhotos() {
	const drinksApi = `http://localhost:21262/drinks/`;
	const drinks: TDrinks = await fetch(drinksApi).then(function (response) {
		return response.json();
	});
	return drinks;
}

export default async function Drinks() {
	const drinks = await GetDrinksPhotos();
	return (
		<div className={styles.divPhoto}>
			{drinks.images.map(function (image, index) {
				return (
					<Image
						className={styles.photo}
						width={612}
						height={612}
						key={index}
						src={image}
						alt='drinks'
					/>
				);
			})}
		</div>
	);
}
