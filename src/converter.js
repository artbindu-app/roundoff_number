


// ------------------------------
const converterConfig = {
    billion_million_trillion_converter_config: {
        western: {
            'M': 1000000,
            'B': 1000000000,
            'T': 1000000000000
        },
        indian: {
            'L': 100000,
            'C': 10000000
        }
    },
    bmi_config: {
        height: {
            'CM': 0.01,
            'FI': 0.3048 // convert to cm
        },
        weight: {
            'Kg': 1,
            'Lbs': 0.453592 // convert to Kg
        },
        age: {
            '00 - 20': 'child', // Child
            '20 - 150': 'adult' //  Adult
        },
        bmi_chart: {
            child: {
                '00.00 - 04.9999': 'c-Underweight',
                '05.00 - 84.9999': 'c-Healthy Weight',
                '85.00 - 94.9999': 'c-At risk of Overweight',
                '95.00 - 9999999': 'c-Overweight'
            },
            adult: {
                '00.00 - 18.49999': 'Underweight',

                '18.50 - 24.99999': 'Normal Weight',
                '25.00 - 29.99999': 'Overweight',

                '30.00 - Infinity': 'Obesity'
            },
            adult_advance: {
                '00.00 - 15.99999': 'Severe Thinness',
                '16.00 - 16.99999': 'Moderate Thinness',
                '17.00 - 18.49999': 'Mild Thinness',

                '18.50 - 24.99999': 'Normal',
                '25.00 - 29.99999': 'Overweight',

                '30.00 - 34.99999': 'Obese Class I',
                '35.00 - 39.99999': 'Obese Class II',
                '40.00 - Infinity': 'Obese Class III'
            }
        }
    }
};

function onBillionMillionTrillionConvert(key = 'billion_million_trillion_converter_config') {
    const jsonData = converterConfig[key];
    const wVal = {
        val: document.getElementById('bmtInputValue01').value,
        type: document.getElementById('bmtInputType01').value
    };
    const iVal = {
        val: document.getElementById('bmtInputValue02').value,
        type: document.getElementById('bmtInputType02').value
    };

    console.log(wVal, iVal);
    if (wVal.val) {
        let num = Number(wVal.val) * Number(jsonData.western[wVal.type]);
        num = num / Number(jsonData.indian[iVal.type]);
        document.getElementById('bmtInputValue02').value = num ? num : '';
    } else if (iVal.val) {
        let num = Number(iVal.val) * Number(jsonData.indian[iVal.type]);
        num = num / Number(jsonData.western[wVal.type]);
        document.getElementById('bmtInputValue01').value = num ? num : '';
    } else {
        document.getElementById('bmtInputValue02').value = '';
        document.getElementById('bmtInputType01').selectedIndex = 0;

        document.getElementById('bmtInputValue01').value = '';
        document.getElementById('bmtInputType02').selectedIndex = 0;
    }
    console.log('BM:', wVal);
}

function onBMIConvert(key = 'bmi_config') {
    const jsonData = converterConfig[key];
    const inputVal = {
        age: {
            val: document.getElementById('bmiInputValue00').value,
            type: null // document.getElementById('bmiInputType00').value
        },
        height: {
            val: document.getElementById('bmiInputValue01').value,
            type: document.getElementById('bmiInputType01').value
        },
        weight: {
            val: document.getElementById('bmiInputValue02').value,
            type: document.getElementById('bmiInputType02').value
        }
    };
    // const outputVal = {
    //     val: document.getElementById('bmiOutputValue01').value,
    //     type: document.getElementById('bmiOutputType01').value
    // };

    if (inputVal.weight.val > 0 && inputVal.height.val > 0 && inputVal.age.val > 0) {
        let _isChild = jsonData.age[Object.keys(jsonData.age)?.map(x => x.split(/\s+\-\s+/g))
            ?.filter(x => Number(inputVal.age.val) >= x[0] && Number(inputVal.age.val) <= x[1])[0].join(' - ')];
        let _weight = Number(inputVal.weight.val) * Number(jsonData.weight[inputVal.weight.type]);
        let _height = Number(inputVal.height.val) * Number(jsonData.height[inputVal.height.type]);
        let _bmi = Number((_weight / (_height * _height)).toFixed(2));
        console.log(inputVal, _bmi);

        let _bmiMeter_key = Object.keys(jsonData.bmi_chart[_isChild])?.map(x => x.split(/\s+\-\s+/g))
                            ?.filter(x => _bmi >= x[0] && _bmi <= x[1])[0].join(' - ');
        let _bmiMeter_val = jsonData.bmi_chart[_isChild][_bmiMeter_key];
        let _bmiMeter_subClassVal = '';
        if(_isChild === 'adult') {
            _bmiMeter_subClassVal = '-' + jsonData.bmi_chart.adult_advance[
                Object.keys(jsonData.bmi_chart.adult_advance)
                        ?.map(x => x.split(/\s+\-\s+/g))
                        ?.filter(x => _bmi >= x[0] && _bmi <= x[1])[0].join(' - ')
            ];
        }

        // document.getElementById("bmiOutputType011").style.visibility= _isChild === 'child' ? "hidden" : "visible";  
        // document.getElementById("bmiOutputType012").style.visibility=_isChild === 'child' ? "visible" : "hidden"; 

        document.getElementById('bmiOutputValue01').value = _bmi;
        document.getElementById('bmiOutputType01').value = _bmiMeter_val+_bmiMeter_subClassVal;
        document.getElementById('bmiInputType00').value = _isChild.toLowerCase();
    } else {
        document.getElementById('bmiInputValue00').value = '';
        document.getElementById('bmiInputType00').selectedIndex = 0;
        document.getElementById('bmiInputValue01').value = '',
        document.getElementById('bmiInputType01').selectedIndex = 0;
        document.getElementById('bmiInputValue02').value = '',
        document.getElementById('bmiInputType02').selectedIndex = 0;

        document.getElementById('bmiOutputValue01').value = 0.00;
        document.getElementById('bmiOutputType01').selectedIndex = 0;
        document.getElementById('bmiOutputValue02').value = 0.00;
        document.getElementById('bmiOutputType02').selectedIndex = 0;
    }
}


