const coin = {
    state: 0,

    flip: function () {
        return this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    },

    toString: function () {

        if (this.state === 1) {
            return 'Tails'
        }
        if (this.state === 0) {
            return 'Heads'
        }

    },

    toHTML: function () {
        const image = document.createElement("img")

        if (this.state === 1) {
            image.src = 'assets/heads.png'
            image.alt = 'Heads'
        }

        if (this.state === 0) {
            image.src = 'assets/tails.png'
            image.alt = 'tails'
        }
        return image

    },
};

const display20Flips = () => {
    const results = [];

    for (let i = 0; i <= 20; i++) {
        coin.flip()
        coin.toString()
        results.push(coin.toString())

    }
    document.body.innerText = JSON.stringify(results.join(', '))
    console.log(results)
    return results
}

const display20Images = () => {
    const results = [];
    const imageResult = document.createElement('div')

    for (let i = 0; i <= 20; i++) {
        coin.flip()
        coin.toString()
        results.push(coin.toString())
        imageResult.appendChild(coin.toHTML())
    }
    document.body.appendChild(imageResult)
    console.log(results)
    return results
}

display20Flips()
display20Images()