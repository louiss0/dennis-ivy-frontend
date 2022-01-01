import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "./components/base/Container"
import ErrorBoundary from "./components/ErrorBoundary"
import Footer from "./components/Footer"
import generateLazyLoadedCompnentWrappedWithSuspense from "./components/generateLazyLoadedCompnentWrappedWithSuspense"
import Header from "./components/Header"
import { AuthProvider } from "./contexts/AuthContext"

// Always use webpack chunk name as shown here \/

const [home, productScreen] = [
	generateLazyLoadedCompnentWrappedWithSuspense(
		import(/* webpackChunkName: "home"  */ "./pages/Home")
	),
	generateLazyLoadedCompnentWrappedWithSuspense(
		import(/* webpackChunkName: "product-screen"  */ "./pages/ProductScreen")
	),
]

export default function App() {
	return (
		<ErrorBoundary>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<main className="min-h-80vh">
						<Container>
							<div className="py-3">
								<Routes>
									<Route path="/" element={home} />
									<Route path="/product/:id" element={productScreen} />
								</Routes>
							</div>
						</Container>
					</main>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</ErrorBoundary>
	)
}
