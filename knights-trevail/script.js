function Node(loc, dest) {
    if (loc[0] < 0 || loc[0] > 7 || loc[1] < 0 || loc[1] > 7) {
        return null;
    }
    return { loc, dest };
}

function knightMove([x, y], [a, b]) {
    let q = [Node ([x, y], [[x, y]])];
    let currNode = q.shift();
    
    while (currNode.loc[0] !== a || currNode.loc[1] !== b) {
        let moves = genMoves(currNode);

        moves.forEach((move) => {
            let node = Node(move, currNode.dest.concat([move]));
            if (node) {
                q.push(node);
            }
        });
        currNode = q.shift();
    }
    console.log("You made it in " + (currNode.dest.length-1) + " moves.");
    console.log("Here is your path: " + currNode.dest);
}

function genMoves(currentNode) {
    let moves = [
        [currentNode.loc[0] + 2, currentNode.loc[1] - 1],
        [currentNode.loc[0] + 2, currentNode.loc[1] + 1],
        [currentNode.loc[0] - 2, currentNode.loc[1] - 1],
        [currentNode.loc[0] - 2, currentNode.loc[1] + 1],
        [currentNode.loc[0] + 1, currentNode.loc[1] - 2],
        [currentNode.loc[0] + 1, currentNode.loc[1] + 2],
        [currentNode.loc[0] - 1, currentNode.loc[1] - 2],
        [currentNode.loc[0] - 1, currentNode.loc[1] + 2],
      ];
    return moves;
}

knightMove([0, 0], [4, 5]);
