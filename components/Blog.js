import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";

function HomeBlog({ blog }) {
  blog.splice(3, 2);
  return (
    <div className={`container ${styles.homeblog}`}>
      <div className={styles.blog}>
        {blog.map((entrada) => (
          <Entrada entrada={entrada} key={entrada.id} />
        ))}
      </div>
    </div>
  );
}

export default HomeBlog;
