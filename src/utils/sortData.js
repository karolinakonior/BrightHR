import sortArray from 'sort-array';

export default function sortDataUtil(data, sortBy, order) {
    return sortArray([...data], { by: sortBy, order: order })
}