document.getElementById('greeter').addEventListener("input", function() {
    document.getElementById('username').textContent = this.value;
});

function saveName() {
    document.getElementById('greeter').value = "";
}