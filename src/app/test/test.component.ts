import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'test works!';

  onClick(event, value) {
    console.log(event);
    console.log('clicked', value);
  }

  constructor() { }

  ngOnInit() {
  }

}
