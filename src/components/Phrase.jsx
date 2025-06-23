function Phrase({ phrase }) {
	return (
		<>
			<p className="card-phrase">"{phrase.phrase}"</p>
			<p className="card-author">{phrase.author}</p>
		</>
	);
}

export default Phrase;
