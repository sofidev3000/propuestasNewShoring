export { renderers } from '../../renderers.mjs';

const articles = [
    {
        id: 1,
        title: "Nearshoring y electromovilidad impulsan crecimiento de mercado industrial en...",
        excerpt: "Sin embargo, el robustecimiento de la infraestructura de energía eléctrica...",
        author: "Global Media",
        date: "Octubre 08, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/08102024/f6306611f2.webp"
    },
    {
        id: 2,
        title: "Industria del mueble y colchones triplicó IED por nearshoring ...",
        excerpt: "La industria mueblera logró triplicar sus inversiones a 63 millones...",
        author: "Global Media",
        date: "Septiembre 26, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/30092024/902ed0270d.webp"
    },
    {
        id: 3,
        title: "Alemania endurece controles fronterizos para regularizar migración y mejorar seguridad...",
        excerpt: "Alemania implementará controles temporales en fronteras para regularizar la migración,...",
        author: "Global Media",
        date: "Septiembre 20, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/10092024/e14b31e102.webp"
    },
    {
        id: 4,
        title: "Inglaterra y Gales liberan 1,750 prisioneros para reducir el hacinamiento...",
        excerpt: "El Gobierno laborista de Keir Starmer liberará a 1,750 prisioneros...",
        author: "Global Media",
        date: "Septiembre 20, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/10092024/bb1e746118.webp"
    },
    {
        id: 5,
        title: "Díaz-Canel y Cuba apoyan a Maduro tras confiscación de avión...",
        excerpt: "Cuba y aliados rechazan la confiscación del avión de Maduro...",
        author: "Global Media",
        date: "Septiembre 20, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/04092024/1fa4aab44c.webp"
    },
    {
        id: 4,
        title: "Inglaterra y Gales liberan 1,750 prisioneros para reducir el hacinamiento...",
        excerpt: "El Gobierno laborista de Keir Starmer liberará a 1,750 prisioneros...",
        author: "Global Media",
        date: "Septiembre 20, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/10092024/bb1e746118.webp"
    },
    {
        id: 5,
        title: "Díaz-Canel y Cuba apoyan a Maduro tras confiscación de avión...",
        excerpt: "Cuba y aliados rechazan la confiscación del avión de Maduro...",
        author: "Global Media",
        date: "Septiembre 20, 2024",
        featureImage: "https://nxt-global-media.s3.amazonaws.com/near/images/04092024/1fa4aab44c.webp"
    }
];

console.log("Loaded articles:", articles[0]);
const dataTypes = {
  articles
};
const GET = ({ params }) => {
  const data = params.dataType;
  if (data === "all") {
    return new Response(
      JSON.stringify({ data: dataTypes }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  if (!dataTypes[data]) {
    return new Response(
      JSON.stringify({ status: 404, message: "Data type not found" }),
      { headers: { "Content-Type": "application/json" }, status: 404 }
    );
  }
  return new Response(
    JSON.stringify({ [data]: dataTypes[data] }),
    { headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
