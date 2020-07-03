import React from "react";
import "./Component/style.css";
import Gif from "./Component/logo.gif"

function Erorr404 () {
    return(
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h3>Oops! данной страницы не существует</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
            <img src={Gif} />
			<h2>Вы можете вернуться к покупка позже, или перейдя обратно на </h2>
            <div >
                <h2><a href="/">домашнию страницу</a></h2>
                
            </div>
		</div>
	</div>
    )
}

export default Erorr404