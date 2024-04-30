import { useEffect, useState } from 'react'
import IMG from './assets/bg.jpg'
import Card from './components/Card'
import './App.css'

function App() {
	const [data, setData] = useState([])

	const getData = async () => {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
			)
			const request = await response.json()
			setData(request)
		} catch (error) {
			console.log(error)
		}
	}
	const available = () => {
		const allAvailable = data.filter((item) => item.available === true)
		setData(allAvailable)
	}
	const allProduct = () => {
		getData()
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<div>
			<div>
				<img className="w-full" src={IMG} alt="bg-cofee" />
				<div className="w-[1110px]  bg-[#1B1D1F] text-white rounded-xl p-8 mx-auto -top-20 relative">
					<div className="text-center w-1/2 m-auto ">
						<h1 className="font-bold text-4xl">Our collection</h1>
						<p className="mt-5 text-gray-400">
							Começando pela acidez, seguindo pelo aroma e depois
							pelo sabor. Por exemplo, você pode descrever o café
							como – um com sabor forte e brilhante, com notas
							cítricas e de caramelo. Geralmente, não há uma
							maneira de descrever uma
						</p>
						<div className="flex gap-5 items-center justify-center mt-5">
							<button
								className="bg-gray-400 py-2 px-5 rounded-xl font-semibold"
								onClick={allProduct}
							>
								All product
							</button>
							<button
								className="font-semibold"
								onClick={available}
							>
								Avaliable now
							</button>
						</div>
					</div>
					<div className="grid grid-cols-3 mt-10 gap-y-20">
						{data.map((info) => (
							<Card key={info.id} info={info} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
