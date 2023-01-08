const close = document.querySelector('#close')
const rules = document.querySelector('#rules')
const rulesBtn = document.querySelector('#rulesBtn')

const scissors = document.querySelector('#scissors')
const spock = document.querySelector('#spock')
const paper = document.querySelector('#paper')
const lizard = document.querySelector('#lizard')
const rock = document.querySelector('#rock')

const pentagon = document.querySelector('#pentagon')
const enemy = document.querySelector('#enemy')
const enemyInside = document.querySelector('.enemyInside')
const titleOfChoosen = document.querySelector('#titleOfChoosen')
const h4 = document.querySelectorAll('h4')
const you = document.querySelector('#you')
const pc = document.querySelector('#pc')
const conclusion = document.querySelector('#conclusion')

let score = 0
const numScore = document.querySelector('#numScore')
const playAgain = document.querySelector('#playAgain')

const result = document.querySelector('#result')
const array = ['scissors', 'spock', 'paper', 'lizard', 'rock', 'scissors', 'spock', 'paper', 'lizard', 'rock']

close.addEventListener('click', () => {
    rules.setAttribute('style', 'display:none')
})

rulesBtn.addEventListener('click', () => {
    rules.removeAttribute('style', 'display:none')
})



function choose() {
    let id = this.id

    num = Math.floor(Math.random() * 10)

    pentagon.classList.add('opacityOFF')
    enemy.classList.add('opacityON')

    you.classList.add('opacityON')
    pc.classList.add('opacityON')


    if (id === 'scissors') {

        scissors.classList.add('chosen')

        spock.classList.add('notChosen')

        paper.classList.add('notChosen')

        lizard.classList.add('notChosen')

        rock.classList.add('notChosen')


        if (num === 2 || num === 3 || num === 6 || num === 7) {
            conclusion.innerHTML = 'YOU WON'
            score = score + 1

            setTimeout(() => {
                numScore.innerHTML = `${score}`
            }, 2300)

            setTimeout(() => {
                scissors.classList.add('radial')
            }, 3200)

        } else if (num === 0 || num === 5) {
            conclusion.innerHTML = 'DRAW'
        } else {
            conclusion.innerHTML = 'YOU LOSE'

            setTimeout(() => {
                enemy.classList.add('radial')
            }, 3200)
        }


        const arScissors = [paper, rock, lizard, spock]

        setTimeout(() => {

            scissors.classList.add('final')

        }, 2000)

        setTimeout(() => {
            arScissors.forEach(el => {

                el.classList.add('opacity')

            })
        }, 1000)

        translateWords()

    } else if (id === 'spock') {

        scissors.classList.add('notChosen')

        spock.classList.add('chosen')

        paper.classList.add('notChosen')

        lizard.classList.add('notChosen')

        rock.classList.add('notChosen')


        if (num === 0 || num === 4 || num === 5 || num === 9) {
            conclusion.innerHTML = 'YOU WON'
            score = score + 1
            setTimeout(() => {
                numScore.innerHTML = `${score}`
            }, 2300)

            setTimeout(() => {
                spock.classList.add('radial')
            }, 3200)
        } else if (num === 1 || num === 6) {
            conclusion.innerHTML = 'DRAW'
        } else {
            conclusion.innerHTML = 'YOU LOSE'

            setTimeout(() => {
                enemy.classList.add('radial')
            }, 3200)
        }


        const arSpock = [paper, scissors, lizard, rock]

        setTimeout(() => {

            spock.classList.add('final')

        }, 2000)

        setTimeout(() => {
            arSpock.forEach(el => {
                el.classList.add('opacity')
            })
        }, 1000)

        translateWords()

    } else if (id === 'paper') {

        scissors.classList.add('notChosen')

        spock.classList.add('notChosen')

        paper.classList.add('chosen')

        lizard.classList.add('notChosen')

        rock.classList.add('notChosen')


        if (num === 1 || num === 4 || num === 6 || num === 9) {
            conclusion.innerHTML = 'YOU WON'
            score = score + 1
            setTimeout(() => {
                numScore.innerHTML = `${score}`
            }, 2300)

            setTimeout(() => {
                paper.classList.add('radial')
            }, 3200)
        } else if (num === 2 || num === 7) {
            conclusion.innerHTML = 'DRAW'
        } else {
            conclusion.innerHTML = 'YOU LOSE'

            setTimeout(() => {
                enemy.classList.add('radial')
            }, 3200)
        }


        const arPaper = [rock, scissors, lizard, spock]

        setTimeout(() => {

            paper.classList.add('final')

        }, 2000)

        setTimeout(() => {
            arPaper.forEach(el => {
                el.classList.add('opacity')
            })
        }, 1000)

        translateWords()

    } else if (id === 'lizard') {

        scissors.classList.add('notChosen')
        spock.classList.add('notChosen')

        paper.classList.add('notChosen')

        lizard.classList.add('chosen')

        rock.classList.add('notChosen')


        if (num === 1 || num === 2 || num === 6 || num === 7) {
            conclusion.innerHTML = 'YOU WON'
            score = score + 1
            setTimeout(() => {
                numScore.innerHTML = `${score}`
            }, 2300)

            setTimeout(() => {
                lizard.classList.add('radial')
            }, 3200)
        } else if (num === 3 || num === 8) {
            conclusion.innerHTML = 'DRAW'
        } else {
            conclusion.innerHTML = 'YOU LOSE'

            setTimeout(() => {
                enemy.classList.add('radial')
            }, 3200)
        }



        const arLizard = [paper, scissors, rock, spock]

        setTimeout(() => {

            lizard.classList.add('final')

        }, 2000)

        setTimeout(() => {
            arLizard.forEach(el => {
                el.classList.add('opacity')
            })
        }, 1000)

        translateWords()

    } else if (id === 'rock') {

        scissors.classList.add('notChosen')

        spock.classList.add('notChosen')

        paper.classList.add('notChosen')

        lizard.classList.add('notChosen')

        rock.classList.add('chosen')


        if (num === 0 || num === 3 || num === 5 || num === 8) {
            conclusion.innerHTML = 'YOU WON'
            score = score + 1
            setTimeout(() => {
                numScore.innerHTML = `${score}`
            }, 2300)

            setTimeout(() => {
                rock.classList.add('radial')
            }, 3200)
        } else if (num == 4 || num === 9) {
            conclusion.innerHTML = 'DRAW'
        } else {
            conclusion.innerHTML = 'YOU LOSE'

            setTimeout(() => {
                enemy.classList.add('radial')
            }, 3200)
        }



        const arRock = [paper, scissors, lizard, spock]

        setTimeout(() => {

            rock.classList.add('final')
        }, 2000)

        setTimeout(() => {
            arRock.forEach(el => {
                el.classList.add('opacity')
            })
        }, 1000)


        translateWords()

    }

    setTimeout(() => {

        enemy.classList.add('show')

    }, 2000)
    setTimeout(enemyChoose, 2000)
    setTimeout(finalResult, 2000)
}

scissors.addEventListener('click', choose)
spock.addEventListener('click', choose)
paper.addEventListener('click', choose)
lizard.addEventListener('click', choose)
rock.addEventListener('click', choose)

function translateWords() {
    setTimeout(() => {
        you.classList.add('showWords')
        pc.classList.add('showWords')
    }, 2000)
}

function enemyChoose() {


    enemyInside.classList.add('showMe')
    enemy.classList.add(array[num])
    enemyInside.innerHTML = `<img src='images/icon-${array[num]}.svg'>`

}

function finalResult() {
    result.classList.add('go')
}

function restart() {
    console.log('clicked')
    scissors.classList.remove('chosen', 'final', 'notChosen', 'opacity', 'radial')
    spock.classList.remove('notChosen', 'chosen', 'final', 'opacity', 'radial')
    paper.classList.remove('notChosen', 'chosen', 'final', 'opacity', 'radial')
    lizard.classList.remove('notChosen', 'chosen', 'final', 'opacity', 'radial')
    rock.classList.remove('notChosen', 'chosen', 'final', 'opacity', 'radial')
    pentagon.classList.remove('opacityOFF')
    enemy.classList.remove('opacityON')

    result.classList.remove('go')

    enemyInside.classList.remove('showMe')
    enemy.classList.remove('show', 'scissors', 'paper', 'rock', 'spock', 'lizard', 'radial')
    enemyInside.innerHTML = ``
    you.classList.remove('showWords', 'opacityON')
    pc.classList.remove('showWords', 'opacityON')
}
playAgain.addEventListener('click', restart)
