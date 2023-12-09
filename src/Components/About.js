import React, { useState } from 'react'

export default function About() {

    const [style, setStyle] = useState(                                           
        {
            backgroundColor: "white",
            color: "black"

        }
    )

    // style written in js as i used to write in document.body.style.backgroundColor


    const [btnText,setBtnText]=useState("Enable Dark Mode")
    //used to chnage button text

    function toggleStyle() {                             //function to toggle styles on button click
        if(style.backgroundColor==="white"){
        setStyle(
            {
                backgroundColor: "black",
                color: "white"
            }
        )
        setBtnText("Enable Light Mode")
        }
        else{
            setStyle(
                {
                    backgroundColor: "white",
                    color: "black"
                }
            )
            setBtnText("Enable Dark Mode")
     

        }
    }

    return (
        <div id="about" style={style}>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" style={style}>
                    <h2 class="accordion-header" style={style}>
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={style}>
                    <h2 class="accordion-header" style={style}>
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
           
            </div>



            <button type="button" className={`btn btn-${btnText==="Enable Dark Mode"?"dark":"light"}`} onClick={toggleStyle}>{btnText}</button>
            {/* button to enable or disable dark mode */}



        </div>
    )
}
