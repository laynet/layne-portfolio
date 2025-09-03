import Header from "../components/Header"
import About from "./About"
export default function DashboardLayout({children}) {
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
        <About /> */}
        {children}
        </main>
  )
}
