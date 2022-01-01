import React, { FunctionComponent } from "react"

const Container: FunctionComponent = ({ children }) => {
	return <div className="mx-auto w-11/12 max-w-screen-lg">{children}</div>
}

export default Container
