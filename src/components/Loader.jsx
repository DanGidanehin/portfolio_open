import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className="flex flex-col items-center justify-center w-full">
			<div className="w-52 h-2 bg-white rounded-md overflow-hidden">
				<div
					className="h-full bg-[#915eff] rounded-md transition-all ease-linear duration-300"
					style={{ width: `${progress}%` }}
				/>
			</div>

			<p className="text-sm text-white font-extrabold mt-5">{progress.toFixed(2)}%</p>
		</Html>
	);
};

export default CanvasLoader;
