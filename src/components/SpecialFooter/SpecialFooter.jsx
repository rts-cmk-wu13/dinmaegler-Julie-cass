import React from "react";

import ImpoLink from "./impoLink";
import InstaLink from "./InstaLink";

import "./SpecialFooter.scss";

function SpecialFooter() {
    return (
        <>

            <section className="special-footer">
                <div className="container">



                    <article>
                        <h3>Ghor Bari</h3>
                        <div>
                            <p>There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.</p>
                            <h5>Business Hour</h5>
                            <p>Monday - Friday 10:00am - 06:00pm</p>
                        </div>
                    </article>

                    <article className="important-links">
                        <h3>Important Links</h3>
                        <ImpoLink />
                    </article>
                      <article className="important-links">
       
                        <ImpoLink />
                    </article>

                    <article className="instagram-footer">
                        <h3>bonk was here</h3>
                        <InstaLink />
                    </article>


                </div>
            </section>
        </>
    );
} export default SpecialFooter;