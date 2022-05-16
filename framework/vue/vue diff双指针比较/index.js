var oldNode = ['A', 'B', 'C', 'D'];
var newNode = ['D', 'C', 'E', 'A', 'B', 'F'];

function compareDiff(oldNode, newNode) {
    let oldStartIndex = 0;
    let newStartIndex = 0;
    let oldEndIndex = oldNode.length - 1;
    let newEndIndex = newNode.length - 1;
    let oldStartNode = oldNode[oldStartIndex];
    let oldEndNode = oldNode[oldEndIndex];
    let newStartNode = newNode[newStartIndex];
    let newEndNode = newNode[newEndIndex];
    let compareArr = [];

    while(oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
        if (oldStartNode === newStartNode) {
            compareArr[newStartIndex] = newStartNode;
            oldStartNode = oldNode[++oldStartIndex]
            newStartNode = newNode[++newStartIndex]
        } else if (oldEndNode === newEndNode) {
            compareArr[newEndIndex] = newEndNode;
            oldEndNode = oldNode[--oldEndIndex]
            newEndNode = newNode[--newEndIndex]
        } else if (oldStartNode === newEndNode) {
            compareArr[newEndIndex] = newEndNode;
            oldStartNode = oldNode[++oldStartNode];
            newEndNode = newNode[--newEndIndex];
        } else if (oldEndNode === newStartNode) {
            compareArr[newStartIndex] = newStartNode;
            oldEndNode = oldNode[--oldEndIndex];
            newStartNode = newNode[++newStartIndex];
        } else {
            if (oldNode.includes(newStartNode)) {
                compareArr[newStartIndex] = newStartNode;
                newStartNode = newNode[++newStartIndex]; 
            } else {
                compareArr[newStartIndex] = newStartNode;
                newStartNode = newNode[++newStartIndex];
            }
        }
    }

    if (oldStartIndex > oldEndIndex && newStartIndex <= newEndIndex) {
        compareArr = compareArr.concat(newNode.slice(newStartIndex))
    }

    return compareArr
}

const compareArr = compareDiff(oldNode, newNode)
console.log(compareArr)