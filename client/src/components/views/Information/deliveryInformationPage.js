import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


function RulesPage(){

    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <h2>Доставка</h2>
                            <p>
                            Единый тариф на доставку для всех населенных пунктов области.
                            </p>
                            <p>
                            Доставка заказа осуществляется через 3 (три) дня с момента его оформления на сайте.
                            </p>
                            <p>
                            При оформлении заказа после 13:00 доставка переносится на следующий день.
                            </p>
                            <p>
                            Доставка осуществляется в течение дня – с 8:00 до 23:00.
                            </p>
                            <p>
                            Доставка в точное время не предусмотрена.
                            </p>
                            <p>
                            Накануне дня доставки до 14:00 менеджер компании свяжется с вами для подтверждения даты и времени доставки. В случае если до вас не дозвонились, дата доставки переносится на 1 (один) день.
                            </p>
                            <p>
                            Экспедитор, доставляющий заказ, связывается с вами за 1 (один) час до предполагаемого времени доставки.
                            </p>
                            <p>
                            Доставка по городу возможна только при указании точного адреса (название улицы, номер дома, квартиры/офиса).
                            </p>
                            <p>
                            Доставка в загородные дома осуществляется при указании точного адреса и наличии дороги, пригодной для проезда транспорта к месту доставки.
                            </p>
                            <p>
                            Доставка не осуществляется в места массового скопления людей, к торговым комплексам, станциям метро, перекресткам, строительным площадкам, на пустыри и т.д.  
                            </p>
                            <p>
                            Если въезд до места доставки платный, покупатель компенсирует расходы на проезд, в противном случае заказ будет доставлен до места платного въезда.
                            </p>
                            <p>
                            В стоимость стандартной доставки входит только транспортировка товара до входной двери подъезда, офисного здания, калитки частного дома. При этом проверка и приемка товара покупателем, а также подписание им договора купли-продажи осуществляются в указанном месте без перемещения товара.
                            </p>
                            <p>
                            Покупатель может дополнительно заказать услугу подъема товара до места проверки и приема (холл квартиры, лестничная площадка подъезда, офис). Для этого клиенту при оформлении заказа необходимо сообщить свое пожелание менеджеру компании. Услуга является платной.
                            </p>
                            <p>
                            При подъеме товар заносится в квартиру/офис только в том случае, если это позволяют сделать размеры дверного проема входной двери как подъезда, так и квартиры (расстояние между дверной коробкой и товаром в упаковке должно быть не менее 10 (десяти) сантиметров). В противном случае товар осматривается покупателем на месте, до которого удалось осуществить доставку.
                            </p>
                            <p>
                            Подъем и перемещение товара сотрудниками доставки возможны только при беспрепятственном доступе в квартиру/офис (свободные лестничные пролеты, проходы, место для осмотра в квартире/офисе).
                            </p>
                            <p>
                            При самостоятельном вносе товара в квартиру/офис покупатель своей подписью в договоре купли-продажи подтверждает, что осмотрел и принял товар, а также ознакомлен с порядком его транспортировки. При этом оплата заказа, предоставление всей необходимой информации покупателю, а также подписание им договора купли-продажи осуществляются до момента передачи товара клиенту в полное распоряжение (его перемещение, установка, эксплуатация). Правила приемки товара.
                            </p>
                            <p>
                            Продавец не несет ответственности за возможное повреждение товара покупателем при самостоятельном его заносе в квартиру/офис.
                            </p>
                            <p>
                            Перед оформлением заказа необходимо внимательно ознакомиться со свойствами и характеристиками товара (размером, цветом, весом и т. д.). При возврате крупногабаритного товара надлежащего качества транспортные расходы оплачиваются покупателем.
                            </p>
                            <p>
                            Если во время приемки товара вы поняли, что он вам не подходит по каким-либо причинам, то вы можете отказаться его принимать и оплачивать заказ. Правила приемки товара.
                            </p>
                            <p>
                            При приемке товара внимательно проверьте его комплектность и внешний вид, отсутствие механических повреждений. Правила приемки товара.
                            </p>
                            <p>
                            Установка товара осуществляется специалистами службы сервиса, или они могут дать консультацию по его подключению. Подробнее об установке.
                            </p>
                            <p>
                            Демонтаж товара также осуществляется специалистами службы сервиса. Данная услуга оплачивается в соответствии с тарифами компании. Подробнее об установке.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )

}

export default RulesPage