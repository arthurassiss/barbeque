import styles from './styles.module.scss';
import Image from 'next/image';

type TSalty = {
	nome: string;
	images: string[];
};

async function GetSaltyPhotos() {
	const saltyApi = `http://localhost:21262/salty/`;

	const salty: TSalty = await fetch(saltyApi).then(function (response) {
		return response.json();
	});
	return salty;
}

export default async function Salty() {
	const salty = await GetSaltyPhotos();
	return (
		<div className={styles.divPhoto}>
			{salty.images.map(function (image, index) {
				return (
					<Image
						className={styles.photo}
						width={612}
						height={612}
						key={index}
						src={image}
						alt='salty'
					/>
				);
			})}
		</div>
	);
}
