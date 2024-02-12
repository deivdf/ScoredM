import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Styles from '../public/styles/app.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: 'SocrdM'},
    {charset: "utf-8"},
    {viweport: "width=device-width, initial-scale=1"},
  ];
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: Styles },
  {
    rel: 'stylesheet}',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
  },
  {
    rel:'preconnect',
    href:'https://fonts.googleapis.com',
  },
  {
    rel:'preconnect',
    href:'https://fonts.gstatic.com',
    crossorigin: 'true'
  },
  {
    rel:'stylesheet',
    href:'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'
  },
];


export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
function Document({children}: {children: React.ReactNode}){
  return(
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}