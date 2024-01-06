import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  animations: [
    trigger('optionsAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'scaleY(1)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'scaleY(0)'
      })),
      transition('closed <=> open', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class CustomSelectComponent {
  @Input() enableSearchBar = false;
  @Input() options: string[] = [];
  @Input() defaultOption = '';
  selectedOption = '';
  showOptions = false;
  searchTerm = '';
  filteredOptions: string[] = [];

  toggleOptions() {
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      this.filterOptions();
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showOptions = false;
  }

  isDropdownVisible() {
    return this.showOptions ? 'open' : 'closed';
  }

  onAnimationDone(event: AnimationEvent) {
    this.showOptions = (event.toState === 'open');
  }

  filterOptions() {
    if (this.searchTerm === '') {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.selectedOption = this.defaultOption;
  }
}