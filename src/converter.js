


// ------------------------------
const jsonList = {
    western: {
        'M': 1000000,
        'B': 1000000000,
        'T': 1000000000000
    },
    indian: {
        'L': 100000,
        'C': 10000000
    }
};

function onConvert() {
    const wVal = {
        val: document.getElementById('numberVal').value,
        type: document.getElementById('w_TypeVal').value
    };
    const iVal = {
        val: document.getElementById('i_number').value,
        type: document.getElementById('i_TypeVal').value
    };

    console.log(wVal, iVal);
    if (wVal.val) {
        let num = Number(wVal.val) * Number(jsonList.western[wVal.type]);
        num = num / Number(jsonList.indian[iVal.type]);
        document.getElementById('i_number').value = num;
    } else if (iVal.val) {
        let num = Number(iVal.val) * Number(jsonList.indian[iVal.type]);
        num = num / Number(jsonList.western[wVal.type]);
        document.getElementById('numberVal').value = num;
    } else {
        document.getElementById('i_number').value = 1;
        document.getElementById('numberVal').value = 0;
    }
    console.log('BM:', wVal);
}

