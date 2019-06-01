import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
declare var lightbox: any;
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})

export class ArtComponent implements OnInit {

  constructor(private router: Router) {}

    navigate() {
        this.router.navigate(['info']);
    }
  ngOnInit() {
    $(document).ready(function() {
      lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true
      });

      $('.movies').on('click', function() {
         $('.movies1').trigger('click');
      });
      $('.music').on('click', function() {
         $('.music1').trigger('click');
      });
      $('.people').on('click', function() {
         $('.people1').trigger('click');
      });
      $('.sports').on('click', function() {
         $('.sports1').trigger('click');
      });

      lightbox.$action.on('click', function(e) {
        e.preventDefault();
         if ($(this).prev().text() === 'Audrey Hepburn') {
           window.location.href = 'https://www.etsy.com/listing/493546958/audrey-hepburn-breakfast-at-tiffanys?ref=shop_home_active_1';
         } else if ($(this).prev().text() === 'Bill Murray') {
           window.location.href = 'https://www.etsy.com/listing/507228013/bill-murray-word-art-print?ref=shop_home_active_18';
         } else if ($(this).prev().text() === 'Edgar Allan Poe') {
           window.location.href = 'https://www.etsy.com/listing/493747462/edgar-allan-poe-word-art-print?ref=shop_home_active_20';
         } else if ($(this).prev().text() === 'Einstein') {
           window.location.href = 'https://www.etsy.com/listing/511841242/einstein-word-art-print?ref=shop_home_active_11';
         } else if ($(this).prev().text() === 'Evel Knievel') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Muhammad Ali') {
           window.location.href = 'https://www.etsy.com/listing/493764124/muhammad-ali-word-art-print?ref=shop_home_active_14';
         } else if ($(this).prev().text() === 'Salvador Dali') {
           window.location.href = 'https://www.etsy.com/listing/511842458/salvador-dali-word-art-print?ref=shop_home_active_10';
         } else if ($(this).prev().text() === 'Superman') {
           window.location.href = 'https://www.etsy.com/listing/494074024/superman-word-art-print?ref=shop_home_active_6';
         } else if ($(this).prev().text() === 'Alex Ovenchkin') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Baltimore Orioles') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Baltimore Ravens') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'New York Rangers') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Penn State') {
           window.location.href = 'https://www.etsy.com/listing/507257059/penn-state-word-art-print?ref=shop_home_active_19';
         } else if ($(this).prev().text() === 'Peyton Manning') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Ray Lewis') {
           window.location.href = 'https://www.etsy.com/listing/493781922/ray-lewis-word-art-print?ref=shop_home_active_8';
         } else if ($(this).prev().text() === 'Washington Capitals') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Washington Redskins') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Pittsburgh Steelers') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Dirty Heads') {
           window.location.href = 'https://www.etsy.com/listing/511839620/dirty-heads-word-art-print?ref=shop_home_active_4';
         } else if ($(this).prev().text() === 'Bob Dylan') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'G-Love') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Grateful Dead') {
           window.location.href = 'https://www.etsy.com/listing/507247487/grateful-dead-word-art-print?ref=shop_home_active_22';
         } else if ($(this).prev().text() === 'Green Day') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Nirvana') {
           window.location.href = 'https://www.etsy.com/listing/493766936/nirvana-word-art-print?ref=shop_home_active_7';
         } else if ($(this).prev().text() === 'Notorious BIG') {
           window.location.href = 'https://www.etsy.com/listing/493549098/the-notorious-big-word-art-print?ref=shop_home_active_5';
         } else if ($(this).prev().text() === 'Pink Floyd') {
           window.location.href = 'https://www.etsy.com/listing/507261255/pink-floyd-word-art-print?ref=shop_home_active_15';
         } else if ($(this).prev().text() === 'Slightly Stoopid') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'SOJA') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Wu Tang') {
           window.location.href = 'https://www.etsy.com/listing/507566017/wu-tang-word-art-print?ref=shop_home_active_21';
         } else if ($(this).prev().text() === 'Beauty and the Beast') {
           window.location.href = 'https://www.etsy.com/listing/525644147/beauty-and-the-beast-word-art-print?ref=shop_home_active_9';
         } else if ($(this).prev().text() === 'Fear Loathing') {
           window.location.href = '';
         } else if ($(this).prev().text() === 'Good Fellos') {
           window.location.href = 'https://www.etsy.com/listing/507243657/goodfellas-word-art-print?ref=related-4';
         } else if ($(this).prev().text() === 'Pulp Fiction') {
           window.location.href = 'https://www.etsy.com/listing/507267063/pulp-fiction-word-art-print?ref=listing-shop-header-1';
         } else if ($(this).prev().text() === 'V for Vendetta') {
           window.location.href = 'https://www.etsy.com/listing/507564709/v-for-vendetta-word-art-print?ref=shop_home_active_13';
         } else if ($(this).prev().text() === 'A Clockwork Orange') {
           window.location.href = 'https://www.etsy.com/listing/511837572/a-clockwork-orange-word-art-print?ref=shop_home_active_12';
         } else if ($(this).prev().text() === 'Abbey Road') {
           window.location.href = 'https://www.etsy.com/listing/488493810/the-beatles-abbey-road-word-art-print?ref=shop_home_active_2';
         }
      });
    });
  }
}

