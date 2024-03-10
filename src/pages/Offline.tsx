import styled from "styled-components";

const Wrapper = styled.ul`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4px;
`;
const List = styled.li`
  padding: 8px;
`;
const Item = styled.div`
  border: 1px solid #eeeeee;
`;

const Image = styled.div<{ height: string }>`
  width: 100%;
  padding-top: ${(props) => props.height};
  background-color: rgba(222, 222, 222, 0.2);
  margin-bottom: 8px;
  img {
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

const Tag = styled.div`
  padding: 0 8px;
  span {
    font-size: 80%;
    background-color: #eeeeee;
    padding: 4px 8px;
    border-radius: 16px;
  }
`;

const Info = styled.div`
  width: 80%;
  margin: 16px auto 8px;
  display: flex;
  > div {
    padding: 8px;
    flex: 1;
    text-align: center;
    &:first-child {
      border-right: 1px solid #eeeeee;
    }
    img {
      margin-top: 8px;
      width: 24px;
      height: 24px;
      background-color: red;
    }
  }
`;

export default function Offline() {
  return (
    <Wrapper>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
      <List>
        <Item>
          <Image height="60%">
            <img src="" />
          </Image>
          <Text>
            <h3>산머루농원</h3>
            <p>📍 경기 파주시 적성면 객현리 67-1</p>
            <p>📱 031-958-4558</p>
            <p>🔗 https://www.sanmeoru.com</p>
          </Text>
          <Tag>
            <span>#과실주</span>
          </Tag>

          <Info>
            <div>
              <p>상시방문</p>
              <img />
            </div>
            <div>
              <p>예약방문</p>
            </div>
          </Info>
        </Item>
      </List>
    </Wrapper>
  );
}
