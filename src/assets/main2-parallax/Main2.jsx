import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import image from "../img/distribution zamena.jpg";

export function Main2() {
  return (
    <Parallax>
      <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: "#000" }} />
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#0ff" }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#fff" }} />
    </Parallax>
  );
}
