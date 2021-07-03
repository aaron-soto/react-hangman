import { alphabet } from "../../../helpers/game-data";
import { LetterSquare } from "./LetterSquare";

export const LetterBlock = () => {
	return (
		<div className="letter-block">
			{alphabet.map((letter) => {
				return <LetterSquare key={letter} letter={letter} />;
			})}
		</div>
	);
};
