const HeroSection = () => {
    return (
			<section className="h-screen">
				<img  className="w-full fixed bg-cover" src="./hero-image.jpg" alt="Hero Image" />
				<div className="relative w-full z-50 items-center flex justify-center">
					<h1 className="text-5xl font-extrabold text-secondary"></h1>
				</div>
			</section>
		);
}

export default HeroSection