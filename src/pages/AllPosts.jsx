import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import animationData from '../assets/Animation - 1711880755019.json'
import Lottie from 'lottie-react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    service.getAllPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-12 bg-main'>
        <Lottie animationData={animationData} className='mb-8' style={{height: '500px'}}/>
        <div className='flex justify-center items-center'>
            <h1 className='text-zinc-100 text-3xl font-bold'>All Posts</h1>
        </div>
        <Container >
            <div className='flex flex-col'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
        </div>
  )
}

export default AllPosts