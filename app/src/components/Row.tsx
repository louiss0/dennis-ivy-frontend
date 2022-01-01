import React, { FunctionComponent } from "react"

export const Row: FunctionComponent<{ extraClasses?: string }> = ({
	children,
	extraClasses,
}) => {
	return <div className={`grid grid-cols-12 ${extraClasses}`}>{children}</div>
}
