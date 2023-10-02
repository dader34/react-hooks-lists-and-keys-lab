import React from "react";


function RenderLink({links}) {
  const linksArr = links.map((e,idx) =>{
    return(
      <a key = {idx} href={"#"+e}>{e}</a>
    )
  })
  return (
    linksArr
  )
}


function NavBar() {
  const links = ["home", "about", "projects"];
  return <nav><RenderLink links={links}/></nav>
}

export default NavBar;
