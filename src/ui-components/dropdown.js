import './styles/dropdown.css';
class DropDownComponent {

    constructor(element) {
        this.element = element;
        this.trigger = element.querySelector('.trigger');
        this.content = element.querySelector('.content');
    }

    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
    }

}

export { DropDownComponent as default }