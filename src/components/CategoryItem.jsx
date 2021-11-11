import styled  from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin-top: 13px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: none;
  height: 50hv;
  position: relative;
  ${mobile({ display: "none" })}
`;

const Image = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 10px;
    object-fit: cover;
    ${mobile({ height: "20vh"})}
`

const Info = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #f6bd60;
  -webkit-text-stroke: 0.5px black;
  margin-bottom: 8px;
  font-size: 40px;
  font-weight: 1000;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 9px;
  background-color: white;
  color: #404040;
  cursor: pointer;
  font-weight: 1000;
  &:link,
  &:visited {
    color: white;
    text-decoration: none;
  }
  &:hover {
    background-color: #fcebcf;
    text-decoration: none;
    transform: scale(1.1);
  }
  &:active {
    color: white;
    text-decoration: none;
  }
`;

function CategoryItem ({item}) {
    return (
        <Container>
            <Link to={`/productlist/${item.cate}`} style={{ textDecoration: 'none' }}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
