import React from "react";

const UserProfilePic = ({ image }) => {
  return (
    <img
      alt="profile-pic"
      className="ui avatar circular image profile-pic"
      src={image}
    />
  );
};

export default UserProfilePic;
