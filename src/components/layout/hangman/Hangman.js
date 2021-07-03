import { useState, useContext, useEffect } from "react";
import { Context } from "../../helpers/Store";

import { getRandomWord } from "../../helpers/game-data";

import { WordBlock } from "../../ui/game-components/word-block/WordBlock";
import { LetterBlock } from "../../ui/game-components/letter-block/LetterBlock";
import { DetailsBlock } from "../../ui/game-components/details-block/DetailsBlock";
import { HeartBlock } from "../../ui/game-components/heart-block/HeartBlock";
import { GameOver } from "../../ui/game-components/game-screens/GameOver";
import { GameWin } from "../../ui/game-components/game-screens/GameWin";
import { ContextMenu } from "../../ui/ui-elements/context-menu/ContextMenu";

export const Hangman = () => {
	const {
		gameWord,
		gameWon,
		gameOver,
		difficulty,
		gameStarted,
		matchedLetters,
		clickedLetters,
		gameWinCount,
		gameLoseCount,
		incorrectGuessCount,
		maxLives,
		gameOverDisplay,
		gameWinDisplay,
		winStreak,
	} = useContext(Context);

	const [gameWonState, setGameWonState] = gameWon;
	const [gameOverState, setGameOverState] = gameOver;
	const [gameWordsState, setGameWordState] = gameWord;
	const [difficultyState, setDifficultyState] = difficulty;
	const [gameStartedState, setGameStartedState] = gameStarted;
	const [clickedLettersState, setClickedLettersState] = clickedLetters;
	const [matchedLettersState, setMatchedLettersState] = matchedLetters;
	const [gameWinCountState, setGameWinCountState] = gameWinCount;
	const [gameLoseCountState, setGameLoseCountState] = gameLoseCount;
	const [incorrectGuessCountState, setIncorrectGuessCountState] =
		incorrectGuessCount;
	const [maxLivesState, setMaxLivesState] = maxLives;
	const [gameOverDisplayState, setGameOverDisplayState] = gameOverDisplay;
	const [gameWinDisplayState, setGameWinDisplayState] = gameWinDisplay;
	const [modalX, setModalX] = useState(0);
	const [modalY, setModalY] = useState(0);
	const [modalView, setModalView] = useState(false);
	const [winStreakState, setWinStreakState] = winStreak;

	const resetGameWon = () => {
		setGameWinDisplayState(true);
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWonState(false);
		setIncorrectGuessCountState(0);
		setWinStreakState(winStreakState + 1);
		setGameWinCountState(gameWinCountState + 1);
	};
	const resetGameLose = () => {
		setGameOverDisplayState(true);
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameOverState(false);
		setIncorrectGuessCountState(0);
		setWinStreakState(0);
		setGameLoseCountState(gameLoseCountState + 1);
	};

	const handleReset = () => {
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWordState(getRandomWord());
		setIncorrectGuessCountState(0);
	};

	useEffect(() => {
		if (difficultyState === "easy") {
			setMaxLivesState(7);
		} else if (difficultyState === "medium") {
			setMaxLivesState(5);
		} else if (difficultyState === "hard") {
			setMaxLivesState(3);
		}
	}, [difficultyState]);

	useEffect(() => {
		if (incorrectGuessCountState >= maxLivesState) {
			setGameOverState(true);
		}
	}, [incorrectGuessCountState, maxLivesState, setGameOverState]);

	document.addEventListener("contextmenu", (e) => {
		setModalView(true);
		e.preventDefault();
		if (e.clientX > window.innerWidth - 200) {
			setModalX(e.clientX - 220);
		} else {
			setModalX(e.clientX);
		}
		if (e.clientY > window.innerHeight - 365) {
			setModalY(e.clientY - 365);
		} else {
			setModalY(e.clientY);
		}
	});
	document.addEventListener("click", (e) => {
		e.preventDefault();
		// if (e.target.attributes[0] != "menu-list") {
		// 	console.log("outside");
		// }
		if (e.target.tagName === "BUTTON") {
			return;
		} else {
			setModalView(false);
		}
	});

	return (
		<div className="container">
			{gameOverDisplayState && <GameOver />}
			{gameWinDisplayState && <GameWin />}
			<DetailsBlock />

			{gameWonState ? resetGameWon() : ""}
			{gameOverState ? resetGameLose() : ""}
			<LetterBlock />
			{modalView && <ContextMenu x={modalX} y={modalY} />}
		</div>
	);
};
