export const numberScala = (number) => {
  const k = Math.pow(10,3);
  const M = Math.pow(10,6);
  const G = Math.pow(10,9);
  let bandera = "";
  if (number < k) 
    bandera = number;
  else if (number < M) 
    bandera = (number/k).toFixed(1) + ' k';
  else if (number < G) 
    bandera = (number/M).toFixed(1) + ' M';
  else
    bandera = (number/G).toFixed(1) + ' G';
  return bandera;
}