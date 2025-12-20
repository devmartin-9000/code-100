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
						className="rounded-br-2xl rounded-tr-2xl border-t-2  border-b-2  border-r-2 border-border/20 backdrop-blur-sm"
					/>
				))}
			</div>

			{/* Foreground Content */}
			<div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col items-center justify-center text-center">
				<div className="text-wrap font-extrabold gap-y-6 flex flex-col">
					<h1 className="text-secondary text-7xl">
						Welcome to <span className="text-accent">CODE100</span> portal
					</h1>
					<h1 className="text-5xl text-muted-foreground">
						a place for all sorts of cool
						projects, from games to somewhat fun useful tools
					</h1>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
