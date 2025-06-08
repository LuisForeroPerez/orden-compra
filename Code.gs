function doPost(e) {
  const hoja = SpreadsheetApp.openById('1yu9InmpDpF2yMz6RN83wgoKObNGSZKiqQTZlWfm1YOg').getSheetByName('Formulario');
  const datos = JSON.parse(e.postData.contents);
  hoja.appendRow([
    new Date(),
    datos.nombre,
    datos.telefono,
    datos.direccion,
    datos.ciudad,
    datos.email,
    datos.productos,
    datos.total
  ]);
  return ContentService.createTextOutput("Orden guardada");
}
