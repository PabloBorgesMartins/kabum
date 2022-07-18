import { useState } from 'react';
import {
  Container,
  Header,
  Body,
  Button
} from './styles';

import { IProduct } from '../../interfaces/product';
import { useCart } from '../../hooks/cart';

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {

  const [isLiked, setIsLiked] = useState(false);
  const { addProductToCart } = useCart();

  const handlePurchaseProduct = () => {
    addProductToCart(product);
  };

  return (
    <Container>
      <Header className="headerCard">
        <picture>
          <source
            srcSet={
              isLiked ?
                "/icons/heart-orange.svg" :
                "/icons/heart-outlined.svg"
            }
            type="image/svg+xml"
          />
          <img
            onClick={() => setIsLiked(!isLiked)}
            src={
              isLiked ?
                "/icons/heart-orange.svg" :
                "/icons/heart-outlined.svg"
            }
            className='heartIcon'
            alt="Favorito"
          />
        </picture>
        <span>
          <picture>
            <source srcSet="/icons/star-fill.svg" type="image/svg+xml" />
            <img src="/icons/star-fill.svg" alt="estrela cheia" className='starIcon' />
          </picture>
          <picture>
            <source srcSet="/icons/star-fill.svg" type="image/svg+xml" />
            <img src="/icons/star-fill.svg" alt="estrela cheia" className='starIcon' />
          </picture>
          <picture>
            <source srcSet="/icons/star-fill.svg" type="image/svg+xml" />
            <img src="/icons/star-fill.svg" alt="estrela cheia" className='starIcon' />
          </picture>
          <picture>
            <source srcSet="/icons/star-fill.svg" type="image/svg+xml" />
            <img src="/icons/star-fill.svg" alt="estrela cheia" className='starIcon' />
          </picture>
          <picture>
            <source srcSet="/icons/star-fill.svg" type="image/svg+xml" />
            <img src="/icons/star-half.svg" alt="estrela meio cheia" className='starIcon' />
          </picture>
          {" "}
          {product.ratio}
        </span>
      </Header>
      <picture className='productImage'>
        <source srcSet={product.image} type="image/svg+xml" />
        <img src={product.image} alt="Imagem de produto" />
      </picture>
      <Body>
        <h2 className='manufacturerName'>{product.manufacturer}</h2>
        <h1 className='productName'>{product.title}</h1>
        <p className='installmentAmount'>
          {new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(product.installmentAmount)}
        </p>
        <p className='cashValue'>
          {new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(product.cashValue)}
        </p>
        <p className='cashDescription'>À VISTA</p>
        <div className='productStatus'>
          {
            product.freeShipping && (
              <>
                <picture>
                  <source srcSet="/icons/truck.svg" type="image/svg+xml" />
                  <img src="/icons/truck.svg" alt="caminhão" />
                </picture>
                FRETE GRÁTIS
              </>
            )
          }
          {
            product.openBox && (
              <>
                <picture>
                  <source srcSet="/icons/open-box.svg" type="image/svg+xml" />
                  <img src="/icons/open-box.svg" alt="open box" />
                </picture>
                OPEN BOX
              </>
            )
          }
        </div>
      </Body>
      <Button
        className='buttonProduct'
        onClick={handlePurchaseProduct}
      >
        <picture>
          <source srcSet="/icons/cart-white.svg" type="image/svg+xml" />
          <img src="/icons/cart-white.svg" alt="shop cart" />
        </picture>
        COMPRAR
      </Button>
    </Container>
  )
}