// import { Loader2 } from 'lucide-react'
// import { Skeleton } from '../ui/skeleton'

// const FillLoading = () => {
// 	setTimeout(() => {
//    console.log('Hello World')
// 	}, 2000)
// 	return (
// 		<div className='absolute inset-0 z-50 flex size-full items-center justify-center opacity-20 '>
// 			{/* <Loader2 className='animate-spin' /> */}
// 			<h1>Yakka sarroy</h1>
// 		</div>
// 	)
// }

// export default FillLoading



// import { useEffect, useRef } from 'react';

// const Loader = () => {
//   const loaderRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Hide the loader after 2 seconds
//     const timeout = setTimeout(() => {
//       if (loaderRef.current) {
//         loaderRef.current.style.display = 'none'; // Use style.display to hide the loader
//       }
//     }, 2000);

//     // Cleanup timeout on component unmount
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div ref={loaderRef} className="flex flex-col items-center justify-center h-screen">
//       <div className="text-center">
//         {/* Uncomment the image if needed */}
//         {/* <img src="https://praktikum.sammi.ac/logo.svg" alt="Logo" /> */}
//         <h1 className="text-2xl font-bold">Pulatov School</h1>
//         <p className="mt-2">Kelajak uchun invitsisiya qiling!</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;


