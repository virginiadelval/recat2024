// categorias: Categotiras - Corresponde al servicio de lusal
function getColorCategoria(CATEGORIA) {
  switch (CATEGORIA) {
    case 1:
      return { color: "#d7191c", weight: 2 };
    case 2:
      return { color: "#dc2e26", weight: 2 };
    case 3:
      return { color: "#e24430", weight: 2 };
    case 4:
      return { color: "#e7593a", weight: 2 };
    case 5:
      return { color: "#ed6e43", weight: 2 };
    case 6:
      return { color: "#f2834d", weight: 2 };
    case 7:
      return { color: "#f89957", weight: 2 };
    case 8:
      return { color: "#fdae61", weight: 2 };
    case 9:
      return { color: "#fdba6f", weight: 2 };
    case 10:
      return { color: "#fec57c", weight: 2 };
    case 11:
      return { color: "#fec57c", weight: 2 };
    case 12:
      return { color: "#fedc97", weight: 2 };
    case 13:
      return { color: "#fee8a5", weight: 2 };
    case 14:
      return { color: "#fff3b2", weight: 2 };
    case 15:
      return { color: "#ffffc0", weight: 2 };
    case 16:
      return { color: "#ffffc0", weight: 2 };
    case 17:
      return { color: "#e6f4a7", weight: 2 };
    case 18:
      return { color: "#d9ef9b", weight: 2 };
      case 19:
        return { color: "#cce98f", weight: 2 };
      case 20:
        return { color: "#bfe483", weight: 2 };
      case 21:
        return { color: "#b3de76", weight: 2 };
      case 22:
        return { color: "#a6d96a", weight: 2 };
      case 23:
        return { color: "#92cf64", weight: 2 };
      case 24:
        return { color: "#7ec65e", weight: 2 };
      case 25:
        return { color: "#6abc58", weight: 2 };
      case 26:
        return { color: "#56b353", weight: 2 };
      case 27:
        return { color: "#42a94d", weight: 2 };
    case 28:
      return { color: "#2ea047", weight: 1 };
    default:
      return { color: "black", weight: 1 }; // Estilo por defecto
  }
}
function styleCategoria(feature) {
  const { color, weight } = getColorCategoria(feature.properties.CATEGORIA);
  return {
    color: color,
    weight: weight,
    opacity: 0.7,
    dashArray: "0",
    fillOpacity: 0.5,
  };
}
function createLegendCategoria() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];

    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Categorias", color: "" },
      { label: "Mas servicios", color: "#7a18eb" },
      { label: "Menos servicio", color: "#6B6E6B" },
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
    if (map.hasLayer(EjesCODLINK)) {
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
