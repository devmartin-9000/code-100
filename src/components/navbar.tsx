import { Button } from "./ui/button";

const Navbar = () => {
  return (
		<div className="fixed z-50 inset-0 p-2 bg-primary/10">
			{/* LEFT NAV */}
			<div className="bg-secondary rounded-4xl">
				<div className="flex items-center justify-between border-s-10 border-e-10 border-primary p-2 rounded-full">
					<div className="flex gap-4 items-center">
						{/* Logo */}
						<img src="./site-logo.svg" alt="Site Logo" className="h-8 w-auto" />
						{/* Text */}
						<h1 className="text-primary font-extrabold text-3xl">code100</h1>
					</div>
					<div className="flex gap-4 text-md font-bold">
						{/* Menu Links */}
					  <a className="border-y-3 p-2 rounded-full border-transparent hover:border-primary transform-border transition-all duration-500 cursor-pointer"
					  href="/games"
					  >
							Games
						</a>
						<a className="border-y-3 p-2 rounded-full border-transparent hover:border-primary transform-border transition-all duration-500 cursor-pointer">
							Tools
						</a>
						<a className="border-y-3 p-2 rounded-full border-transparent hover:border-primary transform-border transition-all duration-500 cursor-pointer">
							Blogs
						</a>
						<a className="border-y-3 p-2 rounded-full border-transparent hover:border-primary transform-border transition-all duration-500 cursor-pointer">
							Random
						</a>
					</div>
					<div className="flex gap-4">
						<Button
							className="w-36 rounded-full"
							variant="outline"
						>
							Log In
						</Button>
						<Button className="w-36 rounded-full">Create Account</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar