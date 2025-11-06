import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import { FaClock} from "react-icons/fa"


//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		
		
		setTimeout (() => {
			setTimer(value => value + 1)
		}, 1000)

	}, [timer]);

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
			
		</main>
	);
};

export default Home;












//Cuando timer es ejecutado, ejecuta un setTimeout, que espera un segundo para cambiar el valor de timer, set timer recibe el valor que tieme timer y le suma 1