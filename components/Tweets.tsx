import { ChatBubbleLeftRightIcon, HeartIcon, ArrowPathRoundedSquareIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Tweet } from '../interface'
import TimeAgo from 'react-timeago'

interface Props {
    tweet: Tweet
}

const Tweets = ({ tweet }: Props) => {
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
                    <p>5</p>
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

        </div>
    )
}

export default Tweets
