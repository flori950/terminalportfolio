import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { personalInfo } from "../../data/personalInfo";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        {personalInfo.about.greeting} <HighlightSpan>{personalInfo.name}</HighlightSpan>!
      </p>
      <p>
        <HighlightAlt>{personalInfo.about.intro}</HighlightAlt>
      </p>
      {personalInfo.about.description.map((line, index) => (
        <p key={index}>
          {line && line.includes("passionate") ? (
            <>
              {line} <br />
            </>
          ) : line === "" ? (
            <br />
          ) : (
            <>
              {line} <br />
            </>
          )}
        </p>
      ))}
    </AboutWrapper>
  );
};

export default About;
