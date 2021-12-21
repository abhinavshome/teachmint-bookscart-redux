const Stars = ({rating}) => {
    const arr = [];
    for(let i=0; i<rating; i++) {
        arr.push(i);
    }
    return (
        <div>
           {arr.map((e => <span key={e}>*</span>))}
        </div>
    );
};

export default Stars;