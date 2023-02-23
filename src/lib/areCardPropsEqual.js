const areCardPropsEqual = (prevProps, nextProps) => {
    return !Object.keys(prevProps).some((index) => prevProps[index] !== nextProps[index]);
}
export default areCardPropsEqual;
