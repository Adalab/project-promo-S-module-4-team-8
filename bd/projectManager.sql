CREATE DATABASE projectManager;
USE projectManager;

CREATE TABLE projects (
idProjects INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nameProject VARCHAR(1024) NOT NULL,
sloganProject VARCHAR(1024) NOT NULL,
repoProject VARCHAR(500) NOT NULL,
demoProject VARCHAR(500) NOT NULL,
technoProject VARCHAR(500) NOT NULL,
descProject VARCHAR(1024) NOT NULL,
photoProject LONGTEXT NOT NULL
);

CREATE TABLE autors (
idAutor INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nameAutor VARCHAR(100) NOT NULL,
jobAutor VARCHAR(100) NOT NULL,
imageAutor LONGTEXT NOT NULL
);

INSERT INTO projects (nameProject, sloganProject, repoProject, demoProject, technoProject, descProject, photoProject)
VALUES ("Gestor de proyectos", 
"Emprende tus proyectos sin límites.", 
"https://github.com/Adalab/project-promo-S-module-3-team-8", 
"https://github.com/Adalab/project-promo-S-module-3-team-8", 
"React - SASS - HTML", 
"Nuestra web es un gestor de proyectos online que te permite organizar tus proyectos de forma inteligente y eficiente con solo crear una tarjeta para cada uno.", 
"https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?itok=tpvHWpeZ"
), ("Awesome Cards", 
"Crea tarjetas personalizadas sin límites.", 
"https://github.com/beafig/adalab-team-project-module2", 
"https://github.com/beafig/adalab-team-project-module2", 
"JS - SASS - HTML", 
"Mi web te permite crear tarjetas profesionales y compartirlas en tus redes sociales, sin necesidad de imprimirlas.", 
"https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
), ("Personajes de Harry Potter", 
"Compartimos nuestra magia contigo.", 
"https://github.com/Adalab/modulo-3-evaluacion-final-beafig", 
"http://beta.adalab.es/modulo-3-evaluacion-final-beafig/", 
"React - SASS - HTML", 
"Mi página es un listado de todos los personajes de Harry Potter filtrados por sus respectivas casas, además podrás filtrar según otras características.", 
"https://i.pinimg.com/736x/ca/71/7a/ca717ab8a5272193291355d797071494.jpg"
), ("Frases de Friends", 
"Revive los mejores momentos de Friends con nuestras frases favoritas.", 
"https://github.com/Adalab/modulo-3-evaluacion-intermedia-beafig", 
"http://beta.adalab.es/modulo-3-evaluacion-intermedia-beafig/", 
"React - SASS - HTML", 
"Nuestro proyecto de frases de Friends es un homenaje a una de las series más queridas de la televisión, que busca celebrar su legado y mantener vivo el espíritu de la amistad, el amor y la risa que caracterizó a la serie durante sus diez temporadas.", 
"https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14048.jpg?w=2000"
);

SELECT * FROM projects;

INSERT INTO autors (nameAutor, jobAutor, imageAutor)
VALUES ("MariCarmen", 
"Front-end developer", 
"https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?itok=tpvHWpeZ"
), ("Paquita Salas", 
"Back-end", 
"https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
), ("Ada", 
"Full stack",
"https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14048.jpg?w=2000" 
);

SELECT * FROM autors;

UPDATE projects SET photoProject = "https://www.workmeter.com/wp-content/uploads/2018/05/medicion-de-resultados-de-un-proyecto-1-scaled.jpg"
WHERE idProjects > 0;

ALTER TABLE projects
ADD fk_autors INT NOT NULL;

UPDATE projects
SET fk_autors = 3
WHERE idProjects = 4;

SELECT projects.nameProject, autors.nameAutor
FROM projects, autors
WHERE fk_autors = idAutor;

