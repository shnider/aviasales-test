import React from 'react';

export default () => (
  <form className="Filters">
    <label htmlFor="allOptions">
      Все <input type="checkbox" checked="checked" />
    </label>
    <label htmlFor="withoutTransfer">
      Без пересадок <input type="checkbox" />
    </label>
    <label htmlFor="oneTransfer">
      1 пересадка <input type="checkbox" />
    </label>
    <label htmlFor="twoTransfers">
      2 пересадки <input type="checkbox" />
    </label>
    <label htmlFor="threeTransfers">
      3 пересадки <input type="checkbox" />
    </label>
  </form>
);
