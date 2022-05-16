// 前序遍历

const preOrder = (root) => {
    if (!root) return;
    console.log(root);
    preOrder(root.left);
    preOrder(root.right);
}

// 中序遍历

const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

// 后序遍历

const postOrder = (root) => {
    if (!root) { return }
    postOrder(root.left)
    postOrder(root.right)
    console.log(n.val)
}

// 层序遍历

const levelOrder = (root) => {
    if (!root) { return [] };
    const queue = [[root, 0]];
    const res = [];
    while(queue.length) {
        const n = queue.shift();
        const [node, leval] = n;
        if (!res[leval]) {
            res[leval] = [node.val]
        } else {
            res[leval].push(node.val)
        }
        if (node.left) { queue.push([node.left, leval + 1]) }
        if (node.right) { queue.push([node.right, leval + 1]) }
    }
    return res
}