import React, { FunctionComponent } from "react"
import Product from "../types/product"
import BaseLink from "./BaseLink"
import Rating from "./Rating"

type ProductProps = {
	product: Product
}

const Product: FunctionComponent<ProductProps> = ({ product }) => {
	return (
		<div className="my-3 p-3 rounded border-1 border-gray-400 border-solid text-gray-600">
			<BaseLink
				to={`/product/${product.id}`}
				extraClasses="hover:(underline underline-solid)"
			>
				<img src={product.image} alt={product.name} />
			</BaseLink>

			<BaseLink
				to={`/product/${product.id}`}
				extraClasses="hover:(underline underline-solid)"
			>
				<div className="text-bold ">{product.name}</div>
			</BaseLink>
			<div>
				<div className="my-3">
					<Rating
						color="text-yellow-200"
						rating={product.rating}
						text={`from ${product.numReviews}`}
					/>
				</div>
			</div>
			<div className="font-medium text-lg">{product.price}</div>
		</div>
	)
}

export default Product
