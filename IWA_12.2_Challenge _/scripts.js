// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.getElementById('book1');
const status1 = book1.querySelectorAll('.status');
const reserve1 = book1.querySelectorAll('.reserve');
const checkout1 = book1.querySelectorAll('.checkout');
const checkin1 = book1.querySelectorAll('.checkin');


status1.style.color = STATUS_MAP.overdue.color ;
reserve1.disabled = !STATUS_MAP.overdue.canReserve; 
checkout1.disabled= !STATUS_MAP.overdue.canCheckout; 
checkin1.disabled = !STATUS_MAP.overdue.canCheckIn ;

const book2 = document.getElementById('book2');
const status2 = book2.querySelectorAll('.status');
const reserve2 = book2.querySelectorAll('.reserve');
const checkout2 = book2.querySelectorAll('.checkout');
const checkin2 = book2.querySelectorAll('.checkin');


status2.style.color = STATUS_MAP.reserved.color;
reserve2.disabled = !STATUS_MAP.reserved.canReserve; 
checkout2.disabled= !STATUS_MAP.reserved.canCheckout; 
checkin2.disabled = !STATUS_MAP.reserved.canCheckIn ;

const book3 = document.getElementById('book3');
const status3 = book3.querySelectorAll('.status');
const reserve3 = book3.querySelectorAll('.reserve');
const checkout3 = book3.querySelectorAll('.checkout');
const checkin3 = book3.querySelectorAll('.checkin');


status3.style.color = STATUS_MAP.shelf.color;
reserve3.disabled = !STATUS_MAP.shelf.canReserve; 
checkout3.disabled= !STATUS_MAP.shelf.canCheckout; 
checkin3.disabled = !STATUS_MAP.shelf.canCheckIn ;


