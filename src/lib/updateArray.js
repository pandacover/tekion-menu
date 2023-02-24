export const upsertArray = (array, element, incr = 1) => {
    const index = array.findIndex(el => el.id === element.id);
    if(incr === 0) return array.filter(el => el.id !== element.id);
    else if(incr > 1) return [...array.filter(el => el.id !== element.id), {...element, count: incr}];
    else if(index > -1) return array.map(el => el.id === element.id ? { ...el, count: el.count + incr} : el);
    return [...array, {...element, count: 1}];
}

export const removeElement = (array, element) => {
    const findElement = array.find(el => el.id === element.id);
    if(!findElement) return array;
    else if(findElement.count === 1) return array.filter(el => el.id !== element.id);
    return array.map(el => el.id === element.id ? {...el, count: el.count - 1} : el);
}