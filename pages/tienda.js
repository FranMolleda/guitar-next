import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ guitarras }) => {
  return (
    <div className="contenedor">
      <Layout pagina="Tienda Virutal">
        <main>
          <h1>Nuestra Colección</h1>
        </main>
        <Listado guitarras={guitarras} />
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const response = await fetch(url);
  const guitarras = await response.json();
  return { props: { guitarras } };
}

export default Tienda;
