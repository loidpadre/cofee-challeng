import { FaStar } from 'react-icons/fa'
export default function Card({ info }) {
	const { name, price, image, rating, votes, popular } = info
	return (
		<div>
			<div className="w-[250px] mx-auto  ">
				<div className="relative">
					<img className="rounded-2xl mb-2" src={image} alt="" />
					{popular ? (
						<p className="absolute top-2 left-2 bg-[#F6C768] py-1 px-2 rounded-xl  text-zinc-800">
							Popular
						</p>
					) : (
						''
					)}
				</div>
				<div className="flex justify-between">
					<h1 className="font-semibold">{name}</h1>
					<p className="bg-[#BEE3CC] py-0 text-black font-semibold px-2 rounded">
						{price}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex gap-2 items-center">
						<FaStar color="yellow" />
						<p className="font-semibold">{rating}</p>
					</div>
					<p className="text-gray-500 font-semibold">{`( ${votes} Votes )`}</p>
				</div>
			</div>
		</div>
	)
}
