import Header from "../components/Header"
import About from "./About"
import Interests from "./Interests"
export default function PagesLayout({children}) {
  return (
    // <html lang="en">
    //   <body>
    //     {/* Layout UI */}
    //     {/* Place children where you want to render a page or nested layout */}
    //     <Header/>
    //     <main>{children}</main>
    //   </body>
    // </html>
    
    <main>
        {/* <Header />
        <About /> 
        <Interests />*/}
        {children}
        </main>
  )
}
