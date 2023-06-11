import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./telaVendedor.css";

function TelaformDados() {
  const [imageSrc, setImageSrc] = useState("");
  const [imageImgs, setImageImgs] = useState(Array(9).fill(""));
  const [formDados, setDados] = useState({});
  const location = useLocation();

  const pictureImageTxt = "+ Inserir Logo";
  const pictureMiniImageTxt = "+Inserir Foto";

  useEffect(() => {
    const email = location.state && location.state.email;
    if (email !== "") {
      let url = `http://localhost:3333/vendedores/${email}`;
      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.send();

      req.onload = function () {
        if (req.status === 200) {
          let dados = JSON.parse(req.response);
          setDados((prevDados) => ({
            ...prevDados,
            logradouro: dados.logradouro,
            numero: dados.numero,
            nomeLoja: dados.nomeLoja,
            telefone: dados.telefone,
          }));

        } else if (req.status === 404) {
          console.log(Error)
        } else {
          alert(
            "Erro ao fazer a requisição, tente novamente mais tarde!"
          );
        }
      };
    }
  }, [location]);



  const handleFileChange = (e, index) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        const readerTarget = e.target;

        if (index === null) {
          setImageSrc(readerTarget.result);

        } else {
          const updatedImageImgs = [...imageImgs];
          updatedImageImgs[index] = readerTarget.result;
          setImageImgs(updatedImageImgs);
        }
      });

      reader.readAsDataURL(file);
    } else {
      if (index === null) {
        setImageSrc("");
      } else {
        const updatedImageImgs = [...imageImgs];
        updatedImageImgs[index] = "";
        setImageImgs(updatedImageImgs);
      }
    }
  };

  return (
    <div className="campos">
      <label
        htmlFor="picture__input"
        className={`picture ${imageSrc ? "no-border" : ""}`}
      >
        <input
          type="file"
          id="picture__input"
          onChange={(e) => handleFileChange(e, null)}
        />
        {imageSrc ? (
          <img src={imageSrc} alt="uploaded" className="picture__img" />
        ) : (
          pictureImageTxt
        )}
      </label>


      <div className="conjuntoFotos">
        {imageImgs.map((image, index) => (
          <label
            key={index}
            htmlFor={`picture_mini_${index}`}
            className={`pictureMini ${image ? "no-border" : ""}`}
          >
            <input
              type="file"
              id={`picture_mini_${index}`}
              className="picture_mini"
              onChange={(e) => handleFileChange(e, index)}
            />
            {image ? (
              <img
                src={image}
                alt="uploaded"
                className="picture_MiniImg"
              />
            ) : (
              pictureMiniImageTxt
            )}
          </label>
        ))}
      </div>

      <div className="infoLoja">

      <label>Loja: {formDados.nomeLoja}</label>
            <label>Endereço: {formDados.logradouro}, {formDados.numero}</label>
            <label>Telefone: {formDados.telefone}</label>

        <label>Instagram:
          <textarea></textarea>
        </label>

        <label>Descrição:
          <textarea />
        </label>

      </div>

    </div>

  );
}

export default TelaformDados;
