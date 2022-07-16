import Head from 'next/head';
import {
  Container,
  Content,
  BillBoard,
  BillBoardHeader,
  BillBoardContent,
  BillBoardFooter
} from '../styles/home';
import { StopWatch } from '../components/StopWatch';

export default function Home() {
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
              <img src="/images/ninja.svg" alt="ninja" />
            </BillBoardFooter>  
          </BillBoard>
        </Content>
      </Container>
    </>
  )
}
