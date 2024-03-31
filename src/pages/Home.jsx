import React from 'react'
import {Container} from '../components'
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1711728421748.json'
import ScrollAnimate from '../components/animate/scrollanimate.jsx'

function Home() {

    return (
        <div className='bg-main w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    <Lottie animationData={animationData} />
                    <div>
                        <h1 className='text-3xl pt-[50%] text-white font-bold'><span className='text-zinc-800 font-extrabold'>Mind Merge:</span> One word at a time</h1>
                    </div>
                </div>
                <div className='pt-8'>
                    <h1 className="text-2xl font-bold">At <span className='font-extrabold text-zinc-100'>Mind Merge, </span> we curate captivating content for curious minds. Explore our collection of thought-provoking articles and join the conversation. Welcome to inspiration.</h1>
                </div>
                <div>
                    <ScrollAnimate />
                </div>
            </Container>
        </div>
    )
}


export default Home