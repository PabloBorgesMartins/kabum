import {
  Container,
  Header
} from './styles';

interface CardBannerProps {
  title: string;
  description: string;
  imgUrl: string;
}

export function CardBanner({ title, description, imgUrl }: CardBannerProps) {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <p>{description}</p>
      </Header>
      <picture>
        <source srcSet={imgUrl} type="image/svg+xml" />
        <img src={imgUrl} alt={`Banner Promocional ${title}`} />
      </picture>
    </Container>
  )
}