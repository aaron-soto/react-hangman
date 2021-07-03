// import { useState, useContext, useEffect } from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../helpers/Store";
import { BlankSpace } from "./BlankSpace";
import { CorrectLetter } from "./CorrectLetter";
import "./wordBlock.scss";

export const WordBlock = () => {
	const { gameWord, clickedLetters } = useContext(Context);
	const [gameWordState] = gameWord;
	const [clickedLettersState] = clickedLetters;

	return (
		<>
			<div className="word-block">
				{gameWordState
					.toLowerCase()
					.split("")
					.map((letter, idx) => {
						if (clickedLettersState.includes(letter)) {
							return <CorrectLetter key={idx} idx={idx} letter={letter} />;
						} else {
							return <BlankSpace key={idx} />;
						}
					})}
			</div>
		</>
	);
};
