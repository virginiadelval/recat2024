//Eje de Calle: COD_Calle. Tipo de material
function getColorCalles(COD_CALLE) {
  switch (COD_CALLE) {
    case 10:
      return { color: "#3498DB", weight: 2 };
    case 11:
      return { color: "#F37777", weight: 2 };
    case 12:
      return { color: "#935116", weight: 2 };

    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleCalles(feature) {
  const { color, weight } = getColorCalles(feature.properties.COD_CALLE);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,

    dashArray: "0",
    fillOpacity: 0.5,
  };
}

function createLegendCalles() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Tipo de Calle", color: "" },
      { label: "Calle de Pavimento/Hormigón/Adoquin", color: "#3498DB" },
      { label: "Calle de Tierra con Cordon", color: "#F1948A" },
      { label: "Calle de Tierra sin Cordon", color: "#935116" },
    ];
    // Genera el contenido HTML de la leyenda
    styles.forEach(function (style) {
      labels.push(
        '<i style="background:' + style.color + '"></i> ' + style.label
      );
    });

    div.innerHTML = labels.join("<br>");
    return div;
  };

  // Función para mostrar/ocultar la leyenda
  function toggleLegend() {
    if (map.hasLayer(EjesCalles)) {
      legend.addTo(map);
    } else {
      legend.remove();
    }
  }

  // Eliminar la leyenda al inicio
  legend.remove();
  // Escucha el cambio de estado de la capa
  map.on("overlayadd overlayremove", toggleLegend);
}

//Recoleccion: COD_RECOL - Corresponde al servicio de recoleccion.
function getColorRecol(COD_RECOL) {
  switch (COD_RECOL) {
    case 20:
      return { color: "#7a18eb", weight: 2 };
    case 21:
      return { color: "#e6c613", weight: 2 };
    case 22:
      return { color: "#0c97c9", weight: 2 };
    case 23:
      return { color: "#2DA333", weight: 2 };

    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleRecol(feature) {
  const { color, weight } = getColorRecol(feature.properties.COD_RECOL);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,

    dashArray: "0",
    fillOpacity: 0.5,
  };
}

function createLegendRecol() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Recolección", color: "" },
      { label: "Especial", color: "#7a18eb" },
      { label: "Seis veces por semana", color: "#e6c613" },
      { label: "Contenedores", color: "#0c97c9" },
      { label: "Sin servicio", color: "#5be562" },
    ];

    // Genera el contenido HTML de la leyenda
    styles.forEach(function (style) {
      labels.push(
        '<i style="background:' + style.color + '"></i> ' + style.label
      );
    });

    div.innerHTML = labels.join("<br>");
    return div;
  };

  // Función para mostrar/ocultar la leyenda
  function toggleLegend() {
    if (map.hasLayer(EjesRecoleccion)) {
      legend.addTo(map);
    } else {
      legend.remove();
    }
  }

  // Eliminar la leyenda al inicio
  legend.remove();
  // Escucha el cambio de estado de la capa
  map.on("overlayadd overlayremove", toggleLegend);
}

//Barrido: COD_BARRIDO - Corresponde al servicio de recoleccion.
function getColorBarrido(COD_BARRIDO) {
  switch (COD_BARRIDO) {
    case 30:
      return { color: "#7a18eb", weight: 2 };
    case 31:
      return { color: "#e6c613", weight: 2 };
    case 32:
      return { color: "#0c97c9", weight: 2 };
    case 33:
      return { color: "#f0ae58", weight: 2 };
    case 34:
      return { color: "#2DA333", weight: 2 };
    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleBarrido(feature) {
  const { color, weight } = getColorBarrido(feature.properties.COD_BARRIDO);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,
    dashArray: "0",
    fillOpacity: 0.5,
  };
}

function createLegendBarrido() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Barrido", color: "" },
      { label: "Especial", color: "#7a18eb" },
      { label: "Seis veces por semana", color: "#e6c613" },
      { label: "Tres veces por semana", color: "#0c97c9" },
      { label: "1-2 veces por semana", color: "#f0ae58" },
      { label: "Sin servicio", color: "#5be562" },
    ];

    // Genera el contenido HTML de la leyenda
    styles.forEach(function (style) {
      labels.push(
        '<i style="background:' + style.color + '"></i> ' + style.label
      );
    });

    div.innerHTML = labels.join("<br>");
    return div;
  };

  // Función para mostrar/ocultar la leyenda
  function toggleLegend() {
    if (map.hasLayer(EjesBarrido)) {
      legend.addTo(map);
    } else {
      legend.remove();
    }
  }

  // Eliminar la leyenda al inicio
  legend.remove();
  // Escucha el cambio de estado de la capa
  map.on("overlayadd overlayremove", toggleLegend);
}
