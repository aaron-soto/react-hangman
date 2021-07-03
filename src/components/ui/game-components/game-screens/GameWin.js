import "./game-screens.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";
import { getRandomWord } from "../../../helpers/game-data";

export const GameWin = () => {
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
		userCoins,
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
	const [userCoinsState, setUserCoinsState] = userCoins;

	const handleReset = () => {
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWordState(getRandomWord());
		setIncorrectGuessCountState(0);
		setUserCoinsState(userCoinsState + 10);
		setGameWinDisplayState(false);
	};

	return (
		<div className="game-state win">
			<h2>You Win!</h2>
			<p>
				You guessed the word <span>{gameWordsState}</span> and received{" "}
				<span>10</span> coins
			</p>
			<button className="game-reset" onClick={handleReset}>
				Play Again
			</button>
		</div>
	);
};
