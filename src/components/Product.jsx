import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {publicRequest} from "../requestMethods";
import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 180, 34, 0.2);
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #f6bd60;
  position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    border-radius: 5%;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const TitlePra = styled.h5`
  font-size: 20px;
  color: #404040;
  text-align: bottom;
  padding-top: 8px;
  padding-left: 8px;
`;

const Info2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: bottom;
  justify-content: bottom;
  cursor: pointer;
`;

const Price = styled.span``;

const Product = ({ item }) => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const getProducts = async () => {
          try{
          const res = await publicRequest.get("/products/find/")
          setProduct(await res.data);
        }catch{}
        };
        getProducts()
      }, [id]);

    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info2>
          <TitlePra>{item.price} Baht</TitlePra>
          {/* <TitlePra>{item.shipping} Baht</TitlePra> */}
        </Info2>
        <Info>
          {/* <Icon>
                    <ShoppingCartOutlined />
                </Icon> */}
          <Icon>
            <Link to={`/productdetail/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          {/* <Icon>
                    <FavoriteBorderOutlined />
                </Icon> */}
        </Info>
      </Container>
    );
};

export default Product;