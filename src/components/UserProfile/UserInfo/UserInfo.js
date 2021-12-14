import React, { useContext } from "react";
import "../../../assets/styles/UserInfo.scss";

import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { BsShareFill, BsFillPencilFill } from "react-icons/bs";

const UserInfo = () => {

    const authCtx = useContext(AuthContext);

    const userData = authCtx.userData;
    console.log(userData);
  return (
    <>
      <div className="userInfoContainer">
        <div className="userInfoImages">
          <div className="userInfoBg"></div>
          <div className="userInfoImgContainer">
            <img src={userImg} alt="" className="userInfoImg" />
          </div>
        </div>
        <div className="userInfoDetails">
          <div className="userInfoName">Bhagya Shree</div>
          <div className="userInfoName">{userData.jobTitle}</div>
          <div className="userInfoName">{userData.company}</div>
        </div>
        <div className="shareEditContainer">
          <button className="shareEditBtn">
            <BsShareFill />
            Share
          </button>
          <button className="shareEditBtn">
            <BsFillPencilFill />
            Edit Profile
          </button>
        </div>
        <div className="detailsNotesContainer">
          <ul className="detailsNotesLists">
            <NavLink
              to="/"
              className="detailsNotesList"
              activeclassname="active"
            >
              <li>Details</li>
            </NavLink>
            <NavLink
              to="/notes"
              className="detailsNotesList"
              activeclassname="active"
            >
              <li>Notes</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfo;