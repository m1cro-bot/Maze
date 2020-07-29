    let S = 15
    let n = S*S-1
    let posisi = [0, 1]
    let m = 0
    let draw = []
    let map = []
    for(let i=0; i<S; i++){
        map[i] = []
        draw[i] = []
        for(let j=0; j<S; j++){
            draw[i].push('@')
            map[i].push(i>0 && i<S-1 && j>0 && j<S-1 && (i != posisi[0] || j != posisi[1]))
        }
    }
    while( n>0 ){
        let move = [[posisi[0]+1, posisi[1]], [posisi[0], posisi[1]+1], [posisi[0]-1, posisi[1]], [posisi[0], posisi[1]-1]]
        if (m<4 && map[move[m][0]][move[m][1]]){
            let next = [move[m][0], move[m][1]]
            draw[posisi[0]][posisi[1]] = ' '
            switch (m) {
                case 0:
                case 2:
                    map[posisi[0]][posisi[1]+1] = false
                    map[posisi[0]][posisi[1]-1] = false
                    break;
                case 1:
                case 3:
                    map[posisi[0]+1][posisi[1]] = false
                    map[posisi[0]-1][posisi[1]] = false
                    break;
            }
            posisi = next
        } else if(m>3){
            m = 0
        } else {
            m = m+1
        }
        n = n-1
    }
    let text = []
    for(let i=0; i<S; i++){
        let line = []
        for(let j=0; j<S; j++){
            line[j] = draw[i][j]
        }
        text.push(line.join('')+'\r\n')
    }
    return console.log(text.join(''));

/* result

@ @@@@@@@@@@@@@
@ @           @
@ @ @@@@@@@@@ @
@ @ @       @ @
@ @ @ @@@@@ @ @
@ @ @ @   @ @ @
@ @ @ @ @ @ @ @
@ @ @ @ @ @ @ @
@ @ @ @@@ @ @ @
@ @ @     @ @ @
@ @ @@@@@@@ @ @
@ @         @ @
@ @@@@@@@@@@@ @
@             @
@@@@@@@@@@@@@@@
*/