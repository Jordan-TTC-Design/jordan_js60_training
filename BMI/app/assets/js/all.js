$(document).ready(() => {
    //1.先取得DOM上面的元件
    var btnBmiSubmit = document.querySelector('#btnBmiSubmit')
    var btnBmiDelete = document.querySelector('#btnBmiDelete')
    var bmiHeightNum = document.querySelector('#bmiHeightNum')
    var bmiWeightNum = document.querySelector('#bmiWeightNum')
    var recordList = document.querySelector('.recordList')
    //2.建立array
    var arrayBmiRecord = []
    //3.建立 BmiRecordData的各種類型
    var BmiRecordData = {
        tooThin: {
            title: '體重太輕',
        },
        normal: {
            title: '體重正常',
        },
        fat: {
            title: '胖',
        },
        littleFat: {
            title: '輕度肥胖',
        },
        middleFat: {
            title: '中度肥胖',
        },
        overFat: {
            title: '重度肥胖',
        },
    }
    function render() {
        var text = ''
        arrayBmiRecord.forEach(function (item) {
            text +=
                '<li class="recordBox"><ul><li class="recordBox__title">' +
                item.title +
                '</li><li class="recordBox__text">BMI:' +
                item.BMI +
                '</li><li class="recordBox__text">height：' +
                item.BMI +
                '</li><li class="recordBox__text">weight：' +
                item.BMI +
                '</li></ul></li>'
        })
        alert(text)
        recordList.innerHTML = text
    }
    // function textDelete(){

    // }
    function bmiCount() {
        var userRecord = {
            title: '',
            height: '',
            weight: '',
            BMI: '',
        }
        var heightNum = parseInt(bmiHeightNum.value)
        var weightNum = parseInt(bmiWeightNum.value)
        userRecord.height = heightNum
        userRecord.weight = weightNum
        userRecord.BMI = bmi
        var bmi = weightNum / (((heightNum / 100) * heightNum) / 100)

        if (bmi >= 35) {
            userRecord.title = BmiRecordData.overFat.title
        } else if (30 <= bmi && bmi < 35) {
            userRecord.title = BmiRecordData.middleFat.title
        } else if (27 <= bmi && bmi < 30) {
            userRecord.title = BmiRecordData.littleFat.title
        } else if (24 <= bmi && bmi < 27) {
            userRecord.title = BmiRecordData.fat.title
        } else if (18.5 <= bmi && bmi < 24) {
            userRecord.title = BmiRecordData.normal.title
        } else {
            userRecord.title = BmiRecordData.tooThin.title
        }
        //推送進去陣列
        arrayBmiRecord.push(userRecord)
        console.log(arrayBmiRecord)
        // 渲染到html
        render()
    }
    //監聽事件表
    btnBmiSubmit.addEventListener('click', bmiCount)
    // btnBmiDelete.addEventListener('click',textDelete);
})
