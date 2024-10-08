import type { APIRoute } from "astro";
import  {articles} from "../../data/articles.js";
console.log('Loaded articles:', articles[0]); // Debugging


const dataTypes = {
  articles: articles,
};

export const GET: APIRoute = ({ params }) => {
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
