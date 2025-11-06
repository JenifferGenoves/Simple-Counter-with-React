import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import { FaClock} from "react-icons/fa"


// Función para obtener los dígitos del contador 

const getDigits = (time) => {
	const paddedTime = String(time).padStart(6, '0');
	return Array.from(paddedTime.slice(-6)).map(Number);
};

const Home = () => {
	//Estado time presenta segundos transcurridos
	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(false)

	// setInterval para limpiar
	useEffect(() => {
		let interval = null;
		
		if(active) {
			// Establecer intervalo
			interval = setInterval(() => {
				setTimer(prevTimer => prevTimer + 1);
			}, 1000);
		}

	return () => clearInterval(interval); // Función para limpiar

	}, [active]); // Se ejecuta cuando active cambia

	// Funciones
	const handleToggle = () => setActive(prevActive => !prevActive);

	// Reinicia contador 
	const handleReset = () => {
		setTimer(0);
		setActive(false);
	};

	const digits = getDigits(timer);

	return (
		<main className="text-center">
			<section className="counter-container">
				<Counter number={<FaClock/>}/>
				{digits.map((digit, index) => (
                <Counter key={index} number={digit} />
                ))}
			</section>
			<section className="container text-center">
				<h2>Counter controller</h2>
				<div>
					<button
					disabled={active}
					onClick={handleToggle} className="mx-1 btn btn-success">Start</button>
					<button
					disabled={!active}
					onClick={handleToggle} className="mx-1 btn btn-secondary">Stop</button>
					<button 
					onClick={handleReset} className="mx-1 btn btn-danger">Reset</button>
				</div>
			</section>
		</main>
	)
};

export default Home;












