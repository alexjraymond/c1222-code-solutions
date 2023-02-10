import React, { useState } from 'react';

function AppDrawer() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  const hiddenBurger = open ? '' : 'hidden';
  const navModal = open ? 'nav-modal' : '';

  function hiddenSwap() {
    if (!hiddenBurger) {
      return 'hidden';
    }
    return '';
  }

  return (
    <div>

      <i className={`fa-solid fa-bars ${hiddenSwap()}`} onClick={handleClick}></i>
      <div className={navModal} onClick={handleClick}></div>
      <nav className={hiddenBurger}>

        <div className="nav-menu st-effect-1 st-menu st-menu-open">
          <h2>Menu</h2>
          <ul>
            <li onClick={handleClick}>hi</li>
            <li onClick={handleClick}>hey</li>
            <li onClick={handleClick}>how are ya</li>
          </ul>
        </div>

      </nav>

    </div>
  );
}

export default AppDrawer;
