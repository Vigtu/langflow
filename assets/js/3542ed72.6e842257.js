"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5109],{85172:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>d,assets:()=>l,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"Integrations/Arize/integrations-arize","title":"Integrate Arize with Langflow","description":"Arize is a tool built on OpenTelemetry and OpenInference for monitoring and optimizing LLM applications.","source":"@site/docs/Integrations/Arize/integrations-arize.md","sourceDirName":"Integrations/Arize","slug":"/integrations-arize","permalink":"/integrations-arize","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Integrate Arize with Langflow","slug":"/integrations-arize"},"sidebar":"docs","previous":{"title":"Apify","permalink":"/integrations-apify"},"next":{"title":"AssemblyAI","permalink":"/integrations-assemblyai"}}');var o=t(74848),i=t(28453),s=t(24754);const a={title:"Integrate Arize with Langflow",slug:"/integrations-arize"},c=void 0,l={},d={annotations:s.hk,Code:s.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connect Arize to Langflow",id:"connect-arize-to-langflow",level:2},{value:"Run a flow and view metrics in Arize",id:"run-a-flow-and-view-metrics-in-arize",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return d||f("CH",!1),d.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsxs)(n.p,{children:["Arize is a tool built on ",(0,o.jsx)(n.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," and ",(0,o.jsx)(n.a,{href:"https://docs.arize.com/phoenix/reference/open-inference",children:"OpenInference"})," for monitoring and optimizing LLM applications."]}),"\n",(0,o.jsxs)(n.p,{children:["To add tracing to your Langflow application, add the ",(0,o.jsx)(n.code,{children:"ARIZE_SPACE_ID"})," and ",(0,o.jsx)(n.code,{children:"ARIZE_API_KEY"})," environment variables to your Langflow application."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you are using the ",(0,o.jsx)(n.a,{href:"https://docs.arize.com/arize",children:"standard Arize platform"}),", you need an ",(0,o.jsx)(n.strong,{children:"Arize Space ID"})," and ",(0,o.jsx)(n.strong,{children:"API API Key"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If you are using the open-source ",(0,o.jsx)(n.a,{href:"https://docs.arize.com/phoenix",children:"Arize Phoenix platform"}),", you need an Arize Phoenix API key and a project name."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"connect-arize-to-langflow",children:"Connect Arize to Langflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["To retrieve your ",(0,o.jsx)(n.strong,{children:"Arize Space ID"})," and ",(0,o.jsx)(n.strong,{children:"API API Key"}),", navigate to the ",(0,o.jsx)(n.a,{href:"https://app.arize.com/",children:"Arize dashboard"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Settings"}),", and then click ",(0,o.jsx)(n.strong,{children:"Space Settings and Keys"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Copy the ",(0,o.jsx)(n.strong,{children:"SpaceID"})," and ",(0,o.jsx)(n.strong,{children:"API Key (Ingestion Service Account Key)"})," values."]}),"\n",(0,o.jsxs)(n.li,{children:["Create a ",(0,o.jsx)(n.code,{children:".env"})," file in the root of your Langflow application."]}),"\n",(0,o.jsxs)(n.li,{children:["Add the ",(0,o.jsx)(n.code,{children:"ARIZE_SPACE_ID"})," and ",(0,o.jsx)(n.code,{children:"ARIZE_API_KEY"})," environment variables to your Langflow application.\nYou do not need to specify the ",(0,o.jsx)(n.strong,{children:"Arize Project"})," name if you're using the standard Arize platform. The ",(0,o.jsx)(n.strong,{children:"Project"})," name in Arize is the same as the Langflow ",(0,o.jsx)(n.strong,{children:"Flow"})," name."]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" ARIZE_SPACE_ID",props:{style:{color:"#C9D1D9"}}},{content:"=<",props:{style:{color:"#FF7B72"}}},{content:"your-arize-space-i",props:{style:{color:"#A5D6FF"}}},{content:"d",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" ARIZE_API_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=<",props:{style:{color:"#FF7B72"}}},{content:"your-arize-api-ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Start your Langflow application with the values from the ",(0,o.jsx)(n.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"uv ",props:{style:{color:"#FFA657"}}},{content:"run langflow run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h2,{id:"run-a-flow-and-view-metrics-in-arize",children:"Run a flow and view metrics in Arize"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In Langflow, select the ",(0,o.jsx)(n.a,{href:"/starter-projects-simple-agent",children:"Simple agent"})," starter project."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Agent"})," component's ",(0,o.jsx)(n.strong,{children:"OpenAI API Key"})," field, paste your ",(0,o.jsx)(n.strong,{children:"OpenAI API key"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Playground"}),".\nAsk your Agent some questions to generate traffic."]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://app.arize.com/",children:"Arize dashboard"}),", and then open your project.\nYou may have to wait a few minutes for Arize to process the data."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"LLM Tracing"})," tab shows metrics for your flow.\nEach Langflow execution generates two traces in Arize.\nThe ",(0,o.jsx)(n.code,{children:"AgentExecutor"})," trace is the Arize trace of Langchain's ",(0,o.jsx)(n.code,{children:"AgentExecutor"}),". The UUID trace is the trace of the Langflow components."]}),"\n",(0,o.jsxs)(n.li,{children:["To view traces, click the ",(0,o.jsx)(n.strong,{children:"Traces"})," tab.\nA ",(0,o.jsx)(n.strong,{children:"trace"})," is the complete journey of a request, made of multiple ",(0,o.jsx)(n.strong,{children:"spans"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To view ",(0,o.jsx)(n.strong,{children:"Spans"}),", select the ",(0,o.jsx)(n.strong,{children:"Spans"})," tab.\nA ",(0,o.jsx)(n.strong,{children:"span"})," is a single operation within a trace. For example, a ",(0,o.jsx)(n.strong,{children:"span"})," could be a single API call to OpenAI or a single function call to a custom tool.\nFor more on traces, spans, and other metrics in Arize, see the ",(0,o.jsx)(n.a,{href:"https://docs.arize.com/arize/llm-tracing/tracing",children:"Arize documentation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["All metrics in the ",(0,o.jsx)(n.strong,{children:"LLM Tracing"})," tab can be added to ",(0,o.jsx)(n.strong,{children:"Datasets"}),".\nTo add a span to a ",(0,o.jsx)(n.strong,{children:"Dataset"}),", click the ",(0,o.jsx)(n.strong,{children:"Add to Dataset"})," button."]}),"\n",(0,o.jsxs)(n.li,{children:["To view a ",(0,o.jsx)(n.strong,{children:"Dataset"}),", click the ",(0,o.jsx)(n.strong,{children:"Datasets"})," tab, and then select your ",(0,o.jsx)(n.strong,{children:"Dataset"}),".\nFor more on ",(0,o.jsx)(n.strong,{children:"Datasets"}),", see the ",(0,o.jsx)(n.a,{href:"https://docs.arize.com/arize/llm-datasets-and-experiments/datasets-and-experiments",children:"Arize documentation"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);