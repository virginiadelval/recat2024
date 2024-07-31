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
      return { color: "#4E6D4F", weight: 1 };
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
      { label: "Sin servicio", color: "#4E6D4F" },
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

// //Codigo link : COD_LINK - indicarod
function getColorLINK(COD_LINK) {
  switch (COD_LINK) {
    default:
      const min = 102030405060, max = 122334425161;
      if (COD_LINK < min || COD_LINK > max) 
        return { color: "black", weight: 1 };
      const interpolate = (c1, c2, f) => c1.map((c, i) => Math.round(c + f * (c2[i] - c)));
      const rgbToHex = rgb => "#" + rgb.map(x => x.toString(16).padStart(2, "0")).join("");
      const start = [255, 0, 0], end = [0, 255, 0], f = (COD_LINK - min) / (max - min);
      return { color: rgbToHex(interpolate(start, end, f)), weight: 2 };
  }
}

// function getColorLINK(COD_LINK) {  
//   const min = 102030405060;  
//   const max = 122334425161;  

  // Comprobar si COD_LINK está fuera del rango  
//   if (COD_LINK < min || COD_LINK > max) {  
//     return { color: "black", weight: 1 };  
//   }  

//   // Definir los colores para cada rango  
//   const colors = [  
//     [255, 0, 0],
//     [255, 25, 0],
//     [255, 51, 0],
//     [255, 76, 0],
//     [255, 102, 0],
//     [255, 127, 0],
//     [255, 153, 0],
//     [255, 178, 0],
//     [255, 204, 0],
//     [255, 229, 0],
//     [255, 255, 0],
//     [229, 255, 0],
//     [204, 255, 0],
//     [178, 255, 0],
//     [153, 255, 0],
//     [127, 255, 0],
//     [102, 255, 0],

//     [255, 153, 153],
//     [255, 182, 153],
//     [255, 204, 153],
//     [255, 255, 153],
//     [255, 255, 153],
//     [204, 255, 153],
//     [153, 255, 153],
//     [153, 255, 204],
//     [153, 255, 255],
//     [153, 204, 255],
//     [153, 153, 255],
//     [182, 153, 255],
//     [204, 153, 255],
//     [255, 153, 204],
//     [255, 204, 204],
    



//     [76, 255, 0],
//     [51, 255, 0],
//     [25, 255, 0],
//     [0, 255, 0],
//     [0, 255, 25],
//     [0, 255, 51],
//     [0, 255, 76],
//     [0, 255, 102],
//     [0, 255, 127],
//     [0, 255, 153],
//     [0, 255, 178],
//     [0, 255, 204],
//     [0, 255, 229],
//     [0, 255, 255],
//     [0, 229, 255],
//     [0, 204, 255],
//     [0, 178, 255],
//     [0, 153, 255],
//     [0, 127, 255],
//     [0, 102, 255],
//     [0, 76, 255],
//     [0, 51, 255],
//     [0, 25, 255],
//     [0, 0, 255],
//     [25, 0, 255],
//     [51, 0, 255],
//     [76, 0, 255],
//     [102, 0, 255],
//     [127, 0, 255],
//     [153, 0, 255],
//     [178, 0, 255],
//     [204, 0, 255],
//     [229, 0, 255],
//     [255, 0, 255],
//     [255, 0, 229],
//     [255, 0, 204],
//     [255, 0, 178],
//     [255, 0, 153],
//     [255, 0, 127],
//     [255, 0, 102],
//     [255, 0, 76],
//     [255, 0, 51],
//     [255, 0, 25],
//     [255, 0, 0],
//     [239, 0, 0],
//     [218, 0, 0],
//     [196, 0, 0],
//     [173, 0, 0],
//     [153, 0, 0],
//     [127, 0, 0],
//     [102, 0, 0],
//     [76, 0, 0],
//     [51, 0, 0],
//     [25, 0, 0],
//     [0, 25, 0],
//     [0, 51, 0],
//     [0, 76, 0],
//     [0, 102, 0],
//     [0, 127, 0],
//     [0, 153, 0],
//     [0, 178, 0],
//     [0, 204, 0],
//     [0, 229, 0],
//     [0, 255, 0],
//     [0, 255, 25],
//     [0, 255, 51],
//     [0, 255, 76],
//     [0, 255, 102],
//     [0, 255, 127],
//     [0, 255, 153],
//     [0, 255, 178],
//     [0, 255, 204],
//     [0, 255, 229],
//     [0, 255, 255],
//     [0, 204, 255],
//     [0, 178, 255],
//     [0, 153, 255],
//     [0, 127, 255],
//     [0, 102, 255],
//     [0, 76, 255],
//     [0, 51, 255],
//     [0, 25, 255],
//     [0, 0, 255],
    
        
//   ];  

//   // Calcular el rango de cada color  
//   const step = (max - min) / (colors.length - 1);  

//   // Determinar en qué rango se encuentra COD_LINK  
//   const index = Math.floor((COD_LINK - min) / step);  

//   // Asegúrate de que el índice no exceda el total de colores  
//   const nextIndex = Math.min(index + 1, colors.length - 1);  

