import React from "react";
import "./Navbar.css"

const Head = () => {
    return(
        <>
           <section className="head">
                <div className="container_head d-flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>+998 77 217 77 77</label>

                        <i className="fa fa-envelope"></i>
                        <label>omadshou@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label>📊 FAQ</label>
                        <label>💬 Savol Javoblar</label>
                        <span>📃</span>
                        <label>UZB</label>
                        <span>💰</span>
                        <label>UZS</label>

                    </div>
                </div>
            </section> 
        </>
    )
}
export default Head;