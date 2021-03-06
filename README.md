# Virtual iD

Virtual iD is a project prototype to create an open-source and encrypted social network with no personal data violations. Uploaded files (photos, videos,...) are stored into a private ownCloud space syncable with your computers, tablets and smartphones. Encryption/decryption features are powered by [OpenPGP.js](https://github.com/openpgpjs/openpgpjs). File storage and sync are powered by [NextCloud](https://nextcloud.com/).

## Working features

- Basic account Creation
- OpenPGP keys generation at account creation
- Public stream post creation

## TODO

- Photo/Video link embeded into posts
- User search
- Comment system
- Like system
- Notification system
- Friendship system
- Instant Messaging
- Stream posts visibility system
- OpenPGP encryption/Decryption for posts
- Photo/Video upload into NextCloud server
- Account information page
- Privacy settings
- Encryption settings
- Email system
- OpenPGP encryption/Decryption for emails
- Localization system and translation
- Events system (creation, invites,...)
- Personal uploaded files sync (webdav) provided by NextCloud
- Personal Virtual iD Calendar sync (caldav) provided by NextCloud
- Virtual iD Contacts sync (carddav) provided by NextCloud
- Geolocation sharing
- Virtual Community pages
- Free and Premium account system (More cloud storage for premium)

## Installation

### Required packages
```
git npm
```

### Get Virtual iD Client sources
Clone this repository where you want executing this command :
```
$ git clone https://github.com/DkGr/virtualid-client.git/
```

### Install dependencies
```
$ cd /your/virtualid/source/folder/
```
```
$ npm install
```
