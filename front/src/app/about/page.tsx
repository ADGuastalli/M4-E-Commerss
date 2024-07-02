import Image from "next/image";
import styles from "./about.module.css";

function About() {
  return (
    <div>
      <div className={styles.conteiner}>
        <div className={styles.card1}>
          <h1 className="font-bold text-4xl ">Nuestro Camino</h1>
          <Image src="/historia.png" alt="icono" width={400} height={400} />
        </div>
        <div className={styles.texto}>
          <p>
            Hace cinco años, APPLE ZONE nació con la visión de llevar la
            tecnología de vanguardia de Apple a todos los rincones de Argentina.
            Fundada por un apasionado del mundo digital y la innovación, esta
            plataforma de comercio electrónico se estableció con el firme
            propósito de proporcionar a los argentinos acceso fácil y rápido a
            los productos de Apple más recientes.
          </p>
          <p>
            Desde entonces, APPLE ZONE se ha destacado por su compromiso con la
            excelencia en calidad de productos y experiencia de compra. La
            plataforma ofrece una amplia gama de productos, desde los últimos
            modelos de iPhone y MacBook hasta accesorios y dispositivos
            inteligentes.
          </p>
          <p>
            Con un servicio al cliente excepcional y opciones de envío
            confiables, APPLE ZONE se ha convertido en una de las principales
            opciones para adquirir productos Apple en Argentina. Su misión sigue
            siendo acercar la innovación y la tecnología de Apple a todos los
            hogares del país.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
