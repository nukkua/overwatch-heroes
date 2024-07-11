import Link from "next/link"

export const Navbar = () => {


	return (
		<header className="bg-gray-300 p-2">
			<nav className="flex justify-between items-center " >
				<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" /></svg>

				<Link href="/heroes">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45px" height="45px" viewBox="0 0 48 48">
						<path fill="#f97f00" d="M15.525,12.883C17.88,11.083,20.813,10,24,10c3.046,0,5.859,0.989,8.159,2.646L36,8.038C32.652,5.515,28.505,4,24,4c-4.707,0-9.032,1.645-12.452,4.376L15.525,12.883z"></path><path fill="#424242" d="M37.536,9.319l-3.839,4.606C36.344,16.474,38,20.044,38,24c0,7.72-6.28,14-14,14s-14-6.28-14-14c0-3.814,1.537-7.273,4.019-9.8l-3.972-4.502C6.323,13.333,4,18.397,4,24c0,11.028,8.972,20,20,20s20-8.972,20-20C44,18.195,41.499,12.976,37.536,9.319z"></path><path fill="#424242" d="M33 36l-8-8V15l3 8 9 9L33 36zM15 36l8-8V15l-3 8-9 9L15 36z"></path>
					</svg>
				</Link>

				<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 20 20"><g fill="none" stroke="currentColor" strokeLinecap="round"><circle cx="9.5" cy="5.5" r="3" /><path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6c-3.006 0-5.5 2.902-5.5 6v2" /></g></svg>


			</nav>
		</header>
	)
}
