import { useEffect, useRef } from "react";

const Reloj = () => {
const h1 = useRef<HTMLDivElement>(null);

const tiempo = (): string => {
const fechahora = new Date();
let hora: number | string = fechahora.getHours();
let minuto: number | string = fechahora.getMinutes();
let segundo: number | string = fechahora.getSeconds();
if (hora < 10) hora = "0" + hora;
if (minuto < 10) minuto = "0" + minuto;
if (segundo < 10) segundo = "0" + segundo;
return `${hora}:${minuto}:${segundo}`;
};

useEffect(() => {
const cl = setInterval(() => {
if (h1.current) {
h1.current.innerHTML = tiempo();
}
}, 1000);
return () => clearInterval(cl);
}, []);

return (
<div style={{ fontSize: "1.3vw" }} ref={h1}>
{tiempo()}
</div>
);
};

export default Reloj;