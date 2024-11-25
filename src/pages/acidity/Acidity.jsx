import "./Acidity.css";
import Header from "../../components/header/Header";
import Information from "./information/Information";
import Title from "./title/Title";
import Introduction from "./introduction/Introduction";
import Explanation from "./explanation/Explanation";
import FishScene from "./fish-scene/FishScene";
import RiverScene from "./river-scene/RiverScene";
const Acidity = () => {

  return (
    <>
    <div className="container-page">
      <Header />
      <main className="main">

      <Title/>
      <Introduction/>
      <Explanation/>
      <FishScene/>

        <section className="acidity-information">
          <h2 className="acidity-subtitle">
            La contaminación generada por la industria textil y sus residuos
          </h2>

          <div className="acidity-information-container">
            <article className="acidity-information-item">
              <Information
                title="Sobreconsumo de Recursos Naturales"
                description={
                  <>
                    <p>
                      La producción textil utiliza mucha agua, además de tierras
                      para cultivar algodón y otras fibras. Para elaborar una
                      sola camiseta de algodón, las estimaciones indican que se
                      necesitan 2.700 litros de agua dulce: la cantidad de agua
                      que una persona bebe en dos años y medio.
                    </p>
                    <p>
                      El sector textil fue la tercera fuente de degradación del
                      agua y del uso del suelo en 2020. Ese año también, se
                      necesitó una media de nueve metros cúbicos de agua, el uso
                      de 400 metros cuadrados de tierra y 391 kilogramos (kg) de
                      materias primas para proporcionar ropa y calzado a cada
                      ciudadano de la UE.
                    </p>
                  </>
                }
                urlImage="https://www.europarl.europa.eu/resources/library/images/20230613PHT98337/20230613PHT98337-cl.png"
              imageSize="40%"
              />
              
            </article>

            <article className="acidity-information-item">
              <Information
                title="Sólo el 1% de la ropa usada se recicla en ropa nueva"
                description={
                  <>
                    <p>
                      Los europeos consumen de media casi 26 kg y se desprenden
                      de unos 11 kg de textiles cada año. La ropa usada puede
                      exportarse fuera de la UE, pero la mayoría (87 %) es
                      incinerada o depositada en vertederos.
                    </p>
                    <p>
                      El auge de la moda rápida ha sido crucial en el aumento
                      del consumo, impulsado también en parte por las redes
                      sociales y la industria, que impulsa que las tendencias de
                      la moda lleguen a más consumidores y a un ritmo más rápido
                      que en el pasado.
                    </p>
                  </>
                }
                urlImage="https://www.europarl.europa.eu/resources/library/images/20230613PHT98338/20230613PHT98338_original.png"
                imageSize="60%"
              />
            </article>
          </div>
        </section>

        <RiverScene/>


      </main>
    </div>
    </>
  );
};

export default Acidity;
