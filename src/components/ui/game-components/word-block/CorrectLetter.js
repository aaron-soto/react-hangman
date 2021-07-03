import "./wordBlock.scss";

export const CorrectLetter = ({ letter, idx }) => {
	return (
		<div className={`correct-letter ${idx === 0 ? "uppercase" : ""}`}>
			{letter}
		</div>
	);
};
