

const Error = ({errMessage}) =>{
    return (
        <div className="flex items-center justify-center w-full h-full">
            <h3>{errMessage}</h3>
        </div>
    );
};

export default Error;