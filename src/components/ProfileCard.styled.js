import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px 20px 36px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    transform: translateY(-40%);
  }
`;
export const LogoStyled = styled.img`
  position: absolute;
`;

export const TweetImage = styled.img`
  display: block;
  margin: 0 auto 88px;
`;

export const AvatarWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border: 8px solid #ebd8ff;
  background: #5736a3;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -1.19582px 3.39163px #ae7be3,
    inset 0px 1.09163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  object-position: center;
  width: 80px;
  height: 80px;
`;

export const AmountTweets = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
  margin-bottom: 15px;
`;

export const AmountFollowers = styled(AmountTweets)`
  margin-bottom: 25px;
`;

export const BtnStyled = styled.button`
  display: block;
  border: none;
  background: ${(props) =>
    props.following === "true" ? "#5CD3A8" : " #ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3px;
  padding: 14px 56px;
  cursor: pointer;
  margin: 0 auto;
  width: fit-content;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;

  text-transform: uppercase;

  color: "#373737";
`;
