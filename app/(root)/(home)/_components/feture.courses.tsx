'use client'

import CourseCard from '@/components/cards/course.card'
// import CourseCard from '@/components/cards/course.card'
// import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { courses } from '@/constants'
import Autoplay from 'embla-carousel-autoplay'

// import useTranslate from '@/hooks/use-translate'
// import { cn } from '@/lib/utils'
// import { useState } from 'react'

function FeaturedCourses() {
	// const [filter, setFilter] = useState('all')
	// const t = useTranslate()

	return (
		<div className='mx-auto mt-10 max-w-6xl py-12'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
			</div>
			
			<Carousel
				opts={{ align: 'start', loop: true }}
									className='mx-auto w-full max-w-6xl'
									plugins={[Autoplay({ delay: 2000 })]}
			>
				<CarouselContent className='w-full '>
					{courses.map(course => (
						<CarouselItem
							key={course.title}
							// className='md:basis-1/2 lg:basis-1/3'
						>
							<CourseCard {...course} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default FeaturedCourses