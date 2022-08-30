function add() {
    const input1 = document.getElementById("input1");
    const elements = document.querySelectorAll('input');

    console.log(input1);
    function test() {
        const elements = document.querySelectorAll('input');
        // const input1 = document.getElementById("input1");
        console.log(input);
        console.log(elements[0].value);
        console.log(elements[1].value);
    }
    function add() {
        const elements = document.querySelectorAll('input');
        const val1 = elements[0].value;
        const val2 = elements[1].value;
        const resultElm = document.getElementById('result');
        let result = parseInt(val1) + parseInt(val2);
        resultElm.innerHTML = result;
    }
};