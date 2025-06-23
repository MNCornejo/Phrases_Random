import { useState } from 'react';
import phrases from './data/phrases.json';
import { randomItem } from './lib/utils';
import Card from './components/Card';
import img1 from './assets/a1.webp';
import img2 from './assets/a2.png';
import img3 from './assets/a3.webp';
import img4 from './assets/a4.webp';
import img5 from './assets/a5.webp';
import img6 from './assets/a6.webp';
import img7 from './assets/a7.webp';
import img8 from './assets/a10.webp';
import './App.css';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function App() {
	const [phrase, setPhrase] = useState(randomItem(phrases));
	const [image, setImage] = useState(randomItem(images));
	function handleChange() {
		setPhrase(randomItem(phrases));
		setImage(randomItem(images));
	}
	const styles = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className="container" style={styles}>
			<Card phrase={phrase} onChange={handleChange} />
		</div>
	);
}

export default App;
