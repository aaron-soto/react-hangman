import "./heart-block.scss";

import { useState, useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";

export const HeartBlock = () => {
	const {
		gameWord,
		gameWon,
		gameOver,
		matchedLetters,
		clickedLetters,
		gameWinCount,
		gameLoseCount,
		incorrectGuessCount,
		maxLives,
	} = useContext(Context);

	const [gameWonState, setGameWonState] = gameWon;
	const [gameOverState, setGameOverState] = gameOver;
	const [gameWordsState, setGameWordState] = gameWord;
	const [clickedLettersState, setClickedLettersState] = clickedLetters;
	const [matchedLettersState, setMatchedLettersState] = matchedLetters;
	const [gameWinCountState, setGameWinCountState] = gameWinCount;
	const [gameLoseCountState, setGameLoseCountState] = gameLoseCount;
	const [incorrectGuessCountState, setIncorrectGuessCountState] =
		incorrectGuessCount;
	const [maxLivesState, setMaxLivesState] = maxLives;
	const [shakeEffect, setShakeEffect] = useState(false);

	useEffect(() => {
		setShakeEffect(true);
		setTimeout(() => {
			setShakeEffect(false);
		}, 820);
	}, [incorrectGuessCountState]);

	return (
		<div className={`heart-block ${shakeEffect ? "shake" : ""}`}>
			{[...Array(maxLivesState)].map((x, i) => {
				if (maxLivesState - i + 1 <= incorrectGuessCountState + 1) {
					return <i class="far fa-heart"></i>;
				} else {
					return <i class="fas fa-heart"></i>;
				}
			})}
		</div>
	);
};
