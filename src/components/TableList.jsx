import styled from "styled-components";
import { useState, useEffect } from "react";
import { mobile } from "../responsive";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const LinkButton = styled.button`
  background: cover;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #008c68;
    transform: scale(1.1);
  }
`;

const TableList = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});

    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + id);
          //const res = await fetch("https://lotofgoods.herokuapp.com/api/products/" + id);
          //const data = await res.data;
          setProduct(await res.data);
        } catch {
          console.error();
        }
      };
      getProducts();
    }, []);

    return (
            <Table striped bordered hover>
                <thead
                style={{
                    textAlign: "center",
                    backgroundColor: "teal",
                    color: "white",
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
                    <td>{/* <IcoLogo src={product.shopImg[0]} alt="bag icon" /> */}</td>
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
                    <td>{/* <IcoLogo src={product.shopImg[1]} alt="" /> */}</td>
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
                    <td>{/* <IcoLogo src={product.shopImg[2]} alt="" /> */}</td>
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
                    <td>{/* <IcoLogo src={product.shopImg[3]} alt="" /> */}</td>
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
    );
};

export default TableList;
