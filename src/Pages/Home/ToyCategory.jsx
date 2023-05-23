

const ToyCategory = ({ single }) => {
    const { picture, name, price, rating } = single;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-16">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                
                    <p>Rating: {rating}</p>
                </div>
                <figure><img src={picture}/></figure>
            </div>
        </div>
    );
};

export default ToyCategory;