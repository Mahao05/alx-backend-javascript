export default function updateUniqueItems(itemMap) {
    if (!(itemMap instanceof Map)) {
        throw new Error("Cannot process");
    }
    itemMap.forEach((quantity, item) => {
        if (quantity === 1) {
            itemMap.set(item, 100);
        }
    });

    return itemMap;
}
