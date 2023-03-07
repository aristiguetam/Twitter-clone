import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Tweet } from '../interface'
import React from "react";
import TweetBox from "./TweetBox"
import TweetComponent from "../components/Tweets"

interface Props {
  tweets: Tweet[]
}
const Feed = ({ tweets }: Props) => {
  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="w-8 h-8  mr-5 mt-5 cursor-pointer text-twitter transition duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {
          tweets.map((tweet) => (
            <TweetComponent key={tweet._id} tweet={tweet} />
          ))
        }

      </div>

    </div>
  );
};

export default Feed;
