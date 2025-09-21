import fs from "fs";

const source = "dist/index.html";
const destination = "dist/404.html";

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error("Erro ao copiar index.html para 404.html:", err);
  } else {
    console.log("404.html criado com sucesso 🚀");
  }
});
