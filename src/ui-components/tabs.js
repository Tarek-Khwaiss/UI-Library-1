import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (e.target.tagName === 'LI') {
                    this.toggleTabs(e);
                    this.toggleContent(e);
                }
            });
        });
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add new active class
        let selector = e.target.getAttribute('data-target');
        console.log(selector);
        let query = '.' + selector;
        console.log(query);
        const currentContent = document.querySelector(query);
        console.log(currentContent);
        currentContent.classList.add('active');
    }
}

export { Tabs as default };