import { ProfileCard } from "./ProfileCard";
import { useEffect, useState } from "react";
import axios from "axios";

import { ProfileListStyled } from "./ProfilesList.styled";

export const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://64663cf3ba7110b6639b5414.mockapi.io/api/users"
      );

      setProfiles(data);
    })();
  }, []);

  if (profiles.length === 0) return;

  return (
    <ProfileListStyled>
      {profiles.map(({ id, followers, tweets, avatar }) => (
        <ProfileCard
          key={id}
          id={id}
          followers={followers}
          tweets={tweets}
          avatar={avatar}
        />
      ))}
    </ProfileListStyled>
  );
};
