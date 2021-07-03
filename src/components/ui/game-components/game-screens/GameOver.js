import "./game-screens.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";
import { getRandomWord } from "../../../helpers/game-data";

export const GameOver = () => {
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

	const handleReset = () => {
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWordState(getRandomWord());
		setIncorrectGuessCountState(0);
		setGameOverDisplayState(false);
	};

	return (
		<div className="game-state lose">
			<h2>Game Over</h2>
			<p>You ran out of lives</p>
			<p>
				The word was <span>{gameWordsState}</span>
			</p>
			<button className="game-reset" onClick={handleReset}>
				Play Again
			</button>
		</div>
	);
};
