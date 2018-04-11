import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public personalInput = 'Eggplant'; 
    
    public incrementCounter() {
        this.currentCount++;
    }
    public inputText(event: any) {
       this.personalInput = event.target.value;
        console.log(event);
    }
}
