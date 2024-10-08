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
      return { color: "#f1c40f", weight: 2 };
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
      { label: "Seis veces por semana", color: "#f1c40f" },
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
      return { color: "#f1c40f", weight: 2 };
    case 32:
      return { color: "#cb4335", weight: 2 };
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
      { label: "Seis veces por semana", color: "#f1c40f" },
      { label: "Tres veces por semana", color: "#cb4335" },
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


//LUSAl: COD_LUSAL - Corresponde al servicio de lusal
function getColorLusal(COD_LUSAL) {
  switch (COD_LUSAL) {
    case 40:
      return { color: "#39F7F7", weight: 2 };
    case 41:
      return { color: "#6B6E6B", weight: 1 };
    case 42:
      return { color: "#2DA333", weight: 2 };
    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleLusal(feature) {
  const { color, weight } = getColorLusal(feature.properties.COD_LUSAL);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,
    dashArray: "0",
    fillOpacity: 0.5,
  };
}
function createLegendLusal() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Luminarias", color: "" },
      { label: "LED", color: "#39F7F7" },
      { label: "Distinto de LED", color: "#6B6E6B" }, 
      { label: "Sin servicio", color: "#2DA333" },
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
    if (map.hasLayer(EjesLusal)) {
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

//Servicios de EV: COD_SEV - Corresponde al servicio de lusal
function getColorSEV(COD_SEV) {
  switch (COD_SEV) {
    case 50:
      return { color: "#BD1F95", weight: 2 };
    case 51:
      return { color: "#6B6E6B", weight: 1 };
    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleSEV(feature) {
  const { color, weight } = getColorSEV(feature.properties.COD_SEV);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,
    dashArray: "0",
    fillOpacity: 0.5,
  };
}
function createLegendSEV() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Serv. Espacios verdes", color: "" },
      { label: "Con servicio", color: "#BD1F95" },
      { label: "Sin servicio", color: "#6B6E6B" },
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
    if (map.hasLayer(EjesSEV)) {
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

//Semaforos : COD_SEMAF - Corresponde al servicio de lusal
function getColorSEMAF(COD_SEMAF) {
  switch (COD_SEMAF) {
    case 60:
      return { color: "#7a18eb", weight: 2 };
    case 61:
      return { color: "#6B6E6B", weight: 1 };
    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleSEMAF(feature) {
  const { color, weight } = getColorSEMAF(feature.properties.COD_SEMAF);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,
    dashArray: "0",
    fillOpacity: 0.5,
  };
}
function createLegendSEMAF() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Semáforo", color: "" },
      { label: "Con servicio", color: "#7a18eb" },
      { label: "Sin servicio", color: "#6B6E6B" },
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
    if (map.hasLayer(EjesSEMAF)) {
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
