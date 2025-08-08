import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
import { personalInfo } from "../data/personalInfo";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>{personalInfo.website}</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
