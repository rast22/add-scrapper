import { Component } from '@angular/core';
import {add, AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'add-scrapper-front';
  isLoad: boolean = false;
  allAdds: add[] = [];
  showenAdds:add[] = [];

  constructor(private appService: AppService) { }

    ngOnInit() {
      this.appService.getAdds().subscribe({
        next: (data:add[]) => {
          this.allAdds = data;
          this.showenAdds = this.allAdds.slice(0, 15);
          this.isLoad = true;
        },
        error: (err) => {
          this.isLoad = false;
          console.log(err);
        }
      })
      }

    handlePageEvent(event: any) {
      this.showenAdds = this.allAdds.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
      }
}

