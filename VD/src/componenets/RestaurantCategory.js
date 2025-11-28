const RestaurantCategory = ({ data}) => {
    return (
        <div>
            <div className="w-6/12 m-auto shadow-2xs flex justify-between items-center p-2 rounded-lg"> 
                <span>{data.title} {(data.itemcard.length)}</span>
                <span>⬇️ </span>
            </div>
        </div>
    );
}

export default RestaurantCategory;