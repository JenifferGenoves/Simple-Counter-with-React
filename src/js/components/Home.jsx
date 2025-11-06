import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import { FaClock} from "react-icons/fa"



const Home = () => {

	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(false)

	useEffect(() => {
		if(active) {
			setTimeout (() => {
			setTimer(value => value + 1)
		}, 1000)	
		}
		
	}, [timer, active]);

// Función para botones Start y Stop
 const buttons = () => setActive(value => value=!value)

 // Función para botoón Reset
 const resetButton = () => setTimer(value => value=0)

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
			<section className="container text-center">
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
			
		</main>
	);
};

export default Home;












//Cuando timer es ejecutado, ejecuta un setTimeout, que espera un segundo para cambiar el valor de timer, set timer recibe el valor que tieme timer y le suma 1