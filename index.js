const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// HTML selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]//This expression produces an integer within the range of valid indices for the dataset
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)//recursive call 
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();//self call 

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);//substring(0, 7) extracts characters/number from index 0 to 6 (inclusive) 
        //truncated version (if its length exceeds the specified length)
        return subStr;
    } else {
        return str;
    }
}