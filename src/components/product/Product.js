import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';

const Product = () => {
  const history = useHistory();
  const product = {
    product: [
      {
        "productCode": "443950",
        "productName": "IDLF 3D니트플레어원피스(긴팔)",
        "price": "89900",
        "description": "입체적이고 아름다운 실루엣의 3D 니트 플레어 원피스. · 시대와 세대를 넘어 사랑 받고 있는 프렌치 시크의 대명사 '이네스 드 라 프레상쥬'와 스페셜 콜라보레이션.· 플레어 실루엣."
      },
      {
        "productCode": "442528",
        "productName": "IDLF레이온셔츠원피스(긴팔)",
        "price": "59900",
        "description": "우아한 인상을 주는 레이온 셔츠 원피스. · 시대와 세대를 넘어 사랑 받고 있는 프렌치 시크의 대명사 '이네스 드 라 프레상쥬'와 스페셜 콜라보레이션. · 레이온 크레이프 소재 사용. · 풀 오픈하면 가벼운 롱 재킷으로 활용할 수 있습니다."
      },
      {
        "productCode": "445626",
        "productName": "IDLF레이온프린트셔츠원피스(긴팔)A",
        "price": "59900",
        "description": "꽃 무늬 디자인으로 우아한 분위기 연출이 가능한 레이온 프린트 셔츠 원피스. · 시대와 세대를 넘어 사랑 받고 있는 프렌치 시크의 대명사 '이네스 드 라 프레상쥬'와 스페셜 콜라보레이션."
      },
      {
        "productCode": "445627",
        "productName": "IDLF레이온프린트원피스(긴팔)B",
        "price": "59900",
        "description": "꽃 무늬 디자인으로 우아한 분위기 연출이 가능한 레이온 프린트 원피스. · 시대와 세대를 넘어 사랑 받고 있는 프렌치 시크의 대명사 '이네스 드 라 프레상쥬'와 스페셜 콜라보레이션."
      },
      {
        "productCode": "442532",
        "productName": "IDLF플란넬플레어원피스(긴팔)",
        "price": "59900",
        "description": "플란넬 소재로 부드러운 감촉을 즐길 수 있는 플란넬 플레어 원피스. · 시대와 세대를 넘어 사랑 받고 있는 프렌치 시크의 대명사 '이네스 드 라 프레상쥬'와 스페셜 콜라보레이션. · 걸으면 예쁘게 흔들리는 옷자락이 매력."
      }
    ]
  };

  const [cart, setCart] = useState({
    product: [], // 상품코드
    quantity: 0, // 장바구니에 담긴 수량
    totalAmount: 0, // 총 금액
  });

  
  useEffect(() => {
    console.log('장바구니 값', cart);
    history.push({
      pathname: '/cart',
      state: {
        product: product.product,
        cart : {...cart},
      }
    });
  }, [cart])

  const addToCart = (selectedProduct) => {
    let result;
    console.log('상품코드', selectedProduct.target.id);
    const selectedProductInfo = product.product.find(item => item.productCode === selectedProduct.target.id);
    
    if (articleProduct(selectedProduct.target.id)) {
      result = window.confirm('장바구니에 이미 담겨진 상품입니다. 상품을 추가하시겠습니까?');
      if (!result) {
        return
      }
    } 

    setCart({
      product: [...cart.product, selectedProduct.target.id],
      quantity: cart.quantity + 1,
      totalAmount: cart.totalAmount + Number(selectedProductInfo?.price)
    });

    console.log('선택 상품', selectedProductInfo);
    console.log('장바구니 값', cart);
  }

  const articleProduct = (productCode) => {
    console.log('1111',cart);
    const temp = {...cart};
    return temp.product.some(item => item === productCode);
  }

  const makeComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Container>
      <ProductContainer>
        {
          product.product.map((item, index) => {
            return (
              <ProductList key={index}>
                <ProductImg className="productImg" alt={``} src={`images/image_${index}.jpeg`}/>
                <ProductInfo>
                  <ProductInfoList>{item.productName}</ProductInfoList>
                  <ProductInfoList>{makeComma(item.price)}원</ProductInfoList>
                  <CartIcon onClick={addToCart} id={item.productCode}><FontAwesomeIcon icon={faCartPlus}/></CartIcon>
                </ProductInfo>
              </ProductList>
            )
          })
        }
      </ProductContainer>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 1080px;
  margin: 5% auto;
`
const ProductContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`
const ProductList = styled.li`
  padding-left: 50px;
`

const ProductImg = styled.img`
  width: 250px;
  height: 300px;
`
const ProductInfo = styled.ul`
  padding: 15px 0;
  font-weight: 600;
  list-style: none;
  text-align: center;
`

const ProductInfoList = styled.li`
  margin-bottom: 5px;
`

const CartIcon = styled.button`
  width: 100%;
  color: #263343;
  font-size: 20px;
  background-color: white;
  /* border: none; */
`