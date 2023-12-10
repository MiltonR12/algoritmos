import Sweet from "sweetalert2";

export const alertGenerateDisc = () => {
  return Sweet.fire({
    title: "Cantidad de numeros de prueba",
    inputPlaceholder: "numero",
    input: "number",
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: "Generar",
    background: "#202020",
    color: "#fff",
    cancelButtonColor: "#101010",
    confirmButtonColor: "#00BAEC",
  });
};

export const alertCheck = () => {
  return Sweet.fire({
    title: "Cantidad de numeros de prueba",
    inputPlaceholder: "numero",
    input: "radio",
    inputOptions: {
      "Ascendente": "Ascendente",
      "Descendente": "Descendente "
    },
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: "Generar",
    background: "#202020",
    cancelButtonColor: "#101010",
    confirmButtonColor: "#00BAEC",
  });
};
