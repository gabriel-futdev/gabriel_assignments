import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { SharedComponent } from '../shared/shared.component';
import { DisplayComponent } from '../display/display.component';



@Component ({
    selector: 'app-func-buttons',

    templateUrl: 'funcbuttons.component.html',
    styleUrls: ['../shared/style.css']
})

export class FuncButtonsComponent implements OnInit {
    public toCompute = '';
    public hist = '';
    isFading = false;

    appendThis(appnd: string): void {
      $('#disp').show();
      $('.eq-sign').hide();
      this.checkForError();
      if (this.toCompute === '0' && appnd === '0') {
      } else if (this.toCompute === '0' && parseInt(appnd, 10) > 0) {
        this.toCompute = appnd;
      } else {
        this.toCompute += appnd;
      }
      //console.log(this.toCompute);
      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    checkForError() {
      if ((this.toCompute.startsWith('Error')) ||
          (this.hist.startsWith('Error')) ||
          (this.toCompute.startsWith('Infinity')) ||
          (this.hist.startsWith('Infinity'))) {
            this.toCompute = '0';
            this.hist = '';
            $('.eq-sign').hide();
          }
    }
    del() {
      $('.eq-sign').hide();
      $('disp').show();
      if (this.hist.startsWith('Error, Invalid Format')) {
        this.toCompute = '0';
        this.hist = '';
      } else if (this.toCompute.startsWith('Infinity') || this.toCompute.startsWith('-Infinity')) {
        this.toCompute = '0';
        this.hist = '';
      } else if (this.toCompute === '') {
        this.toCompute = '0';
        this.hist = '';
      } else {
        this.toCompute = this.toCompute.slice(0, this.toCompute.length - 1);
      }

      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    delAll() {
      this.toCompute = '';

      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    neg() {
      if (!this.toCompute.startsWith('-')) {
        this.toCompute = '-' + this.toCompute;
      } else {
        this.toCompute = this.toCompute.slice(1, this.toCompute.length);
      }

      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    clear() {
      this.toCompute = '0';
      this.hist = '';
      $('.eq-sign').hide();

      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    calculate() {
      this.checkIfNull();
      $('#disp').hide();
      $('#history').hide();
      setTimeout(this.getResult(), 100);
      setTimeout(this.displayHistory(), 500);

      SharedComponent.prototype.setComputedExp(this.toCompute);
      SharedComponent.prototype.setHistory(this.hist);
      DisplayComponent.prototype.getComputedValue();
    }
    checkIfNull() {
      if (this.toCompute === '') {
        this.hist = '';
      }
      if (this.toCompute === '0') {
        $('.eq-sign').hide();
        console.log('should hide the equal sign');
      }
    }
    getResult() {
      this.checkForError();
      try {
        if (this.toCompute !== '' || parseFloat(this.toCompute) !== 0) {
          this.hist = this.toCompute;
          this.toCompute = this.toCompute.replace('x', '*');
          this.toCompute = eval (this.toCompute).toFixed(2);
        // console.log('the value of toCompute: ' + this.toCompute);
          if (parseFloat (this.toCompute) - (Math.floor (parseInt (this.toCompute, 10))) !== 0 ) {
          } else {
            this.toCompute = Math.floor(parseInt(this.toCompute, 10)) + '';
          //  console.log(this.toCompute);
          }
          $('#disp').fadeIn();
          $('.eq-sign').fadeIn();
        } else {
          this.toCompute = '0';
          $('#disp').show();
          this.hist = '';
          $('.eq-sign').hide();
          console.log('triggered! : ' + this.toCompute);
        }
      } catch (error) {
      // console.log('the value of toCompute: ' + this.toCompute);
        this.toCompute = 'Error, Invalid Format';
        this.hist = this.toCompute;
      }
    }
    displayHistory() {
      $('#history').delay(250).fadeIn('slow');
    }

    public ngOnInit() {
      $(document).ready(function() {
        $('.eq-sign').hide();
      });
      function  hideButtons() {
        for (let i = 1; i <= 19; i++) {
          $('#r' + i + '').hide();
        }
      }
      function showTop() {
        $('.top').slideDown('slow');
      }
      function showButton() {
        $('#buttons').slideDown('slow');
      }
      function showButtons() {
        for (let i = 1; i <= 19; i++) {
          let a: string = '#r' + i;
          console.log(a);
          $(a).show('slow');
        }
        $('#disp').show();
      }
    }
}
