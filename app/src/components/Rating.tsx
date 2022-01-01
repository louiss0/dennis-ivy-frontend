import React, { FunctionComponent } from "react"
import NumbersFromOneToNine from "../types/NumbersFromOneToNine"

type YellowText = `text-yellow-${NumbersFromOneToNine}00`

const Rating: FunctionComponent<{
	rating: number
	text: string
	color: YellowText
}> = ({ color, rating, text = "" }) => {
	const filledStar = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`w-6 h-6 fill-current ${color}`}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
		</svg>
	)

	const halfStar = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`w-6 h-6 fill-current ${color}`}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z" />
		</svg>
	)
	const unfilledStar = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`w-6 h-6 fill-current ${color}`}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
		</svg>
	)

	function generateStarsBasedOnPoint5IntervalNumber(number: number) {
		const stars = []

		let starToBeIPutInStars = unfilledStar

		for (let index = 5; index; index--) {
			if (index <= number) {
				starToBeIPutInStars = filledStar
			}

			if (index - number === 0.5) {
				starToBeIPutInStars = halfStar
			}

			stars.unshift(starToBeIPutInStars)
		}

		return stars
	}

	return (
		<div className="flex gap-1">
			<>{generateStarsBasedOnPoint5IntervalNumber(rating).map(star => star)}</>
			<span>{text}</span>
		</div>
	)
}

export default Rating
