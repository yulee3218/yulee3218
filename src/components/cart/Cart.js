import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
  const location = useLocation();
  const params = {
      product: location.state.product,
      cart: location.state.cart
  }
  useEffect(() => {
    console.log('넘어온 값', params);
  });

  return (
    <Container>
      <ProductWrap>
        
      </ProductWrap>
      <CartWrap>

      </CartWrap>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 1080px;
  margin: 5% auto;
`

const ProductWrap = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid red;
`

const CartWrap = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 50px;
  border: 1px solid red;
`