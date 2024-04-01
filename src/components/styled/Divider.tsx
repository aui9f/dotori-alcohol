import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 26px 0;
  align-items: center;
  > div {
    flex: 1;
    border-top: 1px solid lightgray;
  }
  > p {
    margin: 0 16px;
    font-style: italic;
    font-size: 88%;
    color: lightgray;
  }
`;
interface ITextProps {
  label: string;
}
export default function Divider({ label }: ITextProps) {
  return (
    <Wrapper>
      <div></div>
      {label ? <p>{label}</p> : null}
      <div></div>
    </Wrapper>
  );
}
