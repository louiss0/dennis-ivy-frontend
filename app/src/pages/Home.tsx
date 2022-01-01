import React, { FunctionComponent } from "react"
import { Row } from "../components/Row"

import products from "../assets/products"
import Product from "../components/Product"

const Home: FunctionComponent = () => {
	return (
		<div>
			<h1 className="text-bold text-xl">Latest Products</h1>
			<ul>
				<Row extraClasses="gap-6">
					{products.map(product => (
						<div
							key={product.name}
							className="sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
						>
							<Product product={product} />
						</div>
					))}
				</Row>
			</ul>
		</div>
	)
}

export default Home
