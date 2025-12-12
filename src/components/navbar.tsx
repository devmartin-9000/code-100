
const Navbar = () => {
  return (
		<div className="fixed z-50 inset-0 p-2 bg-primary/10">
          {/* LEFT NAV */}
          <div className="bg-secondary rounded-4xl">
              <div className="flex items-center gap-4 border-s-10 border-e-10 border-primary p-2 rounded-full">
                  {/* Logo */}
                  <img src="./site-logo.svg" alt="Site Logo" className="h-8 w-auto" />
                  {/* Text */}
				<h1 className="text-primary font-extrabold text-3xl">code100</h1>
			</div>
          </div>
		</div>
	);
}

export default Navbar