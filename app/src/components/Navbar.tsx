import React from "react"
import Container from "./base/Container"
import BaseLink from "./BaseLink"

export default function Navbar() {
	return (
		<nav>
			<div className="bg-gray-800">
				<Container>
					<div className="flex h-full items-center py-6 text-gray-200">
						<BaseLink to="/home">
							<div className="text-lg">Pro Shop</div>
						</BaseLink>
						<ul className="mr-auto flex">
							<li className="px-2">
								<BaseLink to="/cart" extraClasses="flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="fill-current w-5 h-5"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
									</svg>
									<span className="capitalize">cart</span>
								</BaseLink>
							</li>
							<li className="px-2">
								<BaseLink to="/login" extraClasses="flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="fill-current w-5 h-5"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
									</svg>
									<span className="capitalize">login</span>
								</BaseLink>
							</li>
						</ul>
					</div>
				</Container>
			</div>
		</nav>
	)
}
