import {
    VIEWS,
    DIFFICULTY_BUTTONS,
    THEMES
} from "./constants.js";


export default class AppView {
    constructor() {
        // buttons
        this.difficultyButtons = document.querySelectorAll(Object.values(DIFFICULTY_BUTTONS));
        this.logoutButton = document.querySelector('.logout')
        this.nextButton = document.querySelector('.next')
        this.startButtons = document.querySelectorAll('.play');
        this.toMenuButton = document.querySelector('.return')
        // area for theme selection
        this.carousel = document.querySelector('.carousel');
        // login form
        this.loginForm = document.querySelector('#login')

        // TODO move to App
        // listeners
        this.nextButton.addEventListener('click', this.showLogIn.bind(this))
        this.toMenuButton.addEventListener('click', this.showMenu.bind(this))
        
        this.setUp();
    }

    setUp() {
        // set card back themes
        this.carousel.querySelectorAll('.card')
            .forEach((card, i) => {
                card.classList.add(THEMES[i]);
            });
    }

    showWelcome() {
        this._hideAllViews();
        this._showView(VIEWS.WELCOME);
    }

    showLogIn() {
        this._hideAllViews();
        this._showView(VIEWS.LOGIN);
    }

    showMenu() {
        this._hideAllViews();
        this._showView(VIEWS.MENU);
    }

    showGame() {
        this._hideAllViews();
        this._showView(VIEWS.GAME);
    }

    showGameEnd(gameResult, place) {
        this._hideAllViews();
        this._showView(VIEWS.RESULT);
        const view = document.querySelector(VIEWS.RESULT);
        view.querySelector('.time').innerHTML = gameResult;
        if (place) {
            view.querySelector('.place').innerHTML = place;
            view.querySelector('.record').classList.remove('hidden');
        } else {
            view.querySelector('.record').classList.add('hidden');
        }
    }

    toggleDifficulty(difficulty) {
        this.difficultyButtons.forEach(button => {
            if (button.classList.contains(difficulty)) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    }

    toggleCardBack(cardBackindex) {
        const cards = this.carousel.querySelectorAll('.card');
        cards.forEach((card, i) => {
            if (i === cardBackindex) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    setPlayerNames(player) {
        const firstnames = document.querySelectorAll('.first-name');
        const lastnames = document.querySelectorAll('.last-name');
        firstnames.forEach(node => node.innerHTML = player.firstname);
        lastnames.forEach(node => node.innerHTML = player.lastname);
    }

    unSetPlayerNames() {
        this.setPlayerNames({
            firstname: '',
            lastname: ''
        });
    }

    _hideAllViews() {
        for (let view of Object.values(VIEWS)) {
            document.querySelector(view).classList.add('hidden');
        }
    }

    _showView(view) {
        document.querySelector(view).classList.remove('hidden');
    }
}