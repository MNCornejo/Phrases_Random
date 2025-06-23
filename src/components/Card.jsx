import Phrase from './Phrase';

function Card({ phrase, onChange }) {
	return (
		<div className="card">
			<Phrase phrase={phrase} />
			<button type="buttom" className="card-btn" onClick={onChange}>
				leer otra frase
			</button>
		</div>
	);
}

export default Card;
