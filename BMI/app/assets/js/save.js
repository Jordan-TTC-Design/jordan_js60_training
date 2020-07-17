$(document).ready(() => {
    //請解讀 Vic 的(程式碼)，並在 Slack 上回報他以下邏輯是做了什麼事情：

    // arrayBMIrecord 的陣列用途是什麼？
    //用來儲存每次重新整理之前的BMI查詢記錄
    // 請描述 calculateBMI 函式做了什麼事情
    // 1. 先取值
    // 2. 把數值計算成BMI值
    // 3. 宣告一個空變數，內容包含[身高、體重、BMI、title]
    // 4. 把身高、體重、BMI值存在那個空變數，
    // 5. if判斷BMI屬於哪種title，知道之後賦值給status.title
    // 6. 把結果push去arrayBMIrecord
    // 7. 執行render()函式
    // 8. 把input清空
    // 請描述 render 函式做了什麼事情
    //render主要用來產生innerHtml，顯示結果

    // 重新命名: 元素名稱+客製化名稱

    var inputHeight = document.querySelector('.height')
    var inputKg = document.querySelector('.kg')
    var btnSend = document.querySelector('.send')
    var listRecord = document.querySelector('.list')
    var arrayBMIrecord = []

    /* 定義物件資料，此為 BMIData物件之所有屬性 */
    var BMIData = {
        overThin: {
            class: 'text-secondary',
            nameStatus: '體重過輕',
        },
        normal: {
            class: 'text-primary',
            nameStatus: '正常',
        },
        warning: {
            class: 'text-warning',
            nameStatus: '過重',
        },
        danger: {
            class: 'text-danger',
            nameStatus: '危險',
        },
    }

    /* 渲染畫面 */
    // forEach()，取出陣列所有物件並做處理

    function render() {
        var str = ''
        arrayBMIrecord.forEach(function (item) {
            return (str +=
                '<li>BMI指數為 :' +
                item.BMI +
                ' 狀態是 <span class="' +
                BMIData[item.status].class +
                '">' +
                BMIData[item.status].nameStatus +
                '</span></li>')
        })
        listRecord.innerHTML = str
    }

    /* 處理/加入資料， */
    function calculateBMI() {
        var numberHeight = inputHeight.value
        var numberKG = inputKg.value
        var numberBMI = parseInt(numberKG / (numberHeight / 100) ** 2)
        // 定義紀錄資料
        var userRecord = {
            height: '',
            weight: '',
            BMI: '',
            status: '',
        }
        // 增加資料到物件
        userRecord.height = Number(numberHeight)
        userRecord.weight = Number(numberKG)
        userRecord.BMI = numberBMI
        if (numberBMI < 18.5) {
            userRecord.status = 'overThin'
        } else if (numberBMI >= 18.5 && numberBMI <= 23) {
            userRecord.status = 'normal'
        } else if (numberBMI > 23 && numberBMI <= 35) {
            userRecord.status = 'warning'
        } else {
            userRecord.status = 'danger'
        }
        // 增加物件到陣列
        arrayBMIrecord.push(userRecord)

        //渲染畫面
        render()

        inputHeight.value = ''
        inputKg.value = ``
    }

    btnSend.addEventListener('click', calculateBMI)
})
