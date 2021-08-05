function apple(x){
    var convNum = parseInt(x*x) // converts string to number + squares it
    if (convNum >= 1000) {
        return 'It\'s hotter than the sun!!';
    } else {
        return 'Help yourself to a honeycomb Yorkie for the glovebox.';
    }
}

console.log(apple('50')) // Return: 'it's hotter than the sun'