import React, { useState } from "react";
import DefaultTemplate from "../../templates/DefaultTemplate";
import ContextTab from "./ContextTab";
import LocalTab from "./LocalTab";
import CounterProvider from "../../../hooks/useCounter/CounterProvider";

const CounterPage = () => {
	const [data, setData] = useState<{count: Number, tabIndex: Number}>({count: 0, tabIndex: 0})

	const changeTabHandler = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		setData(prevState => {return {...prevState, tabIndex: index}})
	}

	return (
		<DefaultTemplate>
			<h1>Welcome to Counter Page</h1>
			<p>Here we will demonstrate how <code>Context</code> and <code>Reducer</code> works also with <code>localStorage</code>!</p>
			<p>Choose:</p>
			<div style={{display: 'flex'}}>
				<button onClick={(e) => {changeTabHandler(e, 0)}}>LocalStorage</button>
				<button onClick={(e) => {changeTabHandler(e, 1)}}>Context</button>
			</div>
			{data.tabIndex === 0 ? <LocalTab /> : <ContextTab />}
		</DefaultTemplate>
	);
};

export default CounterPage;
