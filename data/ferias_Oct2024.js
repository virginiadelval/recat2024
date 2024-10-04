

function styleFerias(feature) {
    return {  // Aquí necesitas retornar el objeto con las opciones
        icon: 'circle',
        iconShape: 'marker',
        borderColor: '#015CB4',
        textColor: '#015CB4',
        backgroundColor: '#FEFEFFFF',
        innerIconStyle: 'font-size:9px;padding-top:1px;'
    };
}


// funcion popous 
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  //
  function feria_pop(feature, layer) {
    var popupContent =
    //    "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />" +
   "<div style='background-color: #015CB4; color: #fff; padding: 10px; border-radius: 5px;' align='left'>" +
        "<b>" + feature.properties.Name +  "</b>"+ "<br>" +
        "<b> Horarios : </b>" + feature.properties.descriptio + "<br>" +
        "<b> Zona </b>" + feature.properties.layer + "<br>"     +
  
        "<br>  <br>"
  
    "</div>"
    "<div align='center'> <img src=/images/fotos/imgen1.jpeg height=70px width=auto opacity: 0.5/> </div>";
  


    layer.bindPopup(popupContent);
  }
  function eventOpenPopup(e) {
    var layer = e.layer;
    layer.closePopup();
    layer.openPopup();
  }
  

