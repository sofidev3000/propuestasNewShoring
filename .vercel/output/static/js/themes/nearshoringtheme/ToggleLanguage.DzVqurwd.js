import{j as e}from"./chunks/jsx-runtime.7faW4zRM.js";import{r as n}from"./chunks/index.DhYZZe0J.js";const s=()=>{const t=document.createElement("script");t.setAttribute("src","/libs/js/gtranslate2.js"),t.setAttribute("defer",""),t.setAttribute("id","langScript");const r=document.createElement("script");r.setAttribute("id","LangScriptConfig"),r.textContent=`
    window.gtranslateSettings = {
         "default_language": "es",
        "detect_browser_language":true,
        "languages":["en","fr", "de","es","zh-CN", "ru"],
        "alt_flags":{"en": "usa", "es":"mexico"},
        "wrapper_selector":".gtranslate_wrapper",
        "switcher_horizontal_position":"right",
        "switcher_vertical_position":"top",
        "flag_style":"3d",
        "url_structure": "none"
        }
        `,document.getElementById("langScript")||document.body.appendChild(t),document.getElementById("LangScriptConfig")||document.body.appendChild(r)},o=({breakpoint:t="desktop"})=>(n.useEffect(()=>{s()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"states_container",children:e.jsx("div",{className:"gtranslate_wrapper"})})}));export{o as default};
