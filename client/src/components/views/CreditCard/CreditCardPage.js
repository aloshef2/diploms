import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function RulesPage(){

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="row">
                    <div className="col-3">
                        <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                        />
                    </div>
                    

                    <form className="col-3">
                        <input 
                            className="form-control"
                            type="tel" 
                            name="number"
                            placeholder="Номер"
                            value={number} 
                            onChange={e => setNumber(e.target.value)} 
                            onFocus={e=>setFocus(e.target.name)}
                            />
                        <input 
                            className="form-control"
                            type="text" 
                            name="name"
                            placeholder="Имя"
                            value={name} 
                            onChange={e => setName(e.target.value)} 
                            onFocus={e=>setFocus(e.target.name)}
                            />
                        <input 
                            className="form-control"
                            type="text" 
                            name="expiry"
                            placeholder="MM/YY"
                            value={expiry} 
                            onChange={e => setExpiry(e.target.value)} 
                            onFocus={e=>setFocus(e.target.name)}
                            />
                        <input 
                            className="form-control"
                            type="tel" 
                            name="cvc"
                            placeholder="CVC"
                            value={cvc} 
                            onChange={e => setCvc(e.target.value)} 
                            onFocus={e=>setFocus(e.target.name)}
                            />
                    </form>

                </div>
            </div>

            </div>
            <Footer />
        </div>
    )

}

export default RulesPage