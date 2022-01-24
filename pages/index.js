import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ guitarras }) {
  return (
    <Layout pagina="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
      </main>
      <Listado guitarras={guitarras} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const response = await fetch(url);
  const guitarras = await response.json();
  return { props: { guitarras } };
}
