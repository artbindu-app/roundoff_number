
// ------------------------------
const converterConfig = {
    billion_million_trillion_converter_config: {
        western: {
            'BU': 1,
            'M': 1000000,
            'B': 1000000000,
            'T': 1000000000000
        },
        indian: {
            'BU': 1,
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

let liveLocation = null;
let isRenderMuhurata = false;
const muhurta = 48 // minutes;
const muhurutSeries = [
    {
        index: 1,
        name: 'Mitra', 
        startTime: null,
        endTime: null
    },{
        index: 2,
        name: 'Rudra', 
        startTime: null,
        endTime: null
    },{
        index: 3,
        name:  'Ahi', 
        startTime: null,
        endTime: null
    },{
        index: 4,
        name:  'Pitala', 
        startTime: null,
        endTime: null
    },{
        index: 5,
        name:  'Varaha', 
        startTime: null,
        endTime: null
    },{
        index: 6,
        name:  'Vasu',
        startTime: null,
        endTime: null
    },{
        index: 7,
        name:  'Vishvedeva',
        startTime: null,
        endTime: null
    },{
        index: 8,
        name:  'Vidhi',
        startTime: null,
        endTime: null
    },{
        index: 9,
        name:  'Puruhuta',
        startTime: null,
        endTime: null
    },{
        index: 10,
        name:  'Saat Mukhi',
        startTime: null,
        endTime: null
    },{
        index: 11,
        name:  'Vahini',
        startTime: null,
        endTime: null
    },{
        index: 12,
        name:  'Varuna',
        startTime: null,
        endTime: null
    },{
        index: 13,
        name:  'Naktankara', 
        startTime: null,
        endTime: null
    },{
        index: 14,
        name: 'Aaryama', 
        startTime: null,
        endTime: null
    },{
        index: 15,
        name: 'Girish', 
        startTime: null,
        endTime: null
    },{
        index: 16,
        name: 'Bhaga', 
        startTime: null,
        endTime: null
    },{
        index: 17,
        name: 'Ajapada', 
        startTime: null,
        endTime: null
    },{
        index: 18,
        name: 'Budhnya', 
        startTime: null,
        endTime: null
    },{
        index: 19,
        name: 'Ahir', 
        startTime: null,
        endTime: null
    },{
        index: 20,
        name: 'Ashwini', 
        startTime: null,
        endTime: null
    },{
        index: 21,
        name: 'Pushya', 
        startTime: null,
        endTime: null
    },{
        index: 22,
        name: 'Yama', 
        startTime: null,
        endTime: null
    },{
        index: 23,
        name: 'Vidhat', 
        startTime: null,
        endTime: null
    },{
        index: 24,
        name: 'Agni', 
        startTime: null,
        endTime: null
    },{
        index: 25,
        name: 'Aditi', 
        startTime: null,
        endTime: null
    },{
        index: 26,
        name: 'Kanda', 
        startTime: null,
        endTime: null
    },{
        index: 27,
        name: 'Vishnu', 
        startTime: null,
        endTime: null
    },{
        index: 28,
        name: 'Yumigadyuti', 
        startTime: null,
        endTime: null
    },{
        index: 29,
        name: 'Brahma', 
        startTime: null,
        endTime: null
    },{
        index: 30,
        name: 'Samudram', 
        startTime: null,
        endTime: null
    }
]

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
    let _inputHeight = 0;
    if (inputVal.height.type === 'FI') {
        _inputHeight = inputVal.height.val?.match(/\d+/gi)?.filter(x => !isNaN(x))?.filter((x, i) => (i === 0 || i === 1));
    } else {
        _inputHeight = inputVal.height.val?.match(/\d+/gi)?.filter(x => !isNaN(x))?.filter((x, i) => i === 0);
    }
    inputVal.height.val = _inputHeight?.map((x, i) => i === 0 ? Number(x) : (Number(x) / 12))?.reduce((acc, ele) => acc + ele, 0);
    console.log(`Filter Input Height: ${_inputHeight}  ${inputVal.height.type} \n Formatted Height: ${inputVal.height.val} ${inputVal.height.type}`);

    if(!inputVal.age.val) inputVal.age.val = 20.01; // default age is adult (> 20)
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
        if (_isChild === 'adult') {
            _bmiMeter_subClassVal = '-' + jsonData.bmi_chart.adult_advance[
                Object.keys(jsonData.bmi_chart.adult_advance)
                    ?.map(x => x.split(/\s+\-\s+/g))
                    ?.filter(x => _bmi >= x[0] && _bmi <= x[1])[0].join(' - ')
            ];
        }

        // document.getElementById("bmiOutputType011").style.visibility= _isChild === 'child' ? "hidden" : "visible";  
        // document.getElementById("bmiOutputType012").style.visibility=_isChild === 'child' ? "visible" : "hidden"; 

        document.getElementById('bmiOutputValue01').value = _bmi;
        document.getElementById('bmiOutputType01').value = _bmiMeter_val + _bmiMeter_subClassVal;
        document.getElementById('bmiInputType00').value = _isChild.toLowerCase();
    } else {
        document.getElementById('bmiInputValue00').value = '';
        document.getElementById('bmiInputType00').selectedIndex = 0;
        document.getElementById('bmiInputValue01').value = '',
            document.getElementById('bmiInputType01').selectedIndex = 0;
        document.getElementById('bmiInputValue02').value = '',
            document.getElementById('bmiInputType02').selectedIndex = 0;

        document.getElementById('bmiOutputValue01').value = "0.00";
        document.getElementById('bmiOutputType01').selectedIndex = 0;
    }
}

function currentLocation() {
    if (navigator && navigator.geolocation) {
        navigator.geolocation
            .getCurrentPosition(function(position) {
          console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
          liveLocation = {
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            };
        });
    }
}
function weatherForecast(geo_position = liveLocation) {
    if(isRenderMuhurata) return;
    if(!geo_position) {
        console.log('No Live Location');
        isRenderMuhurata = false;
        return;
        // geo_position = {
        //     latitude: Number(document.getElementById('latitude').value) || 22.5744,
        //     longitude: Number(document.getElementById('longitude').value) || 88.3629
        // }
    }
    

    const api_url = `https://api.open-meteo.com/v1/forecast?latitude=${geo_position.latitude}&longitude=${geo_position.longitude}&hourly=cloud_cover,visibility,direct_radiation,uv_index,uv_index_clear_sky&daily=sunrise,sunset,sunshine_duration,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=1&models=gfs_seamless`;

    let req = new XMLHttpRequest();

    req.open("GET", api_url);
    req.onload = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            isRenderMuhurata = true;
            if (req.status === 200) {
                resData = JSON.parse(req.response);
                // console.log(resData)
                // SunRise SunSet Value:
                // document.getElementById('latitude').value = geo_position.latitude;
                // document.getElementById('longitude').value = geo_position.longitude;

                document.getElementById("day-start-end-time").innerHTML = `SunRise: ${resData.daily.sunrise} <br> SunSet: ${resData.daily.sunset}
                                <br><br> ${getMuhurta(resData.daily.sunrise)} `;
            } else {
                console.log(`Request failed with status code ${req.status} from url ${req.responseURL}`);
            }
        }
    };
    req.onerror = error => {
        console.log(`Request failed with error ${error.type}`);
    };
    req.send();
}

