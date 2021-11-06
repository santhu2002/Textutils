import React /*,{useState}*/ from 'react'

export default function About(props) {
    // const [mystyle, setmystyle] = useState({
    //     color: "black",
    //     backgroundColor: 'white'
    // })
    // const [text, settext] = useState("Enable Dark Mode")
    // const swapcolour = () => {
    //     if (mystyle.color === "black") {
    //         setmystyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         settext("Enable Light Mode")
    //     }
    //     else {
    //         setmystyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         settext("Enable Dark Mode")

    //     }
    // }
    let mystyle ={
        color:props.mode==="light"?"black":"white",
        backgroundColor:props.mode==="dark"?"black":"white"
    }
        return (
            <div className="container my-3" style={mystyle}>
                <h1>ABOUT TEXTUTILS</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>#1 Analyse Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>TEXTUTILS</strong> gives a way to annalyse your text quickly and efficiently. Be it word count, characters count and time to read.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <strong> #2 Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                Textutils is a free software to analyse your text and provides you tools to manipulate text quikly and easiy.tools that are avalible in textutils are converting text to uppercase and lowercase,copy text etc.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong> #3 Browser Compatiable</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                               This software can be used in any browsers like Chromre, Internet Explorer, Goggle, Firfox, Safari, Opera.......... etc
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=" btn btn-primary my-3" onClick={swapcolour}>{text}</div> */}

            </div>
        )
    }
