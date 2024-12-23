import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
// import FillLoading from '@/components/shared/loader'

function Layout({ children }: ChildProps) {
	return (
		<div>
			{/* <FillLoading/> */}
			<Navbar />
			<main>{children}</main>
			<Footer/>
		</div>
	)
}

export default Layout
