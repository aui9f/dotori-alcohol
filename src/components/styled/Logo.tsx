import styled from "styled-components";
import dotoriIcon from "../../assets/images/dotori.png";
const Icon = styled.div<{ width: string; height: string }>`
  min-height: 16px;
  min-width: 16px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-size: 100%;
  background-image: url(${dotoriIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
`;

interface iProps {
  width: string;
  height: string;
}
export default function Logo({ width, height }: iProps) {
  return (
    <div>
      <Icon width={width} height={height} />
    </div>
  );
}
