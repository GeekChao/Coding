class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log("Connecting to " + website);
  }
}

class ProxyLibraryKiosk {
  appBlackLists = ["camera", "photos", "music", "settings"];
  webBlackLists = [
    "fb.com",
    "instagram.com",
    "snapchat.com",
    "google.com",
    "gmail.com"
  ];

  constructor(kiosk) {
    this.kiosk = kiosk;
  }

  open(app) {
    if (this.appBlackLists.includes(app)) {
      console.log(`You can't access the ${app}`);

      return;
    }

    this.kiosk.open(app);
  }

  connectTo(website) {
    if (this.webBlackLists.includes(website)) {
      console.log(`Access to ${website} denied`);

      return;
    }

    this.kiosk.connectTo(website);
  }
}

var libraryKiosk = new ProxyLibraryKiosk(new LibraryKiosk());

libraryKiosk.open("photos");
libraryKiosk.open("music");
libraryKiosk.open("Chrome");

libraryKiosk.connectTo("booksportal.com");
libraryKiosk.connectTo("google.com");
libraryKiosk.connectTo("fb.com");
