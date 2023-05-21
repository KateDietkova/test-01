import { useState } from "react";
import {
  ProfileWrapper,
  LogoStyled,
  TweetImage,
  // AvatarStyled,
  AmountTweets,
  AmountFollowers,
  BtnStyled,
  AvatarWrapper,
  AvatarImg,
} from "./ProfileCard.styled";
import logo from "../assets/logo.png";
import tweet from "../assets/tweets-image.png";
// import avatar from "../assets/avatar.png";
import avatar from "../assets/avatar-boy.png";
import { splitAmount } from "../js/splitAmount";

export const ProfileCard = ({
  id: KEY,
  followers,
  tweets,
  avatar: userAvatar,
}) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(KEY)) || null
  );
  console.log("isFollowing", isFollowing);

  const toggleFollow = () => {
    if (!isFollowing) {
      localStorage.setItem(KEY, JSON.stringify(!isFollowing));
      setIsFollowing(!isFollowing);
      return;
    }
    localStorage.removeItem(KEY);
    setIsFollowing(!isFollowing);
  };

  return (
    <ProfileWrapper>
      <LogoStyled src={logo} alt="logo" />

      <TweetImage src={tweet} alt="tweet" />

      <AvatarWrapper>
        <AvatarImg src={userAvatar ? userAvatar : avatar} alt="avatar" />
      </AvatarWrapper>

      <AmountTweets>{tweets} tweets</AmountTweets>
      <AmountFollowers>
        {splitAmount(isFollowing ? followers + 1 : followers)} folowers
      </AmountFollowers>

      <BtnStyled
        type="button"
        onClick={toggleFollow}
        following={isFollowing ? "true" : "false"}
      >
        {isFollowing ? "Following" : "Follow"}
      </BtnStyled>
    </ProfileWrapper>
  );
};
