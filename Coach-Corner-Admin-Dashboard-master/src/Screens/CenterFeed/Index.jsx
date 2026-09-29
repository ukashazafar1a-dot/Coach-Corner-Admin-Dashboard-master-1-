import CommunityCardSection from "./CenterFeedComponents/CommunityCardSection";
import PopularRightNow from "./CenterFeedComponents/PopularRightNow";
import RecientAdded from "./CenterFeedComponents/ReceientAdded";
import { styled } from "@mui/material";
const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  background: "#1D203E",
  paddingTop:"30px"
});
const CenterFeed = () => {
  return (
    <Wrapper>
      <div>
      <CommunityCardSection />
      <PopularRightNow />
      <RecientAdded />
      </div>
    </Wrapper>
  );
};

export default CenterFeed;