const minToHhrMin = ((val) => `${String(parseInt(val/60)).padStart(2, '0')}:${String(val%60).padStart(2, '0')}`);
const paseTimeInMinutesFromDate = ((dt) => dt.getHours()*60+dt.getMinutes());
const muhurtaSwitch = ((index) => index<=28 ? index%29-1 : index-31)

function getMuhurta(time1) {
    let dt = new Date(time1);

    let res = '';
    muhurutSeries.forEach(ele => ele.index = muhurtaSwitch(ele.index));
    muhurutSeries.sort((a,b) => a.index - b.index)
        .forEach((ele, index) => {
        ele.startTime=  minToHhrMin((paseTimeInMinutesFromDate(dt) + muhurta*ele.index)%(24*60));
        ele.endTime= minToHhrMin((paseTimeInMinutesFromDate(dt) + muhurta*(ele.index+1))%(24*60));
        res += `<span style="float:left;">${index+1}: ${ele.name} Muhurta: ${ele.startTime} - ${ele.endTime} (${muhurta}M)</span><br>`;
    })
    return res;
}

function renderMuhurtaData() {
    console.log('isRenderMuhurata:', isRenderMuhurata)
    if(!isRenderMuhurata) {
        const muhurtaInterval = setInterval(weatherForecast, 1000);
        if(isRenderMuhurata) {
            clearInterval(muhurtaInterval);
        }
    }
}


(function defaultTrigger() {
    currentLocation();
    renderMuhurtaData();
})()



