window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  console.log(document.domain);

  const setDomain = () => {
    const domain = window.location.hostname;
    const subdomain = window.location.hostname.split(".")[0];
    subdomain_print = subdomain === 'www' ? domain : subdomain;

    const $domainInner = document.querySelectorAll('.domain');

    $domainInner.forEach((elem) => {
      elem.innerHTML = subdomain_print;
    });
  };

  setDomain();
});
