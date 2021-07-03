import React, { useState } from "react";
import { getRandomWord } from "../../components/helpers/game-data";

export const Context = React.createContext();

const Store = ({ children }) => {
	const [state, setState] = useState(false);
	const [gameWord, setGameWord] = useState(getRandomWord());
	const [gameWon, setGameWon] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [gameStarted, setGameStarted] = useState(true);
	const [difficulty, setDifficulty] = useState("easy");
	const [clickedLetters, setClickedLetters] = useState([]);
	const [matchedLetters, setMatchedLetters] = useState([]);
	const [gameWinCount, setGameWinCount] = useState(0);
	const [gameLoseCount, setGameLoseCount] = useState(0);
	const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
	const [maxLives, setMaxLives] = useState(5);
	const [gameOverDisplay, setGameOverDisplay] = useState(false);
	const [gameWinDisplay, setGameWinDisplay] = useState(false);
	const [appLikes, setAppLikes] = useState(146);
	const [userAppLikes, setUserAppLikes] = useState(0);
	const [userCoins, setUserCoins] = useState(20);
	const [winStreak, setWinStreak] = useState(0);

	return (
		<Context.Provider
			value={{
				state: [state, setState],
				gameWord: [gameWord, setGameWord],
				gameWon: [gameWon, setGameWon],
				gameOver: [gameOver, setGameOver],
				gameStarted: [gameStarted, setGameStarted],
				difficulty: [difficulty, setDifficulty],
				clickedLetters: [clickedLetters, setClickedLetters],
				matchedLetters: [matchedLetters, setMatchedLetters],
				gameWinCount: [gameWinCount, setGameWinCount],
				gameLoseCount: [gameLoseCount, setGameLoseCount],
				incorrectGuessCount: [incorrectGuessCount, setIncorrectGuessCount],
				maxLives: [maxLives, setMaxLives],
				gameOverDisplay: [gameOverDisplay, setGameOverDisplay],
				gameWinDisplay: [gameWinDisplay, setGameWinDisplay],
				appLikes: [appLikes, setAppLikes],
				userAppLikes: [userAppLikes, setUserAppLikes],
				userCoins: [userCoins, setUserCoins],
				winStreak: [winStreak, setWinStreak],
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Store;
