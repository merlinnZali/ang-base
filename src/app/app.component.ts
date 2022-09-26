import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interpollation';
  public getScreenWidth: any;
  public getScreenHeight: any;
  // rotate: RotateProp | undefined
  //for this
  //<fa-icon [icon]="['fas', 'coffee']" otate="270"></fa-icon>
  direction = 'left'
  
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  
  warningField(): boolean {
    return true;
  }
}

