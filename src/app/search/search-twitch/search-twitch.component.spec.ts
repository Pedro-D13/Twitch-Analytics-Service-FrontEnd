import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTwitchComponent } from './search-twitch.component';

describe('SearchTwitchComponent', () => {
  let component: SearchTwitchComponent;
  let fixture: ComponentFixture<SearchTwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
