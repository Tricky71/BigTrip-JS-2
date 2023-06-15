export const createSiteMainTrip = () => {
  return (
    `<section class="trip-main__trip-info  trip-info"></section>`
  )
};

export const createSiteMainTripInfo = () => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
    </div>`
  )
};

export const createSiteMainTripCost = () => {
  return (
    `<p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value"></span>
    </p>`
  )
};