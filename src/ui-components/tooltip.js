import './styles/tooltip.css';
class TooltipComponent {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute("data-message");
    }

    init() {
        // initializing the tooltip element
        const tooltip = document.createElement('div');
        tooltip.classList.add('tip');
        this.element.appendChild(tooltip);
        tooltip.textContent = this.message;

        // adding the event listeners
        this.element.addEventListener('mouseenter', (e) => {
            tooltip.classList.add('active');
        });
        this.element.addEventListener('mouseleave', (e) => {
            tooltip.classList.remove('active');
        });
    }
}

export { TooltipComponent as default };