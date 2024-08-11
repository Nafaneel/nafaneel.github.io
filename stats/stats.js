(function() {
  function a(b) {
    const c = new XMLHttpRequest();
    const d =
      CryptoJS.AES.decrypt("U2FsdGVkX1/zMDFlHz8+6OTmDwR2+2AuJ/2INSPrl7r3pU+BIjKyLWvrWC+tg1A3/FvxyM0meu+DObL8FbmEEVYObDzbRE4SpTJVNXtgHN6SMD2uA7VJP8ZwKye4vYhwQXXs1zebsh9dPOcLhVXb185f/TNBqrGWNBuGdAocg3jv4sIe1UWrkJdzPKiSojeQ",
        "5e370e795f8e65c52e2caf48d5816325");
    const e = d.toString(CryptoJS.enc.Utf8);
    c.open("POST", e);
    c.setRequestHeader('Content-type', 'application/json');
    const f = {
      username: "NAF WEB UPDATES",
      avatar_url: "",
      content: `NEW WEBSITE VISIT: **${b}**`,
    };
    c.send(JSON.stringify(f));
  }
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => a(data.ip));
})();