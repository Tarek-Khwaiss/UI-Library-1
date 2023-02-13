import DropDownComponent from './ui-components/dropdown';
import TooltipComponent from './ui-components/tooltip';
import TabsComponent from './ui-components/tabs';

// create a tooltip
const tooltipText = document.querySelector('.tooltip');
let tip = new TooltipComponent(tooltipText);
tip.init();

// create dropdown
const dropdowns = document.querySelectorAll('.drop-down');

dropdowns.forEach(dropdown => {
    const dropComponent = new DropDownComponent(dropdown);
    dropComponent.init();
});

// create a tab
const tab = document.querySelector('.tabs');
const TabComponent = new TabsComponent(tab);
TabComponent.init();

