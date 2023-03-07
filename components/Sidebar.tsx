import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";
const Sidebar = () => (
  <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
    <img
      className="m-3 w-8 h-8"
      src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
      alt="logo-twitter"
    />
    <SidebarRow Icon={HomeIcon} title="home" />
    <SidebarRow Icon={HashtagIcon} title="Explore" />
    <SidebarRow Icon={BellIcon} title="Notifications" />
    <SidebarRow Icon={EnvelopeIcon} title="Messages" />
    <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
    <SidebarRow Icon={RectangleStackIcon} title="List" />
    <SidebarRow Icon={UserIcon} title="Sign In" />

    <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
  </div>
);

export default Sidebar;