var ferias = {
"type": "FeatureCollection",
"name": "ferias_Oct2024",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "Feria Ceferino", "descriptio": "Se encuentra los días Sábados de 10 a 21 Hs", "layer": "Macrocentro" }, "geometry": { "type": "Point", "coordinates": [ -65.4099866, -24.8118511, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Plaza Alvarado", "descriptio": "Se  realiza 1 vez al Mes", "layer": "Macrocentro" }, "geometry": { "type": "Point", "coordinates": [ -65.4289448, -24.7893279, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Holística", "descriptio": "Se realiza 1 vez al mes", "layer": "Macrocentro" }, "geometry": { "type": "Point", "coordinates": [ -65.4289153, -24.7891039, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Huaico Mirasoles", "descriptio": "Se encuentra todos los Sábados de 14 a 19 y eventualmente los 2 primeros domingos del mes en el horario 14 a 19", "layer": "Norte" }, "geometry": { "type": "Point", "coordinates": [ -65.4165731, -24.7226818, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Miguel Ortiz", "descriptio": "Se encuentra los días Domingos de 09 a 15 Hs", "layer": "Norte" }, "geometry": { "type": "Point", "coordinates": [ -65.4045423, -24.7542896, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Ciudad del Milagro", "descriptio": "Se encuentra los días Viernes de 16 a 20 y Sábados y Domingos de  9 a 15", "layer": "Norte" }, "geometry": { "type": "Point", "coordinates": [ -65.4056799, -24.7202171, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Buñueleros", "descriptio": "Se ubica los días Domingos 10 a 20 Hs", "layer": "Norte" }, "geometry": { "type": "Point", "coordinates": [ -65.4086764, -24.7110904, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Cuchi Leguizamon", "descriptio": "Se encuentra los días Domingo de 9 a 20Hs", "layer": "Oeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4584545, -24.7871742, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Palermo", "descriptio": "Se encuentra los días Domingo de 9 a 20 Hs", "layer": "Oeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4600276, -24.7881058, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Costa Azul ", "descriptio": "Se encuentra los días Viernes de 15 a 20 Hs  ", "layer": "Oeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4511062, -24.7904127, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Juan XXlll", "descriptio": "Se encuentra los días Sábados de 14 a 20 Hs ", "layer": "Oeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4413725, -24.7928071, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Solidaridad", "descriptio": "Descripción: Se encuentra los días Lunes y Viernes de 10 a 22<br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.3966761, -24.8428497, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Soli la 1", "descriptio": "Descripción: Se encuentra los días Domingos de 9 a 22<br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4040779, -24.8446726, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria San Francisco Solano", "descriptio": "Descripción: Se encuentra los días Martes y Jueves de 8 a 22<br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.3951035, -24.828436, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Gauchito Gil", "descriptio": "Descripción: Se encuentra los días Miércoles de 14 a 22<br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.3869319, -24.8400139, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Santa Cecilia ", "descriptio": "Descripción: Se encuentra los días Sábados de 9 a 20 hs<br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4034607, -24.8297432, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Sitta", "descriptio": "Descripción: Se encuentra los días Lunes y Viernes de 10 a 22 <br>nombre: <br>descripción:", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.3961606, -24.8389962, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria \"LA PAZ\"", "descriptio": "Descripción: <br>nombre: Feria \"LA PAZ\"<br>descripción: Se ubica los días Sábados de 15 a 20", "layer": "Sudeste" }, "geometry": { "type": "Point", "coordinates": [ -65.4072691, -24.8403764, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria San Luis", "descriptio": "Se encuentra los días Domingos de 14 a 20 Hs", "layer": "Sur" }, "geometry": { "type": "Point", "coordinates": [ -65.5131465, -24.8476559, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Villa Esmeralda", "descriptio": "Se encuentra los días Sábados de 10 a 20 hs", "layer": "Sur" }, "geometry": { "type": "Point", "coordinates": [ -65.4880836, -24.8443475, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Limache", "descriptio": "Se encuentra los días Domingos de 10 a 16:30", "layer": "Sur" }, "geometry": { "type": "Point", "coordinates": [ -65.4323573, -24.857717, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Santa Ana 1 ", "descriptio": "Se encuentra los días Sábados de 15 a 20 Hs", "layer": "Sur" }, "geometry": { "type": "Point", "coordinates": [ -65.4710263, -24.8630205, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Trueque Santa Ana", "descriptio": "Se encuentra los días Sábados de 15 a 20 Hs", "layer": "Sur" }, "geometry": { "type": "Point", "coordinates": [ -65.4753465, -24.8708899, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Economía Popular", "descriptio": "Se ubica los días Viernes y Sábado.\nSábados de por medio compartidos con la salteñita (Verificar cronograma) \n08:30 a 20:30", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4031159, -24.7938996, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "La Salteñita", "descriptio": "Se ubica los días Sábados y Domingos.\nSábados de por medio compartidos con  Economía popular (Verificar cronograma)\n08:30 a 20:30 Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.403073, -24.7939581, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "A.d.e.m.u.s", "descriptio": "Se ubica los días Sábados de 11 a 22 Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4051866, -24.794075, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Balcarce (Artesanal)", "descriptio": "Se encuentra los días Domingos de 09 a 21 Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4111678, -24.7777916, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Ameghino (Artesanal)", "descriptio": "Se encuentra los días Domingos de 09 a 21Hs ", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4116193, -24.7775428, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Paseo Güemes (Artesanal) ", "descriptio": "Se encuentra los días Sábado y Domingos de 9 a 21 Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4116208, -24.7826756, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Paseo de los Poetas \"Artesanal\"", "descriptio": "Se encuentra los días Sábados y Domingos de 9 a 21hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4190207, -24.7916855, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria las 3 Ases \"Social\"", "descriptio": "Se encuentra los días Lunes a Sábado de 09 a13 hs y 17 a 21Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.415269, -24.7926255, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria del Sol \"Social\" ", "descriptio": "Se encuentra los días Lunes a Sábados de 9 a 13 y 17 a 21 Hs", "layer": "Zona Centro" }, "geometry": { "type": "Point", "coordinates": [ -65.4140747, -24.7940798, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Los Gauchos", "descriptio": "Se encuentra los días Sábados de 10 a 20 Hs ", "layer": "Zona Este" }, "geometry": { "type": "Point", "coordinates": [ -65.3744798, -24.7978475, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Trueque Constitucion", "descriptio": "Se encuentra los días Sábados de 15 a 19Hs", "layer": "Zona Este" }, "geometry": { "type": "Point", "coordinates": [ -65.3746965, -24.7984385, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Autodromo", "descriptio": "Se encuentra los días Sábados  de 9 a 19", "layer": "Zona Este" }, "geometry": { "type": "Point", "coordinates": [ -65.3724331, -24.7966997, 0.0 ] } }
]
}
