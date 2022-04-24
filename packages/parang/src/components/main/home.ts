import Profile from './profile';
import Explore from './explore';
import Bookmark from './bookmark';
import AbstractComponent from '../abstract';
import { $, getUserToken } from '../../helper';

export default class Home extends AbstractComponent {
  $element: HTMLElement;
  $main: HTMLElement;
  profile: Profile;
  explore: Explore;
  bookmark: Bookmark;

  bindMembers() {
    const userToken = getUserToken() as string;
    if (userToken === undefined) location.replace('./login.html');

    this.$main = $('main');

    this.profile = new Profile(userToken);
    this.explore = new Explore(userToken);
    this.bookmark = new Bookmark(userToken);
  }

  template() {
    return /*html*/ `
    <div class="app">
      <header>
        <nav>
          <div class="item">
            <input type="radio" name="menubtn" id="profile" />
            <label for="profile" data-label="profile">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                  fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                  fill="currentColor" />
              </svg>
            </label>
          </div>

          <div class="item">
            <input type="radio" name="menubtn" id="explore" checked />
            <label for="explore" data-label="explore">
              <svg class="explore" width="50" height="50" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H8V8H4V4Z" fill="currentColor" />
                <path d="M4 10H8V14H4V10Z" fill="currentColor" />
                <path d="M8 16H4V20H8V16Z" fill="currentColor" />
                <path d="M10 4H14V8H10V4Z" fill="currentColor" />
                <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                <path d="M10 16H14V20H10V16Z" fill="currentColor" />
                <path d="M20 4H16V8H20V4Z" fill="currentColor" />
                <path d="M16 10H20V14H16V10Z" fill="currentColor" />
                <path d="M20 16H16V20H20V16Z" fill="currentColor" />
              </svg>
            </label>
          </div>

          <div class="item">
            <input type="radio" name="menubtn" id="saved" />
            <label for="saved" data-label="saved">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                  fill="currentColor" />
              </svg>
            </label>
          </div>
        </nav>
      </header>
      <main>
        <div class="container"></div>
      </main>
    </div>
    <section class="loading hidden">
      <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="160px" height="20px" viewBox="0 0 128 16"
        xml:space="preserve">
        <path fill="#ffc1c4"
          d="M10,3.5C7.614-2.053.844-.758,0.8,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,10.01,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C19.156-.813,12.268-1.832,10,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,31.61,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C40.756-.813,33.868-1.832,31.6,3.5Zm21.6,0C50.814-2.053,44.044-.758,44,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,53.21,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C62.356-.813,55.468-1.832,53.2,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,74.81,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C83.956-.813,77.068-1.832,74.8,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,96.41,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C105.556-.813,98.668-1.832,96.4,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.393,10.393,0,0,1,118.01,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C127.156-.813,120.268-1.832,118,3.5Z" />
        <g>
          <path fill="#ff0713"
            d="M-11.6,3.5c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-11.59,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C-2.444-.813-9.332-1.832-11.6,3.5Z" />
          <path fill="#ff454e"
            d="M-33.2,3.5c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-33.19,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C-24.044-.813-30.932-1.832-33.2,3.5Z" />
          <path fill="#ff8389"
            d="M-54.8,3.5C-57.186-2.053-63.956-.758-64,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-54.79,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C-45.644-.813-52.532-1.832-54.8,3.5Z" />
          <animateTransform attributeName="transform" type="translate"
            values="22 0;43.5 0;65 0;86.5 0;108 0;129.5 0;151 0;172.5 0" calcMode="discrete" dur="900ms"
            repeatCount="indefinite" />
        </g>
      </svg>
    </section>
    `;
  }

  render() {
    document.body.innerHTML = this.template();
    this.$element = document.body.firstElementChild as HTMLElement;
  }

  eventGroup() {
    return [
      { type: 'click' as keyof HTMLElementEventMap, callback: this.tabChange },
      { type: 'click' as keyof HTMLElementEventMap, callback: Explore.likeFox },
    ];
  }

  tabChange = (event: Event) => {
    event.stopPropagation();
    const $target = event.target as HTMLInputElement;
    if (!$target.matches('nav input')) return;

    this.$main.innerHTML = '';

    if ($target.matches('#explore')) this.setExplorePage();
    if ($target.matches('#saved')) this.setBookmarkPage();
  };

  setExplorePage() {
    this.$main.classList.remove('saved');
    this.$main.innerHTML = this.explore.template();
    this.explore.loadMore();
  }

  setBookmarkPage() {
    this.$main.classList.add('saved');
    this.bookmark
      .template()
      .then(template => (this.$main.innerHTML = template));
  }
}
