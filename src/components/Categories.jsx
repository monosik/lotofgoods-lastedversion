import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  background-color: #404040;
  height: 20vh;
  margin: auto;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Wrapper = styled.div`
  clear: both;
  margin: auto;
`;

function Categories() {
    return (
        <Wrapper>
            <Container>
                {categories.map(item=> (
                    <CategoryItem item={item}/>
                ))}
            </Container> 
        </Wrapper>
    )
}

export default Categories
