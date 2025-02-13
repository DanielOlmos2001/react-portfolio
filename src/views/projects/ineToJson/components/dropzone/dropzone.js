import React from "react";
import { useDropzone } from "react-dropzone";
import "../dropzone/dropzone.css";

const DropzoneUploader = ({ onDrop, preview, onError }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected: (rejectedFiles) => {
      if (onError) {
        // Llamar a la función de error con un mensaje personalizado
        const rejectedFile = rejectedFiles[0];
        if (rejectedFile) {
          const fileName = rejectedFile.file.name;
          onError(
            `Archivo no admitido (${fileName}). Solo se permiten imágenes con extensiones JPEG, PNG, JPG o JFIF.`
          );
        } else {
          onError("Archivo no admitido. Solo se permiten imágenes.");
        }
      }
    },
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/jfif": [".jfif"],
    }, // Tipos y extensiones permitidas
    multiple: false, // Solo un archivo
  });

  return (
    <div {...getRootProps({ className: "dropzone-AppIneToJson" })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Suelta la imagen aquí...</p>
      ) : (
        <p>Arrastra una imagen o haz clic para seleccionarla </p>
      )}
      {preview && <img src={preview} alt="Vista previa" className="image-preview" />}
    </div>
  );
};

export default DropzoneUploader;

