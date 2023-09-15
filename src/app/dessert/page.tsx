import styles from './styles.module.scss';
import Image from 'next/image';

type TDessert = {
	nome: string;
	images: string[];
};

async function GetDessertPhotos() {
	const dessertApi = `http://localhost:21262/dessert/`;

	const dessert: TDessert = await fetch(dessertApi).then(function (response) {
		return response.json();
	});
	return dessert;
}

export default async function Dessert() {
	const dessert = await GetDessertPhotos();
	return (
		<div className={styles.divPhoto}>
			{dessert.images.map(function (image, index) {
				return (
					<Image
						className={styles.photo}
						width={612}
						height={612}
						key={index}
						src={image}
						alt='dessert'
					/>
				);
			})}
		</div>
	);
}
