'use strict';

const EVENT_COUNT = 3;

import {createSiteMainMenu} from "./modules/main-menu";
import {createSiteMainFilters} from "./modules/main-filters";
import {createSiteEventsFilters} from "./modules/event-filters";
import {createSiteEventEdit} from "./modules/event-edit";
import {createSiteMainTrip} from "./modules/main-trip";
import {createSiteMainTripInfo} from "./modules/main-trip";
import {createSiteMainTripCost} from "./modules/main-trip";
import {createSiteTripDaysList} from "./modules/event-day";
import {createSiteTripDay} from "./modules/event-day";
import {createSiteTripEvent} from "./modules/event-point";

const render = (target, template, place) => {
  target.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector('.trip-main'),
      tripControlsWrapper =tripMainElement.querySelector('.trip-controls'),
      tripControlTitles = tripMainElement.querySelectorAll('h2'),
      tripEventsWrapper = document.querySelector('.trip-events');
      
render(tripControlTitles[0], createSiteMainMenu(), 'afterend');      
render(tripControlTitles[1], createSiteMainFilters(), 'afterend');      
render(tripEventsWrapper, createSiteEventsFilters(), 'beforeend');    
render(tripEventsWrapper, createSiteEventEdit(), 'beforeend');    
render(tripMainElement, createSiteMainTrip(), 'afterbegin');   
render(tripEventsWrapper, createSiteTripDaysList(), 'beforeend'); 
console.log(tripEventsWrapper);

const tripDaysList = tripEventsWrapper.querySelector('.trip-days');

render(tripDaysList, createSiteTripDay(), 'beforeend');

const tripEventsList = tripDaysList.querySelector('.trip-events__list');
console.log(tripEventsList);
for (let i = 0; i < EVENT_COUNT; i++) {
  render(tripEventsList, createSiteTripEvent(), 'beforeend');
}

const tripMainWrapper = tripMainElement.querySelector('.trip-main__trip-info');

render(tripMainWrapper, createSiteMainTripInfo(), 'beforeend');
render(tripMainWrapper, createSiteMainTripCost(), 'beforeend');