//   // Calcular el factor de interpolación  
//   const f = (COD_LINK - (min + index * step)) / step;  

//   // Definir la función de interpolación  
//   const interpolate = (c1, c2, f) => c1.map((c, i) => Math.round(c + f * (c2[i] - c)));  

//   // Obtener el color interpolado  
//   const color = interpolate(colors[index], colors[nextIndex], f);  
  
//   // Función para convertir RGB a formato hexadecimal  
//   const rgbToHex = rgb => "#" + rgb.map(x => x.toString(16).padStart(2, "0")).join("");  

//   return { color: rgbToHex(color), weight: 2 };  
// }  

// // Ejemplo de uso  
// console.log(getColorLINK(110000000000)); // Cambia el valor para probar diferentes resultados

function styleLINK(feature) {
  const { color, weight } = getColorLINK(feature.properties.COD_LINK);
  return { color, weight, opacity: 0.7, dashArray: "0", fillOpacity: 0.5 };
}
function createLegendLINK() {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var labels = [];
    
    // Array con los estilos y sus etiquetas correspondientes
    var styles = [
      { label: "Categorias Indicador", color: "linear-gradient(to right, red, green)" },
      
    ];

    // Genera el contenido HTML de la leyenda
    styles.forEach(function (style) {
      if (style.label === "Categorias Indicador") {
        labels.push(
          '<div><span>' + style.label + '</span><br><i style="width: 100px; height: 20px; background: ' + style.color + '; display: inline-block;"></i></div>'
        );
      } else {
        labels.push(
          '<div><i style="background:' + style.color + '"></i> ' + style.label + '</div>'
        );
      }
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



//Codigo link : COD_LINK - Corresponde al servicio de lusal
// function getColorLINK(COD_LINK) {
//   switch (COD_LINK) {
//         case '102030405060':
//           return { color: '#d7191c', weight: 5 };
//         case '102030405061':
//           return { color: '#d81d1e', weight: 5 };
//         case '102030405160':
//           return { color: '#d92120', weight: 5 };
//         case '102030405161':
//           return { color: '#da2522', weight: 5 };
//         case '102030415060':
//           return { color: '#db2a24', weight: 5 };
//         case '102030415061':
//           return { color: '#dc2e26', weight: 5 };
//         case '102030415160':
//           return { color: '#dd3228', weight: 5 };
//         case '102030415161':
//           return { color: '#de3629', weight: 5 };
//         case '102030425060':
//           return { color: '#df3a2b', weight: 5 };
//         case '102032405061':
//           return { color: '#e13e2d', weight: 5 };
//         case '102131405060':
//           return { color: '#e2422f', weight: 5 };
//         case '102131405061':
//           return { color: '#e34731', weight: 5 };
//         case '102131405160':
//           return { color: '#e44b33', weight: 5 };
//         case '102131405161':
//           return { color: '#e54f35', weight: 5 };
//         case '102131415060':
//           return { color: '#e65337', weight: 5 };
//         case '102131415061':
//           return { color: '#e75739', weight: 5 };
//         case '102131415160':
//           return { color: '#e85b3b', weight: 5 };
//         case '102131415161':
//           return { color: '#e95f3d', weight: 5 };
//         case '102131425060':
//           return { color: '#ea643f', weight: 5 };
//         case '102131425061':
//           return { color: '#eb6840', weight: 5 };
//         case '102131425160':
//           return { color: '#ec6c42', weight: 5 };
//         case '102131425161':
//           return { color: '#ed7044', weight: 5 };
//         case '102132405060':
//           return { color: '#ee7446', weight: 5 };
//         case '102132405061':
//           return { color: '#ef7848', weight: 5 };
//         case '102132405160':
//           return { color: '#f07c4a', weight: 5 };
//         case '102132405161':
//           return { color: '#f1804c', weight: 5 };
//         case '102132415060':
//           return { color: '#f2854e', weight: 5 };
//         case '102132415061':
//           return { color: '#f38950', weight: 5 };
//         case '102132415160':
//           return { color: '#f48d52', weight: 5 };
//         case '102132415161':
//           return { color: '#f59154', weight: 5 };
//         case '102132425060':
//           return { color: '#f69556', weight: 5 };
//         case '102132425061':
//           return { color: '#f79957', weight: 5 };
//         case '102132425160':
//           return { color: '#f89d59', weight: 5 };
//         case '102132425161':
//           return { color: '#f9a15b', weight: 5 };
//         case '102133405060':
//           return { color: '#faa55d', weight: 5 };
//         case '102133405061':
//           return { color: '#fbaa5f', weight: 5 };
//         case '102133405160':
//           return { color: '#fcae61', weight: 5 };
//         case '102133405161':
//           return { color: '#fdb263', weight: 5 };
//         case '102133415060':
//           return { color: '#feb665', weight: 5 };
//         case '102133415061':
//           return { color: '#febc67', weight: 5 };
//         case '102133415160':
//           return { color: '#fecf68', weight: 5 };
//         case '102133415161':
//           return { color: '#fed26a', weight: 5 };
//         case '102133425060':
//           return { color: '#ffd66c', weight: 5 };
//         case '102133425061':
//           return { color: '#ffda6e', weight: 5 };
//         case '102133425160':
//           return { color: '#ffde70', weight: 5 };
//         case '102133425161':
//           return { color: '#ffe272', weight: 5 };
//         case '102134405060':
//           return { color: '#ffe674', weight: 5 };
//         case '102134405061':
//           return { color: '#ffe976', weight: 5 };
//         case '102134405160':
//           return { color: '#ffed78', weight: 5 };
//         case '102134405161':
//           return { color: '#fff17a', weight: 5 };
//         case '102134415060':
//           return { color: '#fff57c', weight: 5 };
//         case '102134415061':
//           return { color: '#fff97e', weight: 5 };
//         case '102134415160':
//           return { color: '#fffd80', weight: 5 };
//         case '102134415161':
//           return { color: '#fef27f', weight: 5 };
//         case '102134425060':
//           return { color: '#fcf67e', weight: 5 };
//         case '102134425061':
//           return { color: '#faea7d', weight: 5 };
//         case '102134425160':
//           return { color: '#f8de7c', weight: 5 };
//         case '102134425161':
//           return { color: '#f6d27b', weight: 5 };
//         case '102135405060':
//           return { color: '#f4c67a', weight: 5 };
//         case '102135405061':
//           return { color: '#f2ba79', weight: 5 };
//         case '102135405160':
//           return { color: '#f0ae78', weight: 5 };
//         case '102135405161':
//           return { color: '#eea277', weight: 5 };
//         case '102135415060':
//           return { color: '#ec9676', weight: 5 };
//         case '102135415061':
//           return { color: '#ea8a75', weight: 5 };
//         case '102135415160':
//           return { color: '#e87e74', weight: 5 };
//         case '102135415161':
//           return { color: '#e67273', weight: 5 };
//         case '102135425060':
//           return { color: '#e46672', weight: 5 };
//         case '102135425061':
//           return { color: '#e25a71', weight: 5 };
//         case '102135425160':
//           return { color: '#e04e70', weight: 5 };
//         case '102135425161':
//           return { color: '#de426f', weight: 5 };
//         case '112131415060':
//           return { color: '#dc366e', weight: 5 };
//         case '112131415061':
//           return { color: '#da2a6d', weight: 5 };
//         case '112131415160':
//           return { color: '#d81e6c', weight: 5 };
//         case '112131415161':
//           return { color: '#d6126b', weight: 5 };
//         case '112131425060':
//           return { color: '#d4066a', weight: 5 };
//         case '112131425061':
//           return { color: '#d20a69', weight: 5 };
//         case '112131425160':
//           return { color: '#d00e68', weight: 5 };
//         case '112131425161':
//           return { color: '#ce1267', weight: 5 };
//         case '112132405060':
//           return { color: '#cc1666', weight: 5 };
//         case '112132405061':
//           return { color: '#ca1a65', weight: 5 };
//         case '112132405160':
//           return { color: '#c81e64', weight: 5 };
//         case '112132405161':
//           return { color: '#c62263', weight: 5 };
//         case '112132415060':
//           return { color: '#c42662', weight: 5 };
//         case '112132415061':
//           return { color: '#c22a61', weight: 5 };
//         case '112132415160':
//           return { color: '#c02e60', weight: 5 };



//       case '122334425161':
//       return { color: '#1a9641', weight: 5 };
//       default:
//       return { color: '#000000', weight: 1 };
//   }
// }

// function styleLINK(feature) {
//   const { color, weight } = getColorLINK(feature.properties.COD_LINK);
//   return { color, weight, opacity: 0.7, dashArray: "0", fillOpacity: 0.5 };
// }
// function createLegendLINK() {
//   var legend = L.control({ position: "bottomright" });

//   legend.onAdd = function () {
//     var div = L.DomUtil.create("div", "info legend");
//     var labels = [];
    
//     // Array con los estilos y sus etiquetas correspondientes
//     var styles = [
//       { label: "Indicador", color: "linear-gradient(to right, red, green)" },
      
//     ];

//     // Genera el contenido HTML de la leyenda
//     styles.forEach(function (style) {
//       if (style.label === "Indicador") {
//         labels.push(
//           '<div><span>' + style.label + '</span><br><i style="width: 100px; height: 20px; background: ' + style.color + '; display: inline-block;"></i></div>'
//         );
//       } else {
//         labels.push(
//           '<div><i style="background:' + style.color + '"></i> ' + style.label + '</div>'
//         );
//       }
//     });

//     div.innerHTML = labels.join("<br>");
//     return div;
//   };

//   // Función para mostrar/ocultar la leyenda
//   function toggleLegend() {
//     if (map.hasLayer(EjesCODLINK)) {
//       legend.addTo(map);
//     } else {
//       legend.remove();
//     }
//   }

//   // Eliminar la leyenda al inicio
//   legend.remove();
//   // Escucha el cambio de estado de la capa
//   map.on("overlayadd overlayremove", toggleLegend);
// }
