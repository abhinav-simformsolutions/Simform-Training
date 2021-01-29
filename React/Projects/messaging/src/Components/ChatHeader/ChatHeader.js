import React from "react";
import "./Chatheader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import GroupIcon from "@material-ui/icons/Group";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/Help";

function ChatHeader({channelId,channelName}) {
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <h3>
          <span className="chatheader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatheader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <GroupIcon />
        <div className="chaheader__search">
            <input type="text" placeholder="Search" />
            <SearchIcon/>
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
