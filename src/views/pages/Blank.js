import React from "react";
import { Row, Col, Button } from "reactstrap";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Blank = () =>{
    const [hover, setHover] = React.useState(null);
    const clicked = (e, value) =>{
        setHover(value)
    }
    return(
        <>
            <Row className="justify-content-center mt-5">
                <Col md="6">
                    <Row>
                        {data.map((element) =>{
                        return(
                            <Col sm="4" className="my-3">
                            <Button className="p-5" style={{hieght:80,width:"100%", border:"1px solid black", borderColor: hover===element?"green": "black",  color: hover===element?"white": "black",  backgroundColor: hover===element?"green": "white"}} onClick={(e)=>clicked(e, element)}>
                                {element}
                            </Button>
                        </Col> 
                        )
                    })}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Blank;
