const ErrorMessage = ({item}) =>{
    return item.length === 0 ? "I am still hungry" : null;
}

export default ErrorMessage;