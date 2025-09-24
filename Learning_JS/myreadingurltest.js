const locationObject = window.location;

console.log(locationObject);
console.log('href',locationObject.href);

this.onload = ()=>{
    document.querySelector('#href').textContent = 'href'.toUpperCase() + ": " + locationObject.href;
    document.querySelector('#protocol').textContent = 'protocol'.toUpperCase() + ": " + locationObject.protocol;
    document.querySelector('#hostname').textContent = 'hostname'.toUpperCase() + ": " + locationObject.hostname;
    document.querySelector('#host').textContent = 'host'.toUpperCase() + ": " + locationObject.host;
    document.querySelector('#port').textContent = 'port'.toUpperCase() + ": " + locationObject.port;
    document.querySelector('#origin').textContent = 'origin'.toUpperCase() + ": " + locationObject.origin;
    document.querySelector('#pathname').textContent = 'pathname'.toUpperCase() + ": " + locationObject.pathname;
    document.querySelector('#hash').textContent = 'hash'.toUpperCase() + ": " + locationObject.hash;
    document.querySelector('#search').textContent = 'search'.toUpperCase() + ": " + locationObject.search;

      const params = new URLSearchParams(window.location.search);
    console.log(params);

     const pokeName = params.get('name');
    const pokeType = params.get('type');
    console.log(pokeName, pokeType);

}