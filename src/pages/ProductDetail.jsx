import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
import {Table} from 'react-bootstrap';
import {useLocation} from "react-router-dom"
import axios from 'axios';
import {addProduct} from "../redux/cartRedux"
import {useDispatch} from 'react-redux';
import {publicRequest} from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
    padding-top: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: fill;  
    ${mobile({ height: "40vh"})}
`;

const IcoLogo = styled.img`
    width: 100px;
    height: 100px;
    image-align: center;
    object-fit: fill;  
    ${mobile({ height: "40vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;

const Title = styled.h2`
    font-weight: 1800;
    text-align: center;
`;

const Title2 = styled.h4`
  font-weight: 1400;
  text-align: center;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`;

const LinkButton = styled.button`
  background: cover;
  background-color: #fcebcf;
  color: #404040;
  border: 2px, #f6bd60;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:hover {
    background-color: #f6bd60;
    transform: scale(1.1);
  }
`;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

const Button = styled.button`
  padding: 6px;
  margin-bottom: 10px;
  border: 2px, #f6bd60;
  border-radius: 5px;
  background-color: #fcebcf;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:hover {
    background-color: #f6bd60;
    transform: scale(1.1);
  }
`;

const ProductDetail = () =>  {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(await res.data);
        //setLoading(false);
      } catch {console.error();}
    };
    getProducts();
  }, []);
  
  //if (loading) return <h1>..LOADING..</h1>;
  if (product === undefined) return <h1>..LOADING..</h1>;

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>&emsp;&emsp;&emsp;{product.desc}</Desc>
          <Price>Price {product.price} Bath</Price>&emsp;
          <Price>Shipping {product.shipping} Bath</Price>&emsp;
          <Button onClick={() => window.open(product.thisLink)} target="_blank">
            Go to Shop
          </Button>
          <Title2>Other shop compare price</Title2>
          <Table striped bordered hover>
            <thead
              style={{
                textAlign: "center",
                backgroundColor: "#404040",
                color: "#f6bd60",
              }}
            >
              <tr>
                <th>Product Preview</th>
                <th>Price(Baht)</th>
                <th>Shipping(Baht)</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>
                  <IcoLogo src={product.shopImg[0]} alt="" />
                </td>
                <td>{product.otherPrice[0][0]}</td>
                <td>{product.otherPrice[0][1]}</td>
                <td>
                  <LinkButton
                    onClick={() => window.open(product.shopLink[0])}
                    target="_blank"
                  >
                    Click to Shop
                  </LinkButton>
                </td>
              </tr>
              <tr>
                <td>
                  <IcoLogo src={product.shopImg[1]} alt="" />
                </td>
                <td>{product.otherPrice[1][0]}</td>
                <td>{product.otherPrice[1][1]}</td>
                <td>
                  <LinkButton
                    onClick={() => window.open(product.shopLink[1])}
                    target="_blank"
                  >
                    Click to Shop
                  </LinkButton>
                </td>
              </tr>
              <tr>
                <td>
                  <IcoLogo src={product.shopImg[2]} alt="" />
                </td>
                <td>{product.otherPrice[2][0]}</td>
                <td>{product.otherPrice[2][1]}</td>
                <td>
                  <LinkButton
                    onClick={() => window.open(product.shopLink[2])}
                    target="_blank"
                  >
                    Click to Shop
                  </LinkButton>
                </td>
              </tr>
              <tr>
                <td>
                  <IcoLogo src={product.shopImg[3]} alt="" />
                </td>
                <td>{product.otherPrice[3][0]}</td>
                <td>{product.otherPrice[3][1]}</td>
                <td>
                  <LinkButton
                    onClick={() => window.open(product.shopLink[3])}
                    target="_blank"
                  >
                    Click to Shop
                  </LinkButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </InfoContainer>
      </Wrapper>
      <Footer />
      {/*<Newsletter />*/}
    </Container>
  );
}

export default ProductDetail
