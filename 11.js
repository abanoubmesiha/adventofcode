let inputx = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
let input = `LLLLLLLL.LLLL.LLLLLLLLL.LLLLLL..L.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL..LLLL.LLLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
...L..LLL.L...........L....LL........LLL....L..L.......LLLLL.LL.....LL.LL...L..LLL.L......L....
LLLLLLLL.LLLL..LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLL
LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLL.LLL..LLLLLLLLLLL.LLLLLLL.LLL.L.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLL..LLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
..LL.......L.L..L.LL......L.L....L...L...L.L........L.....L......LL...LL.LL.L........LLL.LL....
LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLL.L.L.LLLLL.LLLLLLLLLL
LLLLLLLL.LLLL..LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLL.LLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLL.LLLLLLL..LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
.L..LLL...L.LLL..L..L....L....LL..LL...LL..LLLL.L.....L.L...........LL........L....L.L...L..LL.
LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.L.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLL..LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLL.L.LLLLLLLLLL
LLLLLLLL.L.LL.L.LLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLL
L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LL.LLLLLLLLLLLLLLLLLL
.LL.L....L.L..LL..L..L..LL.L...L.....L...LL......LLL...L...LL....L.L.......L.....L...L.L......L
LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLL.LLLLL.L.LL..LL.LLL.LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLL.LLL.LLLLLLL.LL
LLLLLL.LLLLLL.LLLLLLLL..L.LLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLL..LLLLL.LLL.LLLLLLLLLLL.LLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LLL
LLLLLLLL.L.L..LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLL.L...LLLL.LLLLL.LL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLL.LLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLL.LLLLLLL.LLL.LLLLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLL.LLLLLLLLLL
L.L..L...LL.L..L..L..L.L.L..L......................L...L..LLLL..LLLL..LL....L...LL..L.....L....
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL.LL.LLLLL..LL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLL..LLLL.LL..L.LLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLL
LL.LL...L...LL.LLL...L...LL.LL..L.L.L...L.L.......L..L..L.LLL..LL...LLLLL..L..LL..L.....L...LL.
LLLLLLLL.LLLLLLLLLLLLLL..LL.L.LLL.LLLLL.LLLLLLLLLLLL.LLLL..LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LL.L.LLL.LLLLLLLLLLLLLLLLL.LLLLLL..LLLLLLLLLL
LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LL.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLLLL..LLLLLLLLLLLLLLLLLLLL.LLLLL.LLL.LL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL
L.L................L..L.L.LL..L..L..L.L..L.LLLL..........L..LL.LL.L...LL...L....L...LL..L.L.L.L
.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LLL
.LLLLLLLLLLLL.L.LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLL.L.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLLLLLLLL.LLLLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLL.LLLLLL.L..LLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLL.L.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LL.LLL.LLLLL.LLLLLL.L.LLLLLLLL.LLLLLLLLLL.LLLLLLL
LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLLLL
L..LL...L...L...L.LL..LL......LL..LL....L.L...........L.L...L....LL.LL.L..LL....L..L.........LL
L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LL.LLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL..LL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLL..LLLLLL.LLLLL.LLLL.LLL.LLLLLLLLL.LLLLLLLLLLLLLL.LL
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
.L.LL..L...L........L.......L.....L.L.L....L......L.LL......L...LL.L.LLLL...LLL.L...L..L.LLLL..
LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLLL
L.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLL.L.L.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LL
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL..LLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
L.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLL.LLLL..LLLLLL.LLL.L.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL
LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLL.LL.LLLLL.LLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLL.L.LLLLLL.LLL
LLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL..LLLLL.LLLLL.LL.LLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL
....LLL.L...LL.L.LLLLLL...L........L.L...L.L.L..L....LL..LL.L..LL...L.L.LLL.LL...LL..L.L..LL...
LLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLL..LLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLLLL
LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL
LLLLLLLLL.LLL.LLLLLLLLL.LLLLLLLLL.LLLLL..LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.L.LLLLLLLL
LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.L
LLLLLLL.LLLL..LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLL.LL.LL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL
LLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL
L.LL.LLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLL.LLLLLL.LLL
LLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.L.LLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL
LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.L.LLLLL.LL
LLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL`;

inputGroups = input.split('\n').map(g=>g.trim().split(''));

let seatingArea = JSON.parse(JSON.stringify(inputGroups));


let getChairNeighbours = (seatingArea, row, i) => {
    let neighbours = [];
    let g = seatingArea;
    if (g[row-1]){
        let r = g[row-1];
        neighbours.push(r[i-1]);
        neighbours.push(r[i]);
        neighbours.push(r[i+1]);
    }
    if (g[row+1]){
        let r = g[row+1];
        neighbours.push(r[i-1]);
        neighbours.push(r[i]);
        neighbours.push(r[i+1]);
    }
    neighbours.push(g[row][i-1]);
    neighbours.push(g[row][i+1]);
    return neighbours;
}

let resOfRoundTo = (seatingArea)=> {
    let res = JSON.parse(JSON.stringify(seatingArea));
    seatingArea.forEach((chairRow, row)=>{
        chairRow.forEach((chair, i)=>{
            if (chair !== '.'){
                let neighbours = getChairNeighbours(seatingArea, row, i)
                if (chair === 'L'){
                    if (neighbours.filter(n=>n === '#').length === 0){ // round one
                        res[row][i] = '#';
                    }
                } else if (chair === '#'){
                    if (neighbours.filter(n=>n === '#').length > 3){
                        res[row][i] = 'L';
                    }
                }
            }
        })
    })
    return res;
}

