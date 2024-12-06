const ChildB = (y) => {
    console.log(y); //{products:[{},{}]}
    let {prop2}= y;
    return (
        <div>
            <h1>Child B</h1>
            { prop2.map((products) => {
                console.log(products);
                    return (
                        <div>
                       <h2>{products.title}</h2>
                       <img src = {products.img} alt="" />
                      </div>
                    );
            })}
        </div>
    );
};
export default ChildB;