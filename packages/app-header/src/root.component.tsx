// @ts-ignore
import { Navigate } from '@shoppe/util-ui';

export default function Root(props) {
  return (
    <section>
      <h1>Eu sou o HEADER!!!!!!</h1>
      <Navigate path="/account">Account</Navigate>
      <Navigate path="/cart">cart</Navigate>
      <Navigate path="/product">product</Navigate>
      <Navigate path="/shop">shop</Navigate>
    </section>
  );
}
