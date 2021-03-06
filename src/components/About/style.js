import styled from "styled-components";

export const DivAboutMe = styled.div`
  width: 100%;
  height: auto;
  background-color: #000000;
  opacity: 1;
  border: 1px solid #fff;
  margin-top: 50px;

  .aboutMe {
    color: #ffffff;
    text-align: center;
  }
`;

export const MainDiv = styled.div`
  border-left: 1px solid #ffffff;
  margin-left: 40px;
  padding-left: 20px;
`;
export const MainDivLine = styled.p`
  padding-left: 100px;
  margin: 5px;
  cursor: text;
  color: #e9ecef;
  font-size: 1.1em;
  opacity: 0.8;

  a {
    text-decoration: none;
  }

  .numbers {
    margin-right: 20px;
    color: #6c757d;
  }

  .blue {
    color: #1d4e89;
  }
  .cyan {
    color: #0096c7;
    margin-left: 50px;
  }
  .lightBlue {
    color: #9ed8db;
  }
  .green {
    color: #2b9348;
  }
  .yellow {
    color: #ffbd00;
  }
  .yellowIndentedThrice {
    color: #ffbd00;
    margin-left: 75px;
  }
  .yellowIndentedTwice {
    color: #ffbd00;
    margin-left: 50px;
  }
  .yellowIndented {
    color: #ffbd00;
    margin-left: 25px;
  }
  .red {
    color: #e76f51;
  }
  .purple {
    color: #6247aa;
  }
  .purpleIndented {
    color: #6247aa;
    margin-left: 25px;
  }
  .purpleIndentedTwice {
    color: #6247aa;
    margin-left: 50px;
  }
  .purpleIndentedThrice {
    color: #6247aa;
    margin-left: 75px;
  }
  .comments {
    color: #7d8597;
  }

  &:hover {
    background-color: #1e1e1f;
  }
`;

export const BlinkingCursor = styled.span`
  color: #ffffff;
  animation: blinking;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes blinking {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
