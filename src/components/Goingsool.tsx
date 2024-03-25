import { goingSoolSelected, IBreweryData } from "@/api/atom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

const List = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4px;
  li {
    padding: 8px;
  }
`;

const Image = styled.div<{ name: string; height: string }>`
  width: 100%;

  border: 1px solid #eeeeee;
  background-color: rgba(0, 0, 0, 0.2);
  > div {
    padding-top: ${(props) => props.height};
    background-image: url(http://localhost:5173/public/offline/${(props) =>
      props.name}.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Text = styled.div`
padding: 8px;
h3 {
  font-weight: bold;
  font-size: 120%;
}
p{
  margin: 8px; 0;
}
`;

export default function Goingsool(props: { breweryList: IBreweryData[] }) {
  const { breweryList } = props;
  const nav = useNavigate();
  const [selected, setSelected] = useRecoilState(goingSoolSelected);
  const onClick = (id: number) => {
    setSelected(id);
    nav(`${id}`);
  };
  return (
    <List>
      {breweryList.map((brewer, index) => (
        <li key={index} onClick={() => onClick(brewer.id)}>
          <Image height="60%" name={brewer.name}>
            <div></div>
          </Image>

          <Text>
            <h3>{brewer.name}</h3>
            <p>📍 {brewer.addr}</p>
            <p>📱 {brewer.phone}</p>
            <a href={brewer.homepage} target="_blank">
              🔗 홈페이지이동
            </a>
          </Text>
        </li>
      ))}
    </List>
  );
}
