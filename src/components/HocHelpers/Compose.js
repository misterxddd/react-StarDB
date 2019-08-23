const compose = (...funcs) => (item) => {
    return funcs.reduceRight((prevResult, f) => f(prevResult), item);
};

export default compose;