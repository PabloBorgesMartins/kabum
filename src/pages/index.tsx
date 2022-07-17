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
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    async function load() {
      try {
        let reponse = await api.get("products");
        console.log("Produtos", reponse.data);
      } catch (error) {
        console.log("error", error)
      }
    }

    load();
  }, []);

  return (
    <>
      <Head>
        <title>KaBuM!</title>
      </Head>
      <Container>
        <Content>
          <img src="/images/banner.svg" alt="Banner promocional" />
          <BillBoard>
            <BillBoardHeader>
              <h1>
                Black Friday
              </h1>
              <div>
                <p>
                  A PROMOÇÃO TERMINA EM:&nbsp;&nbsp;
                </p>
                <img src="/images/stopwatch.svg" alt="cronômetro" />
                &nbsp;&nbsp;
                <StopWatch />
              </div>
            </BillBoardHeader>
            <BillBoardContent>

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
  let products = [

  ];

  try {
    let reponse = await api.get("products");
    console.log("Produtos", reponse.data);
    products = reponse.data;
  } catch (error) {
    console.log("error", error)
  }

  return {
    props: {
      products
    },
    revalidate: 60, //1 minute
  }
}