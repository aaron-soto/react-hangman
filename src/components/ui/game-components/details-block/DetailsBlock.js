import "./details-block.scss";

import { useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";

import { getRandomWord } from "../../../helpers/game-data";
import { HeartBlock } from "../heart-block/HeartBlock";
import { WordBlock } from "../word-block/WordBlock";

export const DetailsBlock = () => {
	const {
		gameWord,
		gameWon,
		gameOver,
		difficulty,
		matchedLetters,
		clickedLetters,
		gameWinCount,
		gameLoseCount,
		incorrectGuessCount,
		maxLives,
		userCoins,
		winStreak,
	} = useContext(Context);

	const [gameWonState, setGameWonState] = gameWon;
	const [gameOverState, setGameOverState] = gameOver;
	const [gameWordsState, setGameWordState] = gameWord;
	const [difficultyState, setDifficultyState] = difficulty;
	const [clickedLettersState, setClickedLettersState] = clickedLetters;
	const [matchedLettersState, setMatchedLettersState] = matchedLetters;
	const [gameWinCountState, setGameWinCountState] = gameWinCount;
	const [gameLoseCountState, setGameLoseCountState] = gameLoseCount;
	const [incorrectGuessCountState, setIncorrectGuessCountState] =
		incorrectGuessCount;
	const [maxLivesState, setMaxLivesState] = maxLives;
	const [userCoinsState, setUserCoinsState] = userCoins;
	const [winStreakState, setWinStreakState] = winStreak;

	const handleReset = () => {
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWordState(getRandomWord());
		setIncorrectGuessCountState(0);
	};

	return (
		<div className="details-block">
			<h2>React Hangman</h2>
			<div className="details">
				<p>
					Wins: <span className="stats-count">{gameWinCountState}</span>
				</p>
				<p>
					Winstreak: <span className="stats-count">{winStreakState}</span>
				</p>
				<p>
					Losses: <span className="stats-count">{gameLoseCountState}</span>
				</p>
			</div>
			<p>
				Coins: <span>{userCoinsState}</span>
			</p>
			<HeartBlock />
			<WordBlock />
		</div>
	);
};
