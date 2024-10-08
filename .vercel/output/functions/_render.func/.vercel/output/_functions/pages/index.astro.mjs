/* empty css                                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, e as renderComponent, f as renderSlot, s as spreadAttributes, g as renderHead } from '../js/themes/nearshoringtheme/chunks/astro/server.D03Zzjx8.js';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const url = "https://propuestas-new-shoring.vercel.app/api/articles" ;
  const response = await fetch(url);
  const data = await response.json();
  const articles = data.articles;
  return renderTemplate`${maybeRenderHead()}<div class="w-full !border-[--secundary-color] pt-10 pb-3 border-t-4 border-b self-center my-10" data-astro-cid-szbkhomv>
  <h2 class="text-left text-3xl font-extrabold text-[--guardsman-red-500]" id="near-now" data-astro-cid-szbkhomv>
    NEAR NOW!
  </h2>
</div>
<section class="w-full max-w-[1600px] flex items-start justify-between gap-5 text-[secundary-color]" data-astro-cid-szbkhomv>
  <div class="flex flex-1 flex-col w-full basis-[85%]" data-astro-cid-szbkhomv>
    ${articles.length > 0 ? articles.splice(0, 1).map((article, index) => renderTemplate`<article class="card w-full  mb-6  p-4 rounded  *:text-center group" data-astro-cid-szbkhomv>
            <div class="img__container w-full h-[599.92px] overflow-hidden  " data-astro-cid-szbkhomv>
              <img${addAttribute(article.featureImage, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover rounded mb-4 group-hover:scale-110 ease-in duration-300" data-astro-cid-szbkhomv>
            </div>
            <h3 class="main-title group-hover:underline tracking-wide text-[1.375rem] font-Merriweather text-center font-[600] my-5 " data-astro-cid-szbkhomv>
                ${article.title}
              
            </h3>
            <div class="flex flex-col items-center justify-between text-sm text-[--secundary-color]" data-astro-cid-szbkhomv>
              <p class="text-[0.75rem]" data-astro-cid-szbkhomv>Por  <span class="font-WorkSans font-[600] text-[--text-spans]" data-astro-cid-szbkhomv>${article.author}</span>${" "}
              </p>
            </div>
          </article>`) : renderTemplate`<p class="text-gray-600" data-astro-cid-szbkhomv>No articles available.</p>`}
    <div class="border-b border-[--divider-secundary] w-full my-5" data-astro-cid-szbkhomv></div>
    <div class="grid grid-rows-2 grid-flow-col gap-2" data-astro-cid-szbkhomv>
      ${articles.length > 0 ? articles.splice(0, 4).map((article, index) => renderTemplate`<article class="flex items-start w-full max-w-[498.95px]  mb-6  p-4 rounded *:text-left" data-astro-cid-szbkhomv>
              <div class="w-[88px] h-[88px] min-w-[88px] min-h-[88px] mr-[16px] mb-[16px] overflow-hidden group " data-astro-cid-szbkhomv>
                <img${addAttribute(article.featureImage, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover rounded mb-4 group-hover:scale-110 ease-in duration-300" data-astro-cid-szbkhomv>
              </div>

              <div class="flex flex-col items-start justify-center text-sm text-[--secundary-color]" data-astro-cid-szbkhomv>
                <h3 class=" text-[0.9375rem]  font-bold font-Merriweather text-left mb-2" data-astro-cid-szbkhomv>
                  ${article.title}
                </h3>
                <p class="text-[0.75rem] " data-astro-cid-szbkhomv>
                  Por <span class="font-WorkSans font-[600] text-[--text-spans]" data-astro-cid-szbkhomv>${article.author}</span>
                </p>
              </div>
            </article>`) : renderTemplate`<p class="text-gray-600" data-astro-cid-szbkhomv>No articles available.</p>`}
    </div>
  </div>

  <div class="hidden xl:flex h-full min-h-[100dvh] border-l border-1 border-[--divider-secundary]" data-astro-cid-szbkhomv>
  </div>
  <div class="basis-[35%] flex flex-col items-center justify-between" data-astro-cid-szbkhomv>
    ${articles.length > 0 ? articles.splice(0, 2).map((article, index) => renderTemplate`<article class="card w-full  mb-6  p-4 rounded *:text-left" data-astro-cid-szbkhomv>
            <div class="w-[485.27px] h-[272.95px] overflow-hidden group " data-astro-cid-szbkhomv>
              <img${addAttribute(article.featureImage, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover rounded mb-4 group-hover:scale-110 ease-in duration-300" data-astro-cid-szbkhomv>
            </div>
            <h3 class=" text-[1.125rem] mt-5 mb-4 font-bold font-Merriweather text-left" data-astro-cid-szbkhomv>
              ${article.title}
            </h3>
            <div class="flex flex-col items-left justify-between text-sm text-[--secundary-color]" data-astro-cid-szbkhomv>
              <p class="text-[0.75rem]" data-astro-cid-szbkhomv>
                Por  <span class="font-WorkSans font-[600] text-[--text-spans]" data-astro-cid-szbkhomv> ${article.author}</span>
              </p>
            </div>
          </article>`) : renderTemplate`<p class="text-gray-600" data-astro-cid-szbkhomv>No articles available.</p>`}
  </div>
</section>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/Articles/Articles.astro", void 0);

const $$Astro$d = createAstro("https://newshoring.com/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Button;
  const { text = "your text", type = "button", ID, clase = "px-3 py-1", rounded = "rounded-[7px] " } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(ID, "id")}${addAttribute(`bg-[--button-base] text-sm hover:bg-[--button-hover] :activebg-[--button-active] text-[--button-color] font-bold ${rounded}   ${clase}`, "class")}>
    ${text}
</button>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/Button/Button.astro", void 0);

const $$SocialMediaIcons = createComponent(($$result, $$props, $$slots) => {
  const icons = [
    {
      name: "Facebook",
      url: "#",
      icon: "ri:facebook-fill"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "ri:twitter-x-fill"
    },
    {
      name: "Instagram",
      url: "#",
      icon: "basil:instagram-solid"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "uil:linkedin"
    },
    {
      name: "tiktok",
      url: "#",
      icon: "ic:sharp-tiktok"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="icons " class="flex justify-center items-center gap-4">
  ${icons.map((data) => renderTemplate`<a${addAttribute(data.url, "href")} target="_blank" rel="nofollow noreferrer noopener" class="w-[24px]   flex items-center justify-center p-1 bg-[--button-base] hover:bg-[--button-hover] hover:scale-125 rounded-full">
        ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": data.icon, "width": "15", "height": "15" })}
      </a>`)}
</div>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/SocialMediaIcons/SocialMediaIcons.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`

${maybeRenderHead()}<button id="themeToggle" data-astro-cid-6kksn2au>
  ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "sun", "icon": "bxs:sun", "width": "25", "height": "25", "data-astro-cid-6kksn2au": true })}
  ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "moon", "icon": "bxs:moon", "width": "25", "height": "25", "data-astro-cid-6kksn2au": true })}
</button>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/ThemeIcon/ThemeIcon.astro", void 0);

const $$Astro$c = createAstro("https://newshoring.com/");
const $$FormLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FormLabel;
  const { color, labelFor, extraClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(` flex text-sm ${extraClass} text-${color}`, "class")}${addAttribute(labelFor, "for")}>
    ${renderSlot($$result, $$slots["default"])}
</label>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/formAtoms/FormLabel.astro", void 0);

const $$Astro$b = createAstro("https://newshoring.com/");
const $$Inputemail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Inputemail;
  const { extraClass = "mb-3" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(` ${extraClass} `, "class")} type="email" id="email" name="email" placeholder="Tu email" required>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/formAtoms/Inputemail.astro", void 0);

const $$Astro$a = createAstro("https://newshoring.com/");
const $$ErrorMessage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ErrorMessage;
  const { errorType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="text-sm text-red-600 hidden mb-2"${addAttribute(`${errorType}-error`, "id")}></span>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/formAtoms/ErrorMessage.astro", void 0);

const $$FormCheckbox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<input type="checkbox" id="terms" name="terms" class="form-checkbox checked:accent-guardsman-red-700 mr-2" required data-astro-cid-agtkvulr>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/formAtoms/FormCheckbox.astro", void 0);

const $$Astro$9 = createAstro("https://newshoring.com/");
const $$SuscribeForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SuscribeForm;
  const { direction = "flex-col", color = "white" } = Astro2.props;
  return renderTemplate`

${maybeRenderHead()}<form id="subscribe-form" method="POST" action="/" novalidate${addAttribute(`subscribe-form flex flex-1 ${direction} items-start  justify-center   `, "class")}>
  ${renderComponent($$result, "FormLabel", $$FormLabel, { "color": color, "labelFor": "email" }, { "default": ($$result2) => renderTemplate`
    Ingresa tu correo electrónico
  ` })}
  ${renderComponent($$result, "Inputemail", $$Inputemail, { "color": color })}
  ${renderComponent($$result, "ErrorMessage", $$ErrorMessage, { "errorType": "email" })}

  ${renderComponent($$result, "FormLabel", $$FormLabel, { "color": color, "labelFor": "terms", "extraClass": "flex items-center  mb-3" }, { "default": ($$result2) => renderTemplate`
   ${renderComponent($$result2, "FormCheckbox", $$FormCheckbox, {})}
    <span${addAttribute(`text-xs  text-${color}`, "class")}>Aceptar términos y condiciones</span>
  ` })}

  ${renderComponent($$result, "ErrorMessage", $$ErrorMessage, { "errorType": "terms" })}

  ${renderComponent($$result, "Button", $$Button, { "text": "Suscribirse", "ID": "send-btn", "type": "submit", "clase": "self-start py-2 px-1" })}
</form>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/SuscribeForm/SuscribeForm.astro", void 0);

const $$PopupSuscribe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<dialog id="suscribe-modal" class="glassmorphism relative bg-[--background-glass] w-full max-w-[55rem] min-h-10 z-50 p-10  top-[30%] bottom-0 left-[50%] translate-x-[-50%] rounded-lg">
<i class="fa-solid fa-circle-xmark absolute top-3 left-[94%] z-[300] text-2xl cursor-pointer hover:scale-90 text-white hover:text-red-600" id="close-modal"></i>
  <div class="flex gap-5">
    <div class="flex flex-col items-strat justify-center *:text-[--main-color] w-[27rem] space-y-4 last:mb-0 *:text-white">
      <h2 class="text-3xl font-bold">
        ¡Mantente al tanto de las últimas noticias y tendencias!
      </h2>
      <p class="text-sm font-normal">
        Suscríbete a nuestra NewsLetter para recibir actualizaciones sobre
        Nearshoring, finanzas y más.
      </p>
    </div>
        ${renderComponent($$result, "SuscribeForm", $$SuscribeForm, {})}
  </div>
</dialog>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/molecules/PopupSuscribe/PopupSuscribe.astro", void 0);

const $$TopBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`
${maybeRenderHead()}<header id="top-bar" class="relative hidden space-y-3 lg:space-y-0 flex-col lg:flex-row  lg:flex justify-center md:justify-between items-center bg-black text-white w-full mb-2 min-h-12 px-5 py-2 ">
  <div class="flex gap-3 items-center flex-wrap w-[30rem]">
    ${renderComponent($$result, "WeatherPopover", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@molecules/Weather/WeatherPopover", "client:component-export": "default" })}
  </div>
  <div class="indicadores__carousel w-80">
    ${renderComponent($$result, "IndicadoresCarousel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@atoms/IndicadoresCarousel/IndicadoresCarousel", "client:component-export": "default" })}
  </div>
  <div class="social-media flex  gap-2 pl-0 list-none">
    ${renderComponent($$result, "SocialMediaIcons", $$SocialMediaIcons, {})}
    ${renderComponent($$result, "Button", $$Button, { "text": "Suscr\xEDbete", "ID": "suscribe-btn", "clase": "px-2" })}
    <div class="icons flex gap-1">
      ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}
      ${renderComponent($$result, "ToggleLanguage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/atoms/ToogleLanguage/ToggleLanguage", "client:component-export": "default" })}
    </div>
    ${renderComponent($$result, "PopupSuscribe", $$PopupSuscribe, {})}
  </div>
</header>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/TopBar/TopBar.astro", void 0);

const SITE_TITLE = "NewShoring";
const SITE_DESCRIPTION = "Noticias de Newshoring y negocios";

const $$Astro$8 = createAstro("https://newshoring.com/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = "/public/img/city.jpg"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/png" href="/public/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>


<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- css librerias/ cdn -->
 <!-- Flow Bite -->
<link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
<!-- Aos animation -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<!-- Iconify CDN -->


`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/BaseHead.astro", void 0);

const $$Astro$7 = createAstro("https://newshoring.com/");
const $$ImageLazy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ImageLazy;
  const { src, srcWebp, className, width, height, classNameImage, watermark = true } = Astro2.props;
  var hasWatermark = "after:content-[''] after:absolute after:top-2 after:right-2 after:z-10 after:w-1/5 after:h-auto after:bg-contain after:bg-watermark after:bg-no-repeat";
  if (!watermark) {
    hasWatermark = "";
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`load-image-container block h-0 ${hasWatermark} ${className}`, "class")}>
  <div class="loader-icon  top-1/2 left-1/2 w-1/4 h-1/4 transform -translate-x-1/2 -translate-y-1/2">
    <div class="lds-facebook block relative m-auto bg-transparent w-full h-auto">
      <div></div><div></div><div></div>
    </div>
  </div>

  <img${addAttribute(`lazy absolute top-0 left-0 w-full ${classNameImage}`, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")} data-loaded="visible-image"${addAttribute(src, "data-src")}${addAttribute(srcWebp, "data-webp-src")} alt="" src="">
</div>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/extras/ImageLazy.astro", void 0);

const $$Astro$6 = createAstro("https://newshoring.com/");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    animationdirection = "fade-right",
    textColor = "[--secundary-color]",
    fontSize = "",
    fontSizeSlogan = "",
    isMobile = false
  } = Astro2.props;
  return renderTemplate`${isMobile ? renderTemplate`${maybeRenderHead()}<a${addAttribute(animationdirection, "data-aos")} href="/"${addAttribute(`flex  w-fit flex-col  -top-[1.4rem] font-normal text-${textColor} relative w-[40%] min-w-[15rem]`, "class")}>
        ${renderComponent($$result, "ImageLazy", $$ImageLazy, { "src": "/img/logo/nearShoringLogoBlack.svg", "width": "200", "height": "114", "className": "pt-5 relative ", "classNameImage": "logo__img--mobile", "slot": "image" })}
    </a>` : renderTemplate`<a${addAttribute(animationdirection, "data-aos")} href="/"${addAttribute(`logo hidden md:flex flex-col w-[43%] max-w-[30rem] 2xl:max-w-[45rem]`, "class")}>
      ${renderComponent($$result, "ImageLazy", $$ImageLazy, { "src": "/img/logo/nearShoringLogoBlack.svg", "width": "200", "height": "114", "className": "pt-[20%] relative ", "classNameImage": "h-full logo__img", "slot": "image" })}
    </a>`}`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/Logo/Logo.astro", void 0);

const $$Astro$5 = createAstro("https://newshoring.com/");
const $$DropdownButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropdownButton;
  const { dropdown, url, text, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`${id}-button`, "id")}${addAttribute(`${id}-menu`, "data-dropdown-toggle")} data-dropdown-trigger="hover" class="flex items-center    font-sans text-white hover:text-[--guardsman-red-500] transition-colors" type="button">
  ${text}
  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
  </svg>
</button>

<!-- Dropdown menu -->
<div${addAttribute(`${id}-menu`, "id")} class="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow-md w-44 bg-gray-950">
  <ul class="py-2 text-lg md:text-sm text-gray-200 dark:text-gray-200 "${addAttribute(`${id}-button`, "aria-labelledby")}>
    ${dropdown.map((menuItem) => renderTemplate`<li class="first:text-[--guardsman-red-500]">
          <a${addAttribute(menuItem.url, "href")} class=" block px-4 py-2 hover:bg-gray-800  hover:text-[--guardsman-red-500] ">
            ${menuItem.text}
          </a>
        </li>`)}
  </ul>
</div>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/DropDown/DropdownButton.astro", void 0);

const $$Astro$4 = createAstro("https://newshoring.com/");
const $$DropdownLevel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownLevel;
  const { dropdown, text, id, placement = "right-start" } = Astro2.props;
  return renderTemplate`<!-- Botón principal del dropdown -->${maybeRenderHead()}<button${addAttribute(`${id}-multiLevelDropdownButton`, "id")}${addAttribute(`${id}-multi-dropdown`, "data-dropdown-toggle")} class="flex items-center    font-sans text-white hover:text-[--guardsman-red-500] transition-colors" type="button">
  ${text}
  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
  </svg>
</button>

<!-- Menú desplegable -->
<div${addAttribute(`${id}-multi-dropdown`, "id")} class="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow-md w-auto bg-gray-950 ">
  <ul class="py-2 text-lg md:text-sm text-gray-200 w-full "${addAttribute(`${id}-multiLevelDropdownButton`, "aria-labelledby")}>
    ${dropdown.map((item, index) => renderTemplate`<li>
        ${item.elements ? renderTemplate`<button${addAttribute(`${id}-doubleDropdownButton-${index}`, "id")}${addAttribute(`${id}-doubleDropdown-${index}`, "data-dropdown-toggle")} data-dropdown-trigger="hover"${addAttribute(placement, "data-dropdown-placement")} type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-800  dark:hover:bg-gray-600 hover:text-[--guardsman-red-500]">
              ${item.text}
              <svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
              </svg>
            </button>
            <div${addAttribute(`${id}-doubleDropdown-${index}`, "id")} class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-md w-52 bg-gray-950 ">
              <ul class="w-full py-2 text-sm text-gray-200 dark:text-gray-200"${addAttribute(`${id}-doubleDropdownButton-${index}`, "aria-labelledby")}>
                ${item.elements.map((subItem, subIndex) => renderTemplate`<li class="first:text-[--guardsman-red-500]">
                    <a${addAttribute(subItem.url, "href")} class=" block px-4 py-2 hover:bg-gray-800  hover:text-[--guardsman-red-500] ">
                      ${subItem.text}
                    </a>
                  </li>`)}
              </ul>
            </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="header__link sub__link block px-3 py-2 hover:bg-gray-800  hover:text-[--guardsman-red-500]">
            ${item.text}
          </a>`}
      </li>`)}
  </ul>
</div>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/DropdownLevel/DropdownLevel.astro", void 0);

const $$Astro$3 = createAstro("https://newshoring.com/");
const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavMenu;
  Astro2.url.pathname;
  const { placement } = Astro2.props;
  const menuItems = [
    {
      text: "Near Now!",
      url: "#near-now"
    },
    {
      text: "Industr\xEDas",
      elements: [
        { text: "Industr\xEDas", url: "#industrias" },
        { text: "Aeroespacial", url: "/" },
        { text: "Automotriz", url: "/" },
        { text: "Electrodom\xE9sticos", url: "/" },
        { text: "Electr\xF3nica", url: "/" },
        { text: "M\xE9dico", url: "/" },
        { text: "Textil", url: "/" }
      ]
    },
    {
      text: "Energ\xEDa",
      elements: [
        { text: "Energ\xEDa", url: "#energia" },
        { text: "El\xE9ctrica", url: "/" },
        { text: "E\xF3lica", url: "/" },
        { text: "Solar", url: "/" }
      ]
    },
    {
      text: "Finanzas",
      url: "#finanzas"
    },
    {
      text: "Video",
      url: "#video"
    },
    {
      text: "Log\xEDstica y Transporte",
      elements: [
        { text: "Log\xEDstica y Transporte", url: "#logistica-y-transporte" },
        { text: "Aero", url: "/" },
        { text: "Mar\xEDtimo", url: "/" },
        { text: "Terrestre", url: "/" }
      ]
    },
    {
      text: "Parques Industriales",
      elements: [
        { text: "Parques Industriales", url: "#parques-industriales" },
        { text: "construcci\xF3n", url: "/" },
        { text: "Inmuebles", url: "/" },
        { text: "Manufactura", url: "/" }
      ]
    },
    {
      text: "Capital Humano",
      url: "capital-humano",
      elements: [
        { text: "Capital Humano", url: "#capital-humano" },
        { text: "Capacitaci\xF3n", url: "/" },
        { text: "Certificaci\xF3n", url: "/" },
        { text: "Coaching", url: "/" },
        { text: "Leyes y reglamentos", url: "/" },
        { text: "Reglamentaci\xF3n", url: "/" }
      ]
    },
    {
      text: "ESG",
      url: "#esg",
      elements: [
        { text: "ESG", url: "#esg" },
        { text: "Gobierno Corporativo", url: "/" },
        { text: "Inclusi\xF3n", url: "/" },
        { text: "Sustentabilidad", url: "/" }
      ]
    }
  ];
  const mainMenuItems = menuItems.slice(0, 9);
  const moreMenuItems = menuItems.slice(4, 0);
  const randomNum = Math.floor(Math.random() * 1e3);
  return renderTemplate`${maybeRenderHead()}<nav>
    <ul class="flex flex-col lg:flex-row w-full  md:h-auto font-medium md:space-x-4 rtl:space-x-reverse  md:mt-0 md:border-0 space-y-4 md:space-y-0">

      ${mainMenuItems.map((menuItem, index) => renderTemplate`<li class="">
            ${menuItem.url ? renderTemplate`<a${addAttribute(menuItem.url, "href")} class="header__link font-sans text-white hover:text-[--guardsman-red-500] transition-colors">
                ${menuItem.text}
              </a>` : renderTemplate`${renderComponent($$result, "DropdownButton", $$DropdownButton, { "id": `dropdown-${index}-${randomNum}`, "text": menuItem.text, "dropdown": menuItem.elements })}`}
          </li>`)}

      ${moreMenuItems.length > 0 && renderTemplate`<li>
            ${renderComponent($$result, "DropdownLevel", $$DropdownLevel, { "id": `dropdown-more ${randomNum}`, "text": "More", "dropdown": moreMenuItems, "placement": placement })}
          </li>`}
    </ul>
  </nav>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/NavMenu/NavMenu.astro", void 0);

const $$SearchInput = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form${addAttribute("/", "action")} method="get" class="relative flex items-center ">
<input type="search" id="search-navbar" required class="w-full h-[38px] text-[1rem] rounded-l-xl block p-2 ps-none border-white  bg-white text-black  focus:border-[--guardsman-red-700] focus:outline-none outline-1 border-0" placeholder="Buscar...">
<button type="submit" class="flex items-center justify-center text-white hover:text-[--guardsman-red-700] transition ease-in-out bg-[--neutral-variant-color] hover:bg-[--secundary-color] p-[7.5px] w-9 h-[38.3px] rounded-r-lg border">
  <i class="fa-solid fa-magnifying-glass text-[14px]"></i>
  <span class="sr-only">Search icon</span>
</button>
</form>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/SerchInput/SearchInput.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="headerw-full" class="hidden lg:flex justify-center items-center w-full px-5 sticky top-1 z-50">
  <div class="glassmorphism flex justify-between items-center w-full min-h-[7.3dvh] max-w-[1300px] px-7 py-2 rounded-[9px] ">
  ${renderComponent($$result, "NavMenu", $$NavMenu, {})}
  ${renderComponent($$result, "SearchInput", $$SearchInput, {})}
  </div>
</header>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/Header/Header.astro", void 0);

const $$HamburgerButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="hamburger hamburger--collapse" type="button" data-astro-cid-t2kniuvh>
  <span class="hamburger-box" data-astro-cid-t2kniuvh>
    <span class="hamburger-inner" data-astro-cid-t2kniuvh></span>
  </span>
</button>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/HamburgerButton/HamburgerButton.astro", void 0);

const $$HeaderMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`

${maybeRenderHead()}<header class="w-full fixed  z-[900] bg-black flex justify-between items-center lg:hidden text-white pr-3 h-[17dvh]" data-astro-cid-c3no2ioh>
  ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "data-astro-cid-c3no2ioh": true })}
  ${renderComponent($$result, "Logo", $$Logo, { "hidden": "flex", "hiddenDesktop": "hidden", "isMobile": "true", "data-astro-cid-c3no2ioh": true })}
  ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-c3no2ioh": true })}
  <aside class="panel bg-black fixed top-0 w-full h-[100vh] flex flex-col lg:hidden items-start px-3 pt-20 *:text-2xl space-y-10 " data-astro-cid-c3no2ioh>
      ${renderComponent($$result, "ToggleLanguage", null, { "client:only": "react", "breakpoint": "mobile", "client:component-hydration": "only", "data-astro-cid-c3no2ioh": true, "client:component-path": "@components/atoms/ToogleLanguage/ToggleLanguage", "client:component-export": "default" })}
    ${renderComponent($$result, "NavMenu", $$NavMenu, { "placement": "bottom", "data-astro-cid-c3no2ioh": true })}
    <div class="" data-astro-cid-c3no2ioh>
      ${renderComponent($$result, "SearchInput", $$SearchInput, { "data-astro-cid-c3no2ioh": true })}
    </div>
  </aside>
</header>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/HeaderMobile/HeaderMobile.astro", void 0);

const $$Astro$2 = createAstro("https://newshoring.com/");
const $$ItemNews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ItemNews;
  const { href, category, categoryColor, datetime, title, content = "", time = null, Options = null, className = "", attributes = "" } = Astro2.props;
  var optionsObjs = null;
  if (Options != null) {
    optionsObjs = JSON.parse(Options);
  } else {
    optionsObjs = JSON.parse('{"LinkContainer":{"ClassName":""},"AssetsContainer":{"ClassName":"relative w-2/5 overflow-hidden","HasFlag":true,"Flag":{"ClassName":"absolute top-1.5 left-1.5 text-center py-1.5 px-1.5 font-sans text-xs font-bold text-black rounded-lg"},"ImageContainer":{"ClassName":"load-image-container block relative h-0","HasWatermark":true,"Image":{"ClassName":"lazy absolute top-0 left-0 w-full h-full"}}},"DataContainer":{"ClassName":"w-3/5 p-4 pl-0 pb-3","Date":{"ClassName":"font-body text-[--primary-text-color] mb-1.5 flex flex-nowrap gap-2 items-center","Icon":{"ClassName":"fill-[--neutral-variant-color]"}},"Time":{"ClassName":"","Icon":{}},"Title":{"ClassName":"group-hover:text-[--neutral-variant-color] group-hover:transition-colors text-[--primary-text-color] text-sm leading-[1.1rem] font-sans font-medium"},"Autor":{"Active":true,"Icon":{"Active":false,"ClassName":""},"TextPrev":"Por","TextNext":"-"}}}');
  }
  const dataAttributes = attributes && attributes ? attributes : "{}";
  let dataAttribut;
  if (dataAttributes) {
    const parsedData = JSON.parse(dataAttributes);
    dataAttribut = Object.fromEntries(
      Object.entries(parsedData).map(([key, value]) => [key, value])
    );
  }
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(className, "class")}${spreadAttributes(dataAttribut)}>
    <a${addAttribute(optionsObjs.LinkContainer.ClassName, "class")}${addAttribute(href, "href")}>
        <div${addAttribute(optionsObjs.AssetsContainer.ClassName, "class")}>
            ${renderSlot($$result, $$slots["image"])}
            ${optionsObjs.AssetsContainer.HasFlag && renderTemplate`<span${addAttribute(`${optionsObjs.AssetsContainer.Flag.ClassName} ${categoryColor}`, "class")}>${category}</span>`}
        </div>
        <div${addAttribute(optionsObjs.DataContainer.ClassName, "class")}>
            <span class="order-1">
                Por&nbsp;
                <strong>Ejemplo autor</strong>
                &nbsp;-&nbsp;
            </span>
            <time datetime="fecha_de_noticia"${addAttribute(optionsObjs.DataContainer.Date.ClassName, "class")}>
                ${optionsObjs.DataContainer.Date.Icon.ClassName && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(optionsObjs.DataContainer.Date.Icon.ClassName, "class")} width="15" height="17" fill="#d1d1d1" viewBox="0 0 28 32"><path d="M25 4c1.656 0 3 1.344 3 3v22c0 1.656-1.344 3-3 3H3c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h3V.75c0-.412.338-.75.75-.75h2.5c.412 0 .75.338.75.75V4h8V.75c0-.412.338-.75.75-.75h2.5c.412 0 .75.338.75.75V4h3zm-.375 25a.376.376 0 0 0 .375-.375V10H3v18.625c0 .206.169.375.375.375h21.25z"></path></svg>`}
                ${datetime}
            </time>
            ${time && renderTemplate`<span${addAttribute(optionsObjs.DataContainer.Time.ClassName, "class")}>
                        <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(optionsObjs.DataContainer.Time.Icon.ClassName, "class")} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 7v5"></path><path d="M12 12l2 -3"></path></svg>
                        ${time}
                    </span>`}
            <h2${addAttribute(optionsObjs.DataContainer.Title.ClassName, "class")}>
                ${title}
            </h2>
        </div>
    </a>
</article>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/extras/ItemNews.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-black flex flex-wrap justify-center md:justify-between text-white h-fit w-full py-5 px-[2rem] space-y-[1rem] mt-auto">
  <div class="sm:min-w-[300px] w-full sm:w-[300px] h-full flex flex-col justify-between items-start gap-[3rem] mt-[1rem]">
    ${renderComponent($$result, "Logo", $$Logo, { "animationdirection": "fade-bottom", "isMobile": "true" })}
    ${renderComponent($$result, "SocialMediaIcons", $$SocialMediaIcons, {})}
    <nav>
      <ul>
        <li>
          <a class="flex items-center gap-2" href="mailto:">${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-guardsman-red-600", "icon": "ic:round-mail", "width": "20", "height": "20" })}
            <span class="py-1"> correo@correo.com</span>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-2" href="tel:">${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-guardsman-red-600", "icon": "formkit:telephone", "width": "20", "height": "20" })}
            <span class="py-1"> correo@correo.com</span>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-2" href="tel:">${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "text-guardsman-red-600", "icon": "el:map-marker", "width": "20", "height": "20" })}
            <span class="py-1"> correo@correo.com</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="footer__latest-post flex flex-col gap-3 m-0 w-full lg:w-[60%] xl:max-w-[370px]">
    <h3 class="font-bold text-xl mb-0">Lo más reciente</h3>
    ${renderComponent($$result, "ItemNews", $$ItemNews, { "Options": '{"LinkContainer":{"ClassName":"flex gap-3 min-h-[140px] md:min-h-[130px] group"},"AssetsContainer":{"ClassName":"relative w-[28%] h-auto max-w-[114px] overflow-hidden ","HasFlag":false,"Flag":{"ClassName":""},"ImageContainer":{"ClassName":"load-image-container  h-full  max-h-[170px] group-hover:scale-125 ease-in-out duration-500 transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full","HasWatermark":false,"Image":{"ClassName":"lazy absolute top-0 left-0 w-full  h-full object-cover object-center"}}},"DataContainer":{"ClassName":"w-[73%] flex flex-col space-y-2 space-y-reverse justify-start","Date":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""}},"Time":{"Active":false,"ClassName":"font-normal","Icon":{"Active":false,"ClassName":""}},"Title":{"ClassName":"order-0 font-bold text-sm w-full"},"Autor":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""},"TextPrev":"Por&nbsp;","TextNext":"&nbsp;-&nbsp;"},"SponsorTag": {"LinkContainer":{"ClassName":"absolute bottom-0 right-0 text-center py-1.5 px-1.5 font-sans text-xs font-bold uppercase flex flex-nowrap flex-row gap-2 overflow-auto"}}}}', "className": "", "category": "Internacional", "attributes": '{"data-aos":"fade-up"}', "title": "Descubre el significado Descubre csdv vdzvsdvdvsdv...", "datetime": "22/04/2024", "href": "#", "categoryColor": "category_03" }, { "image": ($$result2) => renderTemplate`${renderComponent($$result2, "ImageLazy", $$ImageLazy, { "src": "https://gf-tvoainews.s3.amazonaws.com/images/0da498c2-a169-4ea5-8671-7f63880e5917.webp", "width": "200", "height": "114", "className": "group-hover:scale-125 ease-in-out duration-500 max-w-[114px] max-h-[170px] transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full absolute", "classNameImage": "h-full object-cover object-center", "slot": "image" })}` })}
  ${renderComponent($$result, "ItemNews", $$ItemNews, { "Options": '{"LinkContainer":{"ClassName":"flex gap-3 min-h-[140px] md:min-h-[130px] group"},"AssetsContainer":{"ClassName":"relative w-[28%] h-auto max-w-[114px] overflow-hidden ","HasFlag":false,"Flag":{"ClassName":""},"ImageContainer":{"ClassName":"load-image-container  h-full  max-h-[170px] group-hover:scale-125 ease-in-out duration-500 transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full","HasWatermark":false,"Image":{"ClassName":"lazy absolute top-0 left-0 w-full  h-full object-cover object-center"}}},"DataContainer":{"ClassName":"w-[73%] flex flex-col space-y-2 space-y-reverse justify-start","Date":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""}},"Time":{"Active":false,"ClassName":"font-normal","Icon":{"Active":false,"ClassName":""}},"Title":{"ClassName":"order-0 font-bold text-sm w-full"},"Autor":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""},"TextPrev":"Por&nbsp;","TextNext":"&nbsp;-&nbsp;"},"SponsorTag": {"LinkContainer":{"ClassName":"absolute bottom-0 right-0 text-center py-1.5 px-1.5 font-sans text-xs font-bold uppercase flex flex-nowrap flex-row gap-2 overflow-auto"}}}}', "className": "", "category": "Internacional", "attributes": '{"data-aos":"fade-up"}', "title": "Descubre el significado Descubre csdv vdzvsdvdvsdv...", "datetime": "22/04/2024", "href": "#", "categoryColor": "category_03" }, { "image": ($$result2) => renderTemplate`${renderComponent($$result2, "ImageLazy", $$ImageLazy, { "src": "https://gf-tvoainews.s3.amazonaws.com/images/0da498c2-a169-4ea5-8671-7f63880e5917.webp", "width": "200", "height": "114", "className": "group-hover:scale-125 ease-in-out duration-500 max-w-[114px] max-h-[170px] transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full absolute", "classNameImage": "h-full object-cover object-center", "slot": "image" })}` })}
${renderComponent($$result, "ItemNews", $$ItemNews, { "Options": '{"LinkContainer":{"ClassName":"flex gap-3 min-h-[140px] md:min-h-[130px] group"},"AssetsContainer":{"ClassName":"relative w-[28%] h-auto max-w-[114px] overflow-hidden ","HasFlag":false,"Flag":{"ClassName":""},"ImageContainer":{"ClassName":"load-image-container  h-full  max-h-[170px] group-hover:scale-125 ease-in-out duration-500 transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full","HasWatermark":false,"Image":{"ClassName":"lazy absolute top-0 left-0 w-full  h-full object-cover object-center"}}},"DataContainer":{"ClassName":"w-[73%] flex flex-col space-y-2 space-y-reverse justify-start","Date":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""}},"Time":{"Active":false,"ClassName":"font-normal","Icon":{"Active":false,"ClassName":""}},"Title":{"ClassName":"order-0 font-bold text-sm w-full"},"Autor":{"Active":true,"ClassName":"order-1 text-xs","Icon":{"Active":false,"ClassName":""},"TextPrev":"Por&nbsp;","TextNext":"&nbsp;-&nbsp;"},"SponsorTag": {"LinkContainer":{"ClassName":"absolute bottom-0 right-0 text-center py-1.5 px-1.5 font-sans text-xs font-bold uppercase flex flex-nowrap flex-row gap-2 overflow-auto"}}}}', "className": "", "category": "Internacional", "attributes": '{"data-aos":"fade-up"}', "title": "Descubre el significado Descubre csdv vdzvsdvdvsdv...", "datetime": "22/04/2024", "href": "#", "categoryColor": "category_03" }, { "image": ($$result2) => renderTemplate`${renderComponent($$result2, "ImageLazy", $$ImageLazy, { "src": "https://gf-tvoainews.s3.amazonaws.com/images/0da498c2-a169-4ea5-8671-7f63880e5917.webp", "width": "200", "height": "114", "className": "group-hover:scale-125 ease-in-out duration-500 max-w-[114px] max-h-[170px] transition-transform cursor-pointer pt-[130%] sm:pt-[100%] w-full absolute", "classNameImage": "h-full object-cover object-center", "slot": "image" })}` })}
  </div>

  <div class="footer__latest-post flex flex-col gap-4 w-full xl:max-w-[356px]">
    <h3 class="font-bold text-xl mb-2">Suscríbete</h3>
    <p>
      Ut velit culpa irure aliquip. Nisi nisi irure laborum irure ex est irure
      do irure do. Lorem amet non labore proident. Ut eiusmod ullamco nulla
      reprehenderit ullamco aute occaecat tempor mollit non commodo non in.
    </p>

    <section class="w-full flex justify-start items-center pb-1 pt-4">
      <form id="subscribe-form" method="POST" action="/" class="subscribe-form flex flex-col items-start justify-strech w-[80%] max-w-[1300px]">
        <div class="flex flex-col items-center justify-center ga-10 w-full">
          <span class="text-sm text-red-600 hidden mb-2" id="email-error"></span>
          <span class="text-sm text-red-600 hidden mb-2" id="terms-error"></span>
        </div>

        <label class="flex text-sm text-left self-start text-white" for="email">
          Ingresa tu correo electrónico
        </label>

        <div class="flex items-center justify-center w-full">
          <input class="py-[10.2px] flex-1 text-xs" type="email" id="email" name="email" placeholder="Tu email" required>
          ${renderComponent($$result, "Button", $$Button, { "text": "Suscribirse", "ID": "send-btn", "clase": "self-start px-5 pt-[11px] pb-[12px] w-[300px]", "rounded": "rounded-r-lg", "type": "submit" })}
        </div>
        <div class="flex py-2">
          <input type="checkbox" id="terms" name="terms" class="form-checkbox checked:accent-guardsman-red-700 mr-2" required>

          <span${addAttribute(`text-xs  text-[--secundary-color]`, "class")}>Aceptar términos y condiciones</span>
        </div>
      </form>
    </section>
  </div>
</footer>`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/organisms/Footer/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ButtonToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="to__top flex items-center justify-center p-2 w-[40px] h-[40px] bg-guardsman-red-700 fixed top-[62%] left-[89%] rounded-full cursor-pointer z-50" data-astro-cid-hov2kthu>\n    ', '\n</div>\n\n<script>\n  const cajaToTop = document.querySelector(".to__top");\n\n  cajaToTop.addEventListener("click", () => {\n    window.scrollTo({ top: 0, behavior: "smooth" });\n  });\n\n  window.addEventListener("scroll", () => {\n    if (window.pageYOffset > 500) {\n      cajaToTop.classList.add("show");\n    } else {\n      cajaToTop.classList.remove("show");\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "codicon:triangle-up", "width": "30", "height": "30", "style": "color: #d7d7d7", "data-astro-cid-hov2kthu": true }));
}, "/home/sofidev/trabajo/newshoringPropuesta/src/components/atoms/ButtonToTop/ButtonToTop.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://newshoring.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = "../../public/img/city.jpg"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es">\n  <head>\n    ', "\n    <!-- Primary Meta Tags -->\n    <title>", '</title>\n    <meta name="title"', '>\n    <meta name="description"', ">\n  ", "</head>\n\n  <body>\n    ", "\n    ", "\n\n    <article", ">\n      ", "\n    </article>\n    ", "\n    ", '\n    <main class="overflow-hidden w-full flex flex-col justify-center items-center px-3 pt-20 md:pt-24 xl:pt-1">\n\n      ', "\n      ", "\n    </main>\n    ", '\n\n\n\n    <script type="module" defer src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"><\/script>\n    \n  </body>\n</html>'])), renderComponent($$result, "BaseHead", $$BaseHead, {}), title, addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderComponent($$result, "BannerCoockies", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/atoms/BannerCoockies/BannerCoockies", "client:component-export": "default" }), renderComponent($$result, "TopBar", $$TopBar, {}), addAttribute(`hidden lg:flex  w-full h-[29dvh] justify-center items-center`, "class"), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "HeaderMobile", $$HeaderMobile, {}), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "ButtonToTop", $$ButtonToTop, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/sofidev/trabajo/newshoringPropuesta/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://newshoring.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
		${renderComponent($$result2, "Articles", $$Articles, {})}

	</main>
` })}`;
}, "/home/sofidev/trabajo/newshoringPropuesta/src/pages/index.astro", void 0);

const $$file = "/home/sofidev/trabajo/newshoringPropuesta/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
