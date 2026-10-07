const removeFromArray_loopy = function(arr, ...remove_list) {
    for (let item_to_remove of remove_list) {
        while (true) {
            // looping to remove *every* appearance of the given argument from the given array
            let index_of_item_to_remove = arr.indexOf(item_to_remove);
            if (index_of_item_to_remove === -1) break;
            arr.splice(index_of_item_to_remove, 1);
        }
    }
    return arr;
};

const removeFromArray = function(arr, ...remove_list) {
    return arr.filter(it => !remove_list.includes(it));
};

// Do not edit below this line
module.exports = removeFromArray;
