const HeroSection = () => {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Image */}
			<img
				src="./hero-image.jpg"
				alt="Hero Image"
				className="absolute inset-0 h-full w-full object-cover"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Skeleton Background Layer */}
			<div className="mt-20 absolute inset-0 z-5 grid grid-cols-4 grid-rows-1 gap-6 p-5">
				{Array.from({ length: 4 }).map((_, index) => (
					<div
						key={index}
						className="rounded-2xl bg-white/10 backdrop-blur-sm"
					/>
				))}
			</div>

			{/* Foreground Content */}
			<div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
				<h1 className="text-5xl font-extrabold text-secondary">
					This is the landing page
				</h1>
			</div>
		</section>
	);
};

export default HeroSection;
