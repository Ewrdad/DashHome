import React, { useState } from "react";

const LinksPanel = () => {
const [links, setlinks] = useState("other");
 
return (<div>
<div className="catagoryHeader">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png" className="logo"></img>
<p></p>
<button className="button" onClick={() => setlinks("media")}>Media</button>

</div>
<div className="catagoryHeader">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png" className="logo"></img>
<p></p>
<button className="button" onClick={() => setlinks("email")}>Email</button>

</div>
<div className="catagoryHeader">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png" className="logo"></img>
<p></p>
<button className="button" onClick={() => setlinks("storage")}>Storage</button>

</div>
<div className="catagoryHeader">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png" className="logo"></img>
<p></p>
<button className="button" onClick={() => setlinks("social")}>Social</button>

</div>
<div className="catagoryHeader">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png" className="logo"></img>
<p></p>
<button className="button" onClick={() => setlinks("other")}>other</button>

</div>

<h1>{links}</h1>




</div>
)

}

export default LinksPanel;

