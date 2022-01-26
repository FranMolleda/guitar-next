import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import Blog from "../components/Blog";

export default function Home({ guitarras, curso, blog }) {
  return (
    <Layout pagina="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
      </main>
      <Listado guitarras={guitarras} />
      <Curso curso={curso} />
      <Blog blog={blog} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, curso, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);
  return { props: { guitarras, curso, blog } };
}
