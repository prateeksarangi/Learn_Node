setTimeout ( ( ) => {
  console.log('Two seconds are up!!');
}, 2000 );

const names = ['Andrew', 'Prateek', 'Jeni', 'Jessi', 'Raj'];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout( ( ) => {
    const data = {
      latitude: 0,
      longitude: 0
    };

    callback(data);
  }, 2000 );
};

geocode('Bargarh', (data) => {
  console.log(data);
});

const add = ( num1, num2, callback ) => {
  setTimeout( ( ) => {
    const ans = num1 + num2;
    callback(ans);
  }, 2000 );
};

add( 4, 8, (sum) => {
  console.log(sum);
} )