let recursiveRounds = seatingArea => {
    let result;
    let res = resOfRoundTo(seatingArea);
    if (JSON.stringify(seatingArea) === JSON.stringify(res)){
        result = res.flat();
        result = result.filter(chair=> chair === '#').length;
    } else {
        result = recursiveRounds(res);
    }
    return result;
}

console.log(recursiveRounds(seatingArea))
// let firstRound = resOfRoundTo(seatingArea);
// let  secondRound = resOfRoundTo(firstRound);
// let  thirdRound = resOfRoundTo(secondRound);
// let  forthRound = resOfRoundTo(thirdRound);
// let  fifthRound = resOfRoundTo(forthRound);
// if (JSON.stringify(fifthRound) === JSON.stringify(fifthRound)){
//     console.log("===", true);
// }
// if (JSON.stringify(fifthRound) !== JSON.stringify(forthRound)){
//     console.log("!==", true);
// }
// fifthRound = fifthRound.flat();
// console.log(fifthRound.filter(chair=>chair === '#').length);
// --- Day 11: Seating System ---
// Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

// By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

// The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

// L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL
// Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

// If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
// If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
// Otherwise, the seat's state does not change.
// Floor (.) never changes; seats don't move, and nobody sits on the floor.

// After one round of these rules, every seat in the example layout becomes occupied:

// #.##.##.##
// #######.##
// #.#.#..#..
// ####.##.##
// #.##.##.##
// #.#####.##
// ..#.#.....
// ##########
// #.######.#
// #.#####.##
// After a second round, the seats with four or more occupied adjacent seats become empty again:

// #.LL.L#.##
// #LLLLLL.L#
// L.L.L..L..
// #LLL.LL.L#
// #.LL.LL.LL
// #.LLLL#.##
// ..L.L.....
// #LLLLLLLL#
// #.LLLLLL.L
// #.#LLLL.##
// This process continues for three more rounds:

// #.##.L#.##
// #L###LL.L#
// L.#.#..#..
// #L##.##.L#
// #.##.LL.LL
// #.###L#.##
// ..#.#.....
// #L######L#
// #.LL###L.L
// #.#L###.##
// #.#L.L#.##
// #LLL#LL.L#
// L.L.L..#..
// #LLL.##.L#
// #.LL.LL.LL
// #.LL#L#.##
// ..L.L.....
// #L#LLLL#L#
// #.LLLLLL.L
// #.#L#L#.##
// #.#L.L#.##
// #LLL#LL.L#
// L.#.L..#..
// #L##.##.L#
// #.#L.LL.LL
// #.#L#L#.##
// ..L.L.....
// #L#L##L#L#
// #.LLLLLL.L
// #.#L#L#.##
// At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

// Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?
// Your puzzle answer was 2211.

// The first half of this puzzle is complete! It provides one gold star: *

// --- Part Two ---
// As soon as people start to arrive, you realize your mistake. People don't just care about adjacent seats - they care about the first seat they can see in each of those eight directions!

// Now, instead of considering just the eight immediately adjacent seats, consider the first seat in each of those eight directions. For example, the empty seat below would see eight occupied seats:

// .......#.
// ...#.....
// .#.......
// .........
// ..#L....#
// ....#....
// .........
// #........
// ...#.....
// The leftmost empty seat below would only see one empty seat, but cannot see any of the occupied ones:

// .............
// .L.L.#.#.#.#.
// .............
// The empty seat below would see no occupied seats:

// .##.##.
// #.#.#.#
// ##...##
// ...L...
// ##...##
// #.#.#.#
// .##.##.
// Also, people seem to be more tolerant than you expected: it now takes five or more visible occupied seats for an occupied seat to become empty (rather than four or more from the previous rules). The other rules still apply: empty seats that see no occupied seats become occupied, seats matching no rule don't change, and floor never changes.

// Given the same starting layout as above, these new rules cause the seating area to shift around as follows:

// L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL
// #.##.##.##
// #######.##
// #.#.#..#..
// ####.##.##
// #.##.##.##
// #.#####.##
// ..#.#.....
// ##########
// #.######.#
// #.#####.##
// #.LL.LL.L#
// #LLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLL#
// #.LLLLLL.L
// #.LLLLL.L#
// #.L#.##.L#
// #L#####.LL
// L.#.#..#..
// ##L#.##.##
// #.##.#L.##
// #.#####.#L
// ..#.#.....
// LLL####LL#
// #.L#####.L
// #.L####.L#
// #.L#.L#.L#
// #LLLLLL.LL
// L.L.L..#..
// ##LL.LL.L#
// L.LL.LL.L#
// #.LLLLL.LL
// ..L.L.....
// LLLLLLLLL#
// #.LLLLL#.L
// #.L#LL#.L#
// #.L#.L#.L#
// #LLLLLL.LL
// L.L.L..#..
// ##L#.#L.L#
// L.L#.#L.L#
// #.L####.LL
// ..#.#.....
// LLL###LLL#
// #.LLLLL#.L
// #.L#LL#.L#
// #.L#.L#.L#
// #LLLLLL.LL
// L.L.L..#..
// ##L#.#L.L#
// L.L#.LL.L#
// #.LLLL#.LL
// ..#.L.....
// LLL###LLL#
// #.LLLLL#.L
// #.L#LL#.L#
// Again, at this point, people stop shifting around and the seating area reaches equilibrium. Once this occurs, you count 26 occupied seats.

// Given the new visibility method and the rule change for occupied seats becoming empty, once equilibrium is reached, how many seats end up occupied?