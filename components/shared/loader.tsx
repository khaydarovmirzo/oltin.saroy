// import { Loader2 } from 'lucide-react'
// import { Skeleton } from '../ui/skeleton'

const FillLoading = () => {
	setTimeout(() => {
   console.log('Hello World')
	}, 2000)
	return (
		<div className='absolute inset-0 z-50 flex size-full items-center justify-center opacity-20 '>
			{/* <Loader2 className='animate-spin' /> */}
			<h1>Yakka sarroy</h1>
		</div>
	)
}

export default FillLoading
