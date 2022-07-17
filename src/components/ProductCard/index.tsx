import { useState } from 'react';
import { IProduct } from '../../interfaces/product';
import {
  Container,
  Header,
  Body,
  Button
} from './styles';

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <Container>
      <Header className="headerCard">
        <img
          onClick={() => setIsLiked(!isLiked)}
          src={
            isLiked ?
              "/images/heart-orange.svg" :
              "/images/heart-outlined.svg"
          }
          className='heartIcon'
        />
        <span>
          <img src="/images/star-fill.svg" className='starIcon' />
          <img src="/images/star-fill.svg" className='starIcon' />
          <img src="/images/star-fill.svg" className='starIcon' />
          <img src="/images/star-fill.svg" className='starIcon' />
          <img src="/images/star-fill.svg" className='starIcon' />
          {" "}
          {product.ratio}
        </span>
      </Header>
      <img className='productImage' src={product.image} alt="Imagem de produto" />
      <Body>
        <h2 className='manufacturerName'>{product.manufacturer}</h2>
        <h1 className='productName'>{product.title}</h1>
        <p className='installmentAmount'>R${product.installmentAmount}</p>
        <p className='cashValue'>R${product.cashValue}</p>
        <p className='cashDescription'>À VISTA</p>
        <div className='productStatus'>
          {
            product.freeShipping && (
              <>
                <img src="/images/truck.svg" alt="caminhão" />
                FRETE GRÁTIS
              </>
            )
          }
          {
            product.openBox && (
              <>
                <img src="/images/open-box.svg" alt="open box" />
                OPEN BOX
              </>
            )
          }
        </div>
      </Body>
      <Button className='buttonProduct'>
        <img src="/images/cart-white.svg" alt="shop cart" />
        COMPRAR
      </Button>
    </Container>
  )
}