const EntradaBlog = ({ entrada }) => {
  return (
    <div>
      <h1>{entrada.titulo}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: { id: entrada.id.toString() },
  }));

  return {
    paths,
    fallback: false, //true: cuando sean muchas entradas (millones) te crea algunas entradas y el resto se generan sergun va navegando el usuario - false: cuando sean pocas entradas y/o no cree el usuario nuevas entradas (recomendado para marketplace)  - blo
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return {
    props: { entrada },
  };
}

/* export async function getServerSideProps({ query: { id } }) {
   const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  console.log(entrada);
  return {
    props: { entrada },
  };
} */

export default EntradaBlog;
