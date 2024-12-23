import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src='/oltin.png' alt='logo' width={70} height={60} />
			{/* <h1 className='font-space-grotesk text-4xl font-bold'>𝒪ℒ𝒯ℐ𝒩 𝓈𝒶𝓇𝑜𝓎</h1> */}
		</Link>
	)
}

export default Logo
