import { ChatBubbleLeftRightIcon, HeartIcon, ArrowPathRoundedSquareIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Comment, Tweet } from '../interface'
import TimeAgo from 'react-timeago'
import { useEffect, useState } from "react";
import { fetchComments } from '../utils/fetchComments';

interface Props {
    tweet: Tweet
}

const Tweets = ({ tweet }: Props) => {
    const [comments, setComments] = useState<Comment[]>([])

    const refresComments = async () => {
        const comments: Comment[] = await fetchComments(tweet._id)
        setComments(comments)
    }

    useEffect(() => {
        refresComments()

    }, [])


    return (
        <div className='flex flex-col space-x-3  border-y p-5 border-gray-100' >
            <div className='flex space-x-3'>
                <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} />
                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'>{tweet.username}</p>
                        <p className="hidden text-sm text-gray-500 sm:inline">@{tweet.username.replace(/\s+/g, '').toLowerCase()} · </p>
                        <TimeAgo
                            className='text-sm text-gray-500'
                            date={tweet._createdAt}
                        />
                    </div>
                    <p className='pt-1'>{tweet.text}</p>
                    {tweet.image && <img src={tweet.image} alt="" className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm' />}
                </div>
            </div>

            <div className='flex mt-5 justify-between'>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400 '>
                    <ChatBubbleLeftRightIcon className='h-5 w-5' />
                    <p>{comments.length}</p>
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400 '>
                    <ArrowPathRoundedSquareIcon className='h-5 w-5' />
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400 '>
                    <HeartIcon className='h-5 w-5' />
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400 '>
                    <ArrowUpTrayIcon className='h-5 w-5' />
                </div>
            </div>

            {comments?.length > 0 && (
                <div className="mb-2 mt-5  max-h-44 space-y-5 overflow-y-auto border-t border-gray-100 p-5">
                    {
                        comments.map(comment => (
                            <div className="relative flex space-x-2" key={comment._id}>
                                <hr className="absolute left-5 top-10 h-8 border-x border-twitter" />
                                <img src={comment.profileImg} alt="" className="mt-2 w-7 h-7 object-cover rounded-full" />
                                <div>
                                    <div className="flex items-center space-x-1" >
                                        <p className="mr-1 font-bold">{comment.username}</p>
                                        <p className="hidden text-sm text-gray-500 sm:inline">@{comment.username.replace(/\s+/g, '').toLowerCase()} ·</p>
                                        <TimeAgo
                                            className='text-sm text-gray-500'
                                            date={comment._createdAt}
                                        />
                                    </div>
                                    <p> {comment.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default Tweets
