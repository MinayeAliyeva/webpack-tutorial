import imgSrc from "../../assets/images/productt42.jpg";
import "./index.css";
export class Image {
  render() {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("img");
    document.body.appendChild(img);
  }
}
