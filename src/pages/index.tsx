import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  Container,
  Content,
  BillBoard,
  BillBoardHeader,
  BillBoardContent,
  BillBoardFooter
} from '../styles/home';

import { api } from '../services/api';
import { StopWatch } from '../components/StopWatch';
import { CardBanner } from '../components/CardBanner';
import { IProduct } from '../interfaces/product';
import { Carousel } from '../components/Carousel';

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {

  return (
    <>
      <Head>
        <title>KaBuM!</title>
      </Head>
      <Container>
        <Content>
          <picture>
            <source srcSet="/images/banner.svg" type="image/svg+xml" />
            <img src="/images/banner.svg" alt="Banner promocional" />
          </picture>
          <BillBoard>
            <BillBoardHeader>
              <h1>
                Black Friday
              </h1>
              <div>
                <p>
                  A PROMOÇÃO TERMINA EM:&nbsp;&nbsp;
                </p>
                <picture>
                  <source srcSet="/icons/stopwatch.svg" type="image/svg+xml" />
                  <img src="/icons/stopwatch.svg" alt="cronômetro" />
                </picture>
                &nbsp;&nbsp;
                <StopWatch />
              </div>
            </BillBoardHeader>
            <BillBoardContent>
              <Carousel products={products} />
            </BillBoardContent>
            <BillBoardFooter>
              <CardBanner
                title='VENDA O SEU PRODUTO'
                description='Venda o seu produto usado em nosso marketplace.'
                imgUrl="/images/processor.svg"
              />
              <CardBanner
                title='CONHEÇA OS PRODUTOS PRIME'
                description='Fique por dentro de todos os nossoa benefícios.'
                imgUrl="/images/ninja.svg"
              />
              <CardBanner
                title='conheça nossos produtos de leilão'
                description='As melhores oportunidades de compra.'
                imgUrl="/images/razer.svg"
              />
            </BillBoardFooter>
          </BillBoard>
        </Content>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let products = [] as IProduct[];

  try {
    let reponse = await api.get("products");
    products = reponse.data;
  } catch (error) {
    console.log("error fetch", error)
  }

  return {
    props: {
      products
    },
    revalidate: 60, //1 minute
  }
}