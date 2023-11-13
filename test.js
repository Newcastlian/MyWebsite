let result = document.getElementById("calcText").value;

console.log(result)

let calculate = (number) => {
    if (result) {
        result.value += number;
    } else {
        console.error("not workin ;(")
    }

}

console.log(result)