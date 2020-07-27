let S
let n
let posisi = [0, 1]
let m = 0

const takeInput = async (chunk) => { 
    let input = await parseInt(chunk)
    if (!input){
        throw Error(`Input Harus Angka`)
    }
    S = input
    n = S*S-1
    return generateMaze()
}

const generateMaze = () =>{

    const map = []
    for (let i=0; i<S; i++){
        map[i]=[]
        for (let j=0; j<S; j++){
            map[i].push(i>0 && i<S-1 && j>0 && j<S-1)
        }
    }
    while(n>0){
        let move = [[posisi[0]+1, posisi[1]], [posisi[0], posisi[1]+1], [posisi[0]-1, posisi[1]], [posisi[0], posisi[1]-1]]
            if (m<4 && map[move[m][0]][move[m][1]]){
                let next = [move[m][0], move[m][1]]
                map[posisi[0]][posisi[1]] = 1
                let moving = m
                switch (moving) {
                    case 0:
                    case 2:
                        if(map[posisi[0]][posisi[1]+1] !== 1){
                            map[posisi[0]][posisi[1]+1] = false
                        }
                        if(map[posisi[0]][posisi[1]-1] !== 1){
                            map[posisi[0]][posisi[1]-1] = false
                        }
                        break;
                    case 1:
                    case 3:
                        if(map[posisi[0]+1][posisi[1]] !== 1){
                            map[posisi[0]+1][posisi[1]] = false
                        }
                        if(map[posisi[0]-1][posisi[1]] !== 1){
                            map[posisi[0]-1][posisi[1]] = false
                        }
                        break;
                }
                posisi = next
            } else if(m>3){
                m = 0
            } else {
                m = m+1
            }
        n--
    }
    drawMaze(map)
}

const drawMaze = (map) => {
    let row = []
    for(let i=0; i<S; i++){
        let coll = []
        for(let j=0; j<S; j++){
            if(map[i][j]){
                coll[j] = ' '
            }
            if(map[i][j]){
                coll[j] = ' '
            } else {
                coll[j] = '@'
            }
        }
        if(i === 0) coll[1] = ' '
        row.push(coll.join('')+'\r\n')
    }
    let maze = row.join('')
    return console.log(maze);

}

console.log('Maze Generator')
console.log('Massukkan Ukuran Maze')
process.stdin.once('data', takeInput)