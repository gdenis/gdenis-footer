import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdenisFooterComponent } from './gdenis-footer.component';

describe('GdenisFooterComponent', () => {
  let component: GdenisFooterComponent;
  let fixture: ComponentFixture<GdenisFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdenisFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdenisFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
