import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import { FaClock} from "react-icons/fa"




const Home = () => {

	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(false)
	const [isCountdown, setIsCountdown] = useState(false);
	const [alert, setAlert] = useState(0)

	useEffect(() => {
		if(timer == alert && alert != 0) window.alert("Time's up!")

		if(active) {
			setTimeout (() => {
			setTimer(value => value + 1)
		}, 1000)	
		}
		if(isCountdown) {
			setTimeout (() => {
			setTimer(value => value - 1)
		}, 1000)	
		}
		
		
	}, [timer, active, isCountdown]);

// Función para botones Start y Stop
 const buttons = () => setActive(value => !value)

 // Función para botoón Reset
 const resetButton = () => setTimer(value => value=0)

 // Función para cuenta regresiva
 const handleChange = e => setTimer(value => value=e.target.value)

	return (
		<main className="text-center">
			<section className="counter-container">
				<Counter number={<FaClock/>}/>
				<Counter number={Math.floor(timer/100000)%10}/>
				<Counter number={Math.floor(timer/10000)%10}/>
				<Counter number={Math.floor(timer/1000)%10}/>
				<Counter number={Math.floor(timer/100)%10}/>
				<Counter number={Math.floor(timer/10)%10}/>
				<Counter number={Math.floor(timer%10)}/>
			</section>
			{/* Bonus */}
			<section className="container text-center my-5">
				<h2>Counter controller</h2>
				<div>
					<button
					disabled={active}
					onClick={buttons} className="mx-1 btn btn-success">Start</button>
					<button
					disabled={!active}
					onClick={buttons} className="mx-1 btn btn-secondary">Stop</button>
					<button 
					onClick={resetButton} className="mx-1 btn btn-danger">Reset</button>
				</div>
			</section>
			<section className="container text-center">
				<h2>CountDown</h2>
				<form
				className="form-control"
				onSubmit={e=>e.preventDefault()}>
				<label className="form-text">
					Ammount to start

					<input
					className="form-control"
					type="number"
					value={timer}
					onChange={e=> handleChange(e)}
					/>
				</label>
				<div>
					<input
					disabled={isCountdown}
					onClick={() => setIsCountdown(value => !value)}
					className="mx-1 my-3 btn btn-success" type="submit" value={"start"}/>
					<input
					disabled={!isCountdown}
					onClick={() => setIsCountdown(value => !value)}
					className="mx-1 my-3 btn btn-secondary" type="submit" value={"stop"}/>
				</div>
				</form>
			</section>
			<section className="container text-center">
				<h2>Create Alert</h2>
					<form
						className="form-control"
						onSubmit={e => e.preventDefault()}>
				<label className="form-text">
					Alert at
					<input
						className="form-control"
						type="number"
						onChange={e => setAlert(value => value = e.target.value)}
					/>
				</label>
				<div>
					<input
					onClick={() => window.alert("Alert created")}
					className="mx-1 my-3 btn btn-success" type="submit" value={"Create!"}/>
				</div>
			</form>
			</section>
		</main>
	);
};

export default Home;












//Cuando timer es ejecutado, ejecuta un setTimeout, que espera un segundo para cambiar el valor de timer, set timer recibe el valor que tieme timer y le suma 1