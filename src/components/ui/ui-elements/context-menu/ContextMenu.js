import "./ContextMenu.scss";
import {
	Moon,
	CornerUpRight,
	Sliders,
	Code,
	RefreshCw,
	HelpCircle,
	Heart,
	Check,
	Smile,
	Meh,
	Frown,
	ExternalLink,
} from "react-feather";
import { useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";
import { getRandomWord } from "../../../helpers/game-data";

const copyToClipboard = () => {
	navigator.clipboard.writeText("https://aaronsoto.io");
};

export const ContextMenu = ({ x, y }) => {
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
		appLikes,
		userAppLikes,
		userCoins,
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
	const [appLikesState, setAppLikesState] = appLikes;
	const [userAppLikesState, setUserAppLikesState] = userAppLikes;
	const [userCoinsState, setUserCoinsState] = userCoins;

	const handleReset = () => {
		setClickedLettersState([]);
		setMatchedLettersState([]);
		setGameWordState(getRandomWord());
		setIncorrectGuessCountState(0);
	};

	const handleDifficultyChange = (difficulty) => {
		if (difficulty === "easy") {
			setDifficultyState("easy");
		} else if (difficulty === "medium") {
			setDifficultyState("medium");
		} else if (difficulty === "hard") {
			setDifficultyState("hard");
		}

		handleReset();
	};

	const handleLike = () => {
		if (userAppLikesState < 50) {
			setUserAppLikesState(userAppLikesState + 1);
			setAppLikesState(appLikesState + 1);
		}
	};

	const guessRandomLetter = () => {
		if (userCoinsState < 10) {
			return;
		} else {
			setUserCoinsState(userCoinsState - 10);
		}
		let unguessedLetters = gameWordsState
			.toLowerCase()
			.split("")
			.filter((letter) => !clickedLettersState.includes(letter));
		let randomUnguessedLetter =
			unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];

		setClickedLettersState((pv) => [...pv, randomUnguessedLetter]);
		setMatchedLettersState((pv) => [...pv, randomUnguessedLetter]);
	};

	return (
		<div class="menu" style={{ left: x, top: y }}>
			{/* <div>Copied Link to clipboard</div> */}
			<ul class="menu-list">
				<li class="menu-item">
					<button class="menu-button" onClick={copyToClipboard}>
						<CornerUpRight /> Share
					</button>
				</li>
				<li class="menu-item">
					<button class="menu-button">
						<Moon /> Dark Mode
					</button>
				</li>
			</ul>
			<ul class="menu-list">
				<li class="menu-item">
					<button class="menu-button">
						<Sliders /> Difficulty
					</button>
					<ul class="menu-sub-list">
						<li class="menu-item">
							<button
								class="menu-button menu-button--green"
								onClick={() => {
									if (difficultyState === "easy") {
										return;
									}
									setDifficultyState("easy");
									handleReset();
								}}
							>
								<Smile /> Easy
								{difficultyState === "easy" ? <Check /> : ""}
							</button>
						</li>
						<li class="menu-item">
							<button
								class="menu-button menu-button--orange"
								onClick={() => {
									if (difficultyState === "medium") {
										return;
									}
									setDifficultyState("medium");
									handleReset();
								}}
							>
								<Meh /> Medium
								{difficultyState === "medium" ? <Check /> : ""}
							</button>
						</li>
						<li class="menu-item">
							<button
								class="menu-button menu-button--red"
								onClick={() => {
									if (difficultyState === "hard") {
										return;
									}
									setDifficultyState("hard");
									handleReset();
								}}
							>
								<Frown /> Hard
								{difficultyState === "hard" ? <Check /> : ""}
							</button>
						</li>
					</ul>
				</li>
				<li class="menu-item">
					<button
						class="menu-button right-icon"
						onClick={() => {
							window.open(
								"https://github.com/aaron-soto/HangmanProject",
								"_blank"
							);
						}}
					>
						<Code /> Code{" "}
						<span className="link-icon">
							<ExternalLink />
						</span>
					</button>
				</li>
				<li class="menu-item">
					<button class="menu-button right-icon" onClick={handleLike}>
						<Heart /> Like
						<span className="likes">{appLikesState} likes</span>
					</button>
				</li>
				<li class="menu-item">
					<button class="menu-button right-icon" onClick={guessRandomLetter}>
						<HelpCircle /> Use Hint <span className="cost">-10 coins</span>
					</button>
				</li>
			</ul>
			<ul class="menu-list">
				<li class="menu-item">
					<button class="menu-button menu-button--delete" onClick={handleReset}>
						<RefreshCw /> New Word
					</button>
				</li>
			</ul>
		</div>
	);
};
