import { useEffect, useState, useCallback } from 'react';
import {
  Container,
} from './styles';

export function StopWatch() {

  const [time, setTime] = useState(1148410);

  useEffect(() => {
    setTimeout(() => {
      setTime(value => value - 1);
    }, 1000);
  }, [time]);

  const returnDays = useCallback(() => {
    return ~~(time / (60 * 60 * 24));
  }, [time]);

  const returnRemainder = useCallback(() => {
    return time % (60 * 60 * 24);
  }, [time]);

  const returnTime = useCallback(() => {
    let hour = (~~(returnRemainder() / (60 * 60))).toString().padStart(2, '0');
    let minutes = (~~(returnRemainder() % (60 * 60) / 60)).toString().padStart(2, '0');
    let seconds = (~~(returnRemainder() % (60 * 60) % 60)).toString().padStart(2, '0');
    return hour + ":" + minutes + ":" + seconds;
  }, [time]);

  return (
    <Container>
      {returnDays()}D
      {" "}
      {returnTime()}
    </Container>
  )
}