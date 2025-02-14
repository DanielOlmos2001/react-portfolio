import React, { useState, useCallback } from "react";
import axios from "axios";
import DropzoneUploader from "../dropzone/dropzone";
import "./peticion.css";

const Peticion = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // --- Manejar archivo desde dropzone.
  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); // Crear URL para vista previa.
    setErrorMessage(""); // Limpia errores previos.
  }, []);

  // --- Manejar errores de Dropzone.
  const handleDropzoneError = (message) => {
    setErrorMessage(message);
    setFile(null);
    setPreview(null);
  };

  // --- Petición para enviar la imagen al backend.
  const handleSubmitImage = async (e) => {
    e.preventDefault();

    // Si no hay un archivo, mandar una alerta.
    if (!file) {
      alert("Por favor, selecciona una imagen para enviar.");
      return;
    }

    const formData = new FormData(); // Declaración del formData a enviar
    formData.append("image", file); // Agregamos una key con su valor.
    setLoading(true); // Cambiamos al estado de carga hasta haber respuesta del servidor.

    // Hacemos el intento de comunicación.
    try {
      // Declaramos una respuesta del servidor para la petición POST.
      const res = await axios.post(
        "http://ine-to-json-lapp-identificat-dev.apps.paasprofuturo-d.r6b1.p1.openshiftapps.com/conversiones-ines-a-jsons",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );

      // Actualizamos la variable de Respuesta con la información de la respuesta del servidor.
      setResponse(res.data);

    } catch(error) {
      // Si hay un error al hacer la petición, actualizamos la variable respuesta del servidor con la información del error.
      // NOTA: El operador ?. verifica automáticamente si response existe antes de intentar acceder a data. Si response no existe, toda la expresión devuelve undefined, sin lanzar un error.
      setResponse(error.response?.data || {
        error: true,
        message: "Ocurrió un error desconocido.",
      });
    } finally {
      setLoading(false); // Como ya hubo una respuesta, exitosa o de error, terminamos el estado de carga.
    }
  };

  // -- Función para copiar URL al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(
        "http://ine-to-json-lapp-identificat-dev.apps.paasprofuturo-d.r6b1.p1.openshiftapps.com/conversiones-ines-a-jsons"
      )
      .then(() => alert("URL copiada al portapapeles."))
      .catch((error) => console.error("Error al copiar la URL:", error));
  };

  return (
    <div className="peticion-container">
      <h2>Envía una imagen para reconocimiento</h2>
      <p>
        Envía una imagen al servicio mediante una petición POST
        <span onClick={copyToClipboard} className="copy-url"></span>
      </p>

      <br />

      <p>Agregar una key "image" a un form-data en la petición POST e inserta la imagen de la INE en formato JPG, JPEG, PNG, JFIF.</p>
      
      <p>
        <a href="https://drive.google.com/file/d/1UMq-APWQ-QLyVpN7jsHTHf74TRH-oSp2/view?usp=sharing" download className="download-link">
          Descargar documentación completa
        </a>
      </p>

      {/* Formulario de la imagen*/}
      <form onSubmit={handleSubmitImage} className="formulario-ine">
        <DropzoneUploader
          onDrop={onDrop}
          onError={handleDropzoneError}
          preview={preview}
        />

        {/* Si hay un error, muestra un parrafo con el error. */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {/* Si hay un archivo, muestra un parrafo con la información del archivo. */}
        {file && <p className="file-info">Archivo seleccionado: {file.name}</p>}

        {/* Botón para enviar el archivo cargado. */}
        <button type="submit" disabled={loading} className="button">
          {/* Si el estado de carga está activado, mostrar "Enviando..." en el botón */}
          {loading ? "Enviando..." : "Enviar imagen"}
        </button>

      </form>

      {/* Si el estado de carga está activado, mostrar un spinner de carga diseñado con CSS */}
      {loading && <div className="loading-spinner"></div>}

      {/* Si hay una respuesta, de éxito o error, se muesta el contenedor de la respuesta del servidor (o no) */}
      {response && (
        <div className="response-container">
          <h3>
            Respuesta del servidor:{" "}
            {/* Mostrar el mensaje de respuesta en un span. Si hay un error, asignar la clase de error. Si no hya, la de éxito.*/}
            <span className={response.error ? "text-error" : "text-success"}>
              &nbsp;{response.message}
            </span>
          </h3>

          {/* Si hay un error, mostrar el código del error. Si no hay error, mostrar la información del JSON. */}
          {response.error ? (
            <pre>Código de error: {response.code}</pre>
          ) : (
            <pre>{JSON.stringify(response.data, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Peticion;