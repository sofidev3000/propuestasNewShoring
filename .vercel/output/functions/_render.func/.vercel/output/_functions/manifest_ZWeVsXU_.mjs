import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './js/themes/nearshoringtheme/chunks/astro-designed-error-pages.CHVe2GDq.js';
import 'es-module-lexer';
import { d as decodeKey } from './js/themes/nearshoringtheme/chunks/astro/server.D03Zzjx8.js';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sofidev/trabajo/newshoringPropuesta/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/js/themes/nearshoringtheme/page.D2ytOAYA.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/js/themes/nearshoringtheme/page.D2ytOAYA.js"}],"styles":[],"routeData":{"route":"/api/[datatype]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"dataType","dynamic":true,"spread":false}]],"params":["dataType"],"component":"src/pages/api/[dataType].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/js/themes/nearshoringtheme/hoisted.Drajrkdb.js"},{"type":"external","value":"/js/themes/nearshoringtheme/page.D2ytOAYA.js"}],"styles":[{"type":"external","src":"/_astro/index.BXOSg9zN.css"},{"type":"inline","content":".carousel-container{margin:auto;height:auto;overflow-x:hidden;position:relative}.carousel-container:before,.carousel-container:after{content:\"\";position:absolute;top:0;z-index:2;width:70px;height:100%}.carousel-container:before{left:0;background:linear-gradient(to right,#000,#00000031)}.carousel-container:after{right:0;background:linear-gradient(to left,#000,#00000031)}.carrusel{width:-moz-max-content!important;width:max-content!important;display:flex;animation:scroll 40s linear infinite}.carrusel:has(>.carusel-element:hover){animation-play-state:paused}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}.carrusel>div{flex:0 0 auto}\n.popover:before{content:\"\";position:absolute;bottom:100%;left:50%;transform:translate(-50%);border-width:8px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.84) transparent}.modal-weather{position:fixed;z-index:3000;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#000000b3}.modal-content-weather{border-radius:20px;background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:50%;max-width:600px;color:#000}.alert-weather{background-color:red;position:absolute;padding:10px;border-radius:5px;font-weight:700;font-size:14px;top:20px}.alert-hide{left:-100%;transition:all .3s ease-in-out}.alert-show{left:10px;transition:all .3s ease-in-out}\n.modal{position:fixed;z-index:10000;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000000b3}.modal-content{position:absolute;bottom:0;background-color:#fff;color:#000;margin:20px;padding:20px;border:1px solid #888;width:350px;border-radius:5px;box-shadow:0 4px 8px #0003}.modal-content-cookies-cont{max-height:70%;overflow:auto}.modal-content-cookies{position:relative;background-color:#fff;color:#000;margin:15% auto;border:1px solid #888;width:500px;max-width:500px;height:400px;max-height:400px;border-radius:5px;box-shadow:0 4px 8px #0003}.modal-content-cookies-btns{position:absolute;bottom:0;right:0}.show{height:auto}.hide{height:0}.checkStyle{border-radius:21px;width:30px;padding:11px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://newshoring.com/","base":"/","trailingSlash":"ignore","compressHTML":false,"componentMetadata":[["/home/sofidev/trabajo/newshoringPropuesta/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/[dataType]@_@ts":"pages/api/_datatype_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/sofidev/trabajo/newshoringPropuesta/node_modules/astro/dist/env/setup.js":"js/themes/nearshoringtheme/chunks/astro/env-setup.Cr6XTFvb.js","/home/sofidev/trabajo/newshoringPropuesta/node_modules/@astrojs/react/vnode-children.js":"js/themes/nearshoringtheme/chunks/vnode-children.BkR_XoPb.js","\u0000@astrojs-manifest":"manifest_ZWeVsXU_.mjs","@components/atoms/BannerCoockies/BannerCoockies":"js/themes/nearshoringtheme/BannerCoockies.BNzeLsnH.js","@molecules/Weather/WeatherPopover":"js/themes/nearshoringtheme/WeatherPopover.BU6Hftl2.js","@atoms/IndicadoresCarousel/IndicadoresCarousel":"js/themes/nearshoringtheme/IndicadoresCarousel.CfkcqDX5.js","@components/atoms/ToogleLanguage/ToggleLanguage":"js/themes/nearshoringtheme/ToggleLanguage.DzVqurwd.js","@astrojs/react/client.js":"js/themes/nearshoringtheme/client.-DDK-fPu.js","/astro/hoisted.js?q=0":"js/themes/nearshoringtheme/hoisted.Drajrkdb.js","astro:scripts/page.js":"js/themes/nearshoringtheme/page.D2ytOAYA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BXOSg9zN.css","/favicon.svg","/favicon.svg:Zone.Identifier","/pexels-leofallflat-1737957.jpg","/pexels-leofallflat-1737957.jpg:Zone.Identifier","/fonts/FjallaOne-Regular.otf","/fonts/FjallaOne-Regular.otf:Zone.Identifier","/fonts/VremenaGrotesk.otf","/fonts/VremenaGrotesk.otf:Zone.Identifier","/fonts/VremenaGroteskBold.otf","/fonts/VremenaGroteskBold.otf:Zone.Identifier","/fonts/VremenaGroteskMedium.otf","/fonts/VremenaGroteskMedium.otf:Zone.Identifier","/img/favicon.svg","/img/favicon.svg:Zone.Identifier","/img/logo/logov-2.svg","/img/logo/logov-2.svg:Zone.Identifier","/img/logo/nearShoringLogoBlack.svg","/img/logo/nearShoringLogoBlack.svg:Zone.Identifier","/img/logo/nearShoringLogoWhite.svg","/img/logo/nearShoringLogoWhite.svg:Zone.Identifier","/img/near/coockiesImg.svg","/img/near/coockiesImg.svg:Zone.Identifier","/js/themes/nearshoringtheme/BannerCoockies.BNzeLsnH.js","/js/themes/nearshoringtheme/IndicadoresCarousel.CfkcqDX5.js","/js/themes/nearshoringtheme/ToggleLanguage.DzVqurwd.js","/js/themes/nearshoringtheme/WeatherPopover.BU6Hftl2.js","/js/themes/nearshoringtheme/client.-DDK-fPu.js","/js/themes/nearshoringtheme/hoisted.Drajrkdb.js","/js/themes/nearshoringtheme/page.D2ytOAYA.js","/js/themes/nearshoringtheme/chunks/index.DhYZZe0J.js","/js/themes/nearshoringtheme/chunks/jsx-runtime.7faW4zRM.js","/js/themes/nearshoringtheme/page.D2ytOAYA.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"xujS2E9xueEeL1y7v2ZwhtkPgmH0ZaXRLRLe13tR3f4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
