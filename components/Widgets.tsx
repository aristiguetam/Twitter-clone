import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed} from 'react-twitter-embed';

const Widgets = () => {
  return <div className="px-2 mt-2 col-span-2 hidden lg:inline">
    {/* Search */}
    <div className="flex items-center spacex-2 rounded-full bg-gray-100 p-3">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
      <input type="text" placeholder="Search Twitter" className="flex-1 bg-transparent outline-none"/>
    </div>

 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 1000}}
/>
  </div>;
};

export default Widgets;
