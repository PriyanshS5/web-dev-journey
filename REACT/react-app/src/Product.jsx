import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {

    let oldPrices = ["12,459", "11,900", "1,599", "599"];

    let newPrices = ["8,999", "9,199", "899", "278"];

    let Description = [
        ["8,000 DPI","5 Programmable buttons"],
        ["Intutive Surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "Intutive Surface"],
        ["wireless", "Optical Orientation"],
    ];
    // let styles={backgroundColor : price > 30000 ? "aqua" : null};

    // let isDiscount = price > 30000 ? "5%" : null;
    
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][0]}</p>
            {/* <h3>{title}</h3>
            <h5>{price}</h5>
            <p>{features}</p>
            <p>{isDiscount}</p> */}
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;