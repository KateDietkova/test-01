export const splitAmount = (followers) => {
  const amount = followers.toString().split("");
  for (let i = 1; i <= amount.length-3; i++) {
    if (i % 3 === 0) {
      amount[i] = "," + amount[i];
    }
  }
  const followersAmount = amount.join("");
  return followersAmount;
};
 