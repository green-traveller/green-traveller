<p align="center">
    <img src="src/assets/icons/android-chrome-512x512.png" alt="Green Traveller Logo" width="128">
</p>

# 🚴🌳 Green Traveller

| [Landing Page](https://green-traveller.github.io/) | [App](https://green-traveller.github.io/web/) |
| --- | --- |

An easy to use App to track your CO₂ emissions from transportation means for your iPhone and Android Smartphone.

## Features

* Easy and user-friendly onboarding
* Search and plan routes
* Make configurations to search parameters
* Compare and decide on route options
* Review your CO₂ emissions
* Set yourself challenges
* View your travelled routes
* Add your own vehicles

## Screenshots

<div style="display: flex; justify-content: space-between;">
    <img src=".readme/setup.png" alt="Setup View" width="250">
    <img src=".readme/search.png" alt="Search View" width="250">
    <img src=".readme/result.png" alt="Results View" width="250">
    <img src=".readme/routes.png" alt="Routes View" width="250">
    <img src=".readme/balance.png" alt="Balance View" width="250">
    <img src=".readme/preferences.png" alt="Preferences View" width="250">
    <img src=".readme/vehicles.png" alt="Vehicles View" width="250">
</div>

## Usage

### Setup

You need `node.js` installed in your environment.
Run `npm install` to install the dependencies.
To have all features available place a `.config.json` file in the root folder of the project with the following content:

```
{
  "keys": {
    "dev": "<Your Google Maps API Key>"
  }
}
```

### Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
