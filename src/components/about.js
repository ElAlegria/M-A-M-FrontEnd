import React from "react";
import Into from "./Into";

//? image
import imageAudience from "../images/audience-g1c44bca78_1280.jpg";
import imageMusicSheet from "../images/music-sheet-gb888083cf_1280.jpg";
import imageMusician from "../images/musician-g6b5ae3d78_1280.jpg";
const AboutUs = () => {
  return (
    <section className="AboutUs">
      <Into
        image={imageAudience}
        title={"Alas de la Melodía"}
        text1={"Estas notas etéreas elevan el alma y dan aliento.        "}
        text2={"Descubre canciones que inspiran y motivan el corazón."}
        text3={
          "Melodías que despiertan esperanza y sueños en cada acorde.        "
        }
        reverse={false}
      ></Into>
      <Into
        image={imageMusicSheet}
        title={"La musica es el lenguaje universar:"}
        text1={"Da amor a nuestros corazes"}
        text2={"Despierta emociones "}
        text3={"Nos une como personas"}
        reverse={true}
      ></Into>
      <Into
        image={imageMusician}
        title={"Elevando Almas con Melodías"}
        text1={"La musica conmovedoras tocan el corazón y elevan el espíritu"}
        text2={"Descubre melodías que inspiran y motivan hacia metas más altas"}
        text3={
          "Notas que transforman, emocionan y dan esperanza a todos.        "
        }
        reverse={false}
      ></Into>
    </section>
  );
};

export default AboutUs;
