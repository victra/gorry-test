function findFirstDuplicate() {
    const fs = require('fs')
    let data = [];
    if (process.argv.length < 3) {
        console.log('input not found!');
    } else {
        const input = process.argv[2];
        if (fs.existsSync(input)) {
            var arrInput = fs.readFileSync(input).toString();
            data = arrInput.toUpperCase().split('\n');
        } else {
            data = input.toUpperCase().split('\n');
        }
    }
    
    for (let i = 0; i < data.length; i++) {
        const line = data[i].split('');
        let lockString = '';
        for (let j = 0; j < line.length; j++) {
            if (lockString == line[j]) {
                console.log(line[j]);
                break;
            } else {
                if (j == line.length - 1) {
                    console.log(null);
                } else {
                    lockString = line[j];
                }
            }
        }
    }    
}

findFirstDuplicate();