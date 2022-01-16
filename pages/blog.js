import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  return (
    <div>
      <Layout pagina="Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>

          <div className={styles.blog}>
            {entradas.map((entrada) => (
              <Entrada entrada={entrada} key={entrada.id} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:1337/blogs");
  const entradas = await response.json();
  return {
    props: { entradas },
  };
}

export default Blog;
