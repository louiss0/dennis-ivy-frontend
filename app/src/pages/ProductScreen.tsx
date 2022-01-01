import React from "react"
import { Link, useParams } from "react-router-dom"
import products from "../assets/products"
import Rating from "../components/Rating"
import { Row } from "../components/Row"

function ProductScreen() {
	const { id } = useParams()

	const product = products.find(
		product => product.id === parseInt(id as string)
	)

	return (
		<div>
			<Link to="/" className="bg-light-100 my-3">
				Go Back
			</Link>
			<Row extraClasses="gap-4">
				<div className="md:col-span-6">
					<img
						className="object-cover w-full"
						src={product?.image}
						alt={product?.name}
					></img>
				</div>

				<div className="md:col-span-3">
					<ul className="divide-y-2 divide-gray-300">
						<li>
							<div className="text-bold text-xl">{product?.name}</div>
						</li>
						<li>
							<Rating
								rating={product?.rating as number}
								color="text-yellow-500"
								text={`${product?.numReviews} reviews`}
							/>
						</li>
						<li> Price: ${product?.price} </li>
						<li> Description: {product?.description} </li>
					</ul>
				</div>
				<div className="md:col-span-3">
					<ul>
						<li className="border-solid border-gray-300">
							<Row>
								<div className="md:col-span-6">Price:</div>
								<div className="md:col-span-6">${product?.price}</div>
							</Row>
						</li>
						<li className="border-solid border-gray-300">
							<Row>
								<div className="md:col-span-6">Status:</div>
								<div className="md:col-span-6">
									{product?.countInStock ? "In Stock" : "Out of Stock"}
								</div>
							</Row>
						</li>
						<li className="border-solid border-gray-300">
							<button className="bg-black" type="button">
								Add to Cart
							</button>
						</li>
					</ul>
				</div>
			</Row>
		</div>
	)
}

export default ProductScreen
