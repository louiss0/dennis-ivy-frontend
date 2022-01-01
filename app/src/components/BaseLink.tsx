import React, { FunctionComponent } from "react"
import { Link, LinkProps } from "react-router-dom"

type BaseLinkProps = {
	extraClasses?: string
} & Omit<LinkProps, "className">

const BaseLink: FunctionComponent<BaseLinkProps> = ({
	children,
	to,
	replace,
	state,
	extraClasses = "",
}) => {
	return (
		<Link
			to={to}
			replace={replace}
			state={state}
			className={`no-underline text-current ${extraClasses}`}
		>
			{children}
		</Link>
	)
}

export default BaseLink
