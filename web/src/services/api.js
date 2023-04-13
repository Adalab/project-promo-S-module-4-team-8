const dataApi = (data) => {
  return fetch("gestor-proyectos.onrender.com/api/projects/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

// obtener el listado

const listProjectApi = () => {
  return fetch("gestor-proyectos.onrender.com/api/projects/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
const api = { dataApi, listProjectApi }
export default api;
