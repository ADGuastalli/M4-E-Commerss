import Image from "next/image";
import styles from "./about.module.css";
import LineTime from "@/components/lineTime/indexLineTime";

function About() {
  return (
    <div>
      <div className={styles.conteiner}>
        <div className={styles.card1}>
          <h1 className="font-bold text-4xl ">Our Life</h1>
          <Image src="/historia.png" alt="icono" width={400} height={400} />
        </div>

        <div className="mt-5">
          <LineTime />
        </div>
      </div>
    </div>
  );
}

export default About;
