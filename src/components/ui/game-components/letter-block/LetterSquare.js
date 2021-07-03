import "./letter-block.scss";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";

export const LetterSquare = ({ letter }) => {
	const {
		gameWord,
		gameWon,
		gameOver,
		matchedLetters,
		clickedLetters,
		incorrectGuessCount,
	} = useContext(Context);
	const [gameWordState, setGameWordState] = gameWord;
	const [gameWonState, setGameWonState] = gameWon;
	const [gameOverState, setGameOverState] = gameOver;
	const [clickedLettersState, setClickedLettersState] = clickedLetters;
	const [matchedLettersState, setMatchedLettersState] = matchedLetters;
	const [incorrectGuessCountState, setIncorrectGuessCountState] =
		incorrectGuessCount;
	const [clicked, setClicked] = useState(false);

	const addLettersToMatched = (letter) => {
		let letterInWord = false;

		gameWordState
			.toLowerCase()
			.split("")
			.forEach((wordLetter) => {
				if (wordLetter === letter) {
					letterInWord = true;
					setMatchedLettersState((pv) => [...pv, letter]);
				}
			});

		if (!letterInWord) {
			setIncorrectGuessCountState(incorrectGuessCountState + 1);
		}

		if (matchedLettersState.length === gameWordState.length - 1) {
			setGameWonState(true);
		}
	};

	const handleClick = (e) => {
		if (clicked === true) {
			return;
		}
		let letter = e.target.textContent;
		setClicked(true);
		setClickedLettersState((pv) => [...pv, letter]);
		addLettersToMatched(letter);
	};

	useEffect(() => {
		setClicked(false);
	}, [gameWonState, gameOverState]);

	return (
		<div
			className={`letter-square ${
				clickedLettersState.includes(letter) ? "clicked" : ""
			}`}
			// className={`letter-square ${clicked ? "clicked" : ""}`}
			onClick={handleClick}
		>
			{letter}
		</div>
	);
};
