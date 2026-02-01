# Connect Product Configurator

The Connect Product Configurator is a webcomponent that allows your customers to effortlessly customize Probo Products within your application.
The configurator is a wrapper for the /products/configure endpoint of the [Probo API](https://apidocs.proboprints.com/)

## Features

- **Dynamic Customization**: Users can customize their print products by selecting different options, including materials, sizes, quantities, etc.

- **Responsive Design**: The application is built with a responsive design to ensure a seamless experience across different devices and screen sizes.

- **Easy Integration**: Connect Product Configurator can be easily integrated into existing websites and e-commerce platforms as a web component, providing a consistent user experience.

## About Probo

Probo is one of the largest Printing on Demand suppliers in Western Europe and a market leader in the BeNeLux.

- [Probo Nederland](https://www.probo.nl)
- [Probo Deutschland](https://www.probo.de)
- [Probo International](https://www.probo.eu)

## Getting Started

Before you get started you need to have a Probo account and API token for the ProboAPI. You can request this on your Probo platform.

### Register an account

- [Probo Nederland](https://www.probo.nl)
- [Probo Deutschland](https://www.probo.de)
- [Probo International](https://www.probo.eu)

### Request a token

- [Probo Nederland API instellingen](https://www.probo.nl/myaccount/apiconnect/index)
- [Probo Deutschland API Einstellungen](https://www.probo.de/myaccount/apiconnect/index)
- [Probo International API settings](https://www.probo.eu/myaccount/apiconnect/index)

## Installation

### Installing the component

#### Via GIT

Clone the repository:

```bash
git clone https://github.com/ProboConnect/product-configurator.git
```

And include the web component:

```html
<script
    type="module"
    src="connect-product-configurator.js"
    rel="text/javascript"
></script>
```

#### Via CDN

```javascript
<script
    type="module"
    src="https://cdn.jsdelivr.net/gh/ProboConnect/product-configurator@v2/connect-product-configurator.js"
    rel="text/javascript"
></script>
```

### Proxy

Due to security, you need a proxy to make calls to Probo from your front end to the Probo API.
The proxy calls the Probo API `https://api.proboprints.com` and needs to accept the endpoints from the request `body.url`. See below for an example.

#### PHP example

- Create a folder `api`
- Create in the `api` folder a new `index.php`
- Put the contents of the example below in the index.php
- Update the token

```php
<?php

$rawData = file_get_contents('php://input');

$decodedData = json_decode($rawData, true);

$baseUrl = 'https://api.proboprints.com';
$token = 'YOUR_API_TOKEN';

$curl = curl_init();

curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'Authorization: Basic ' . $token
]);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    curl_setopt($curl, CURLOPT_URL, sprintf('%s%s', $baseUrl, $decodedData['url']));
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($decodedData['data']));
} else {
    curl_setopt($curl, CURLOPT_URL, sprintf('%s%s', $baseUrl, $_GET['url']));
}

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;
```

## Initializing first steps

### Choose the variant

There are two ways to use the configurator.
With product search and in a modal:

```html
<connect-product-configurator modal></connect-product-configurator>
```

Just the configurator

```html
<connect-product-configurator></connect-product-configurator>
```

#### Initialization

1. Call either the `init` function on the connectConfigurator client and provide the proxy URL.

```javaScript
await window.connectConfigurator
    .init({
        proxy: '/api',
});
```

Or add the props to the component, and it will call the init function within.

```javaScript
  <connect-product-configurator
    proxy="/api"
    product-code="banner-510"
  />
```

If you need deliveries you need to add an address as well. Due to web component limitations, this cannot be done by prop.

```javaScript
await window.connectConfigurator
    .init({
        proxy: '/api',
        address: {
            companyName: 'Probo',
            firstName: 'John',
            lastName: 'Doe',
            street: 'Fortuinweg',
            houseNumber: '17',
            postalCode: '9101 PE',
            city: 'Dokkum',
            country: 'NL',
            email: 'probo@probo.nl',
        },
});

```

Or set it with its method:

```javascript
window.connectConfigurator.setAddress({
    companyName: 'Probo',
    firstName: 'John',
    lastName: 'Doe',
    street: 'Fortuinweg',
    houseNumber: '17',
    postalCode: '9101 PE',
    city: 'Dokkum',
    country: 'NL',
    email: 'probo@probo.nl'
});
```

2. When using the search functionality call the `openSearch` function to open the search modal. Either chained with the `init` function:

```javaScript
await window.connectConfigurator
    .init({
        proxy: '/api',
    }).openSearch();
```

Or after:

```javascript
window.connectConfigurator.openSearch();
```

3. Or when using the configurator without search (or product-code prop) set the product with the `setProduct` function and API code:

```javascript
await window.connectConfigurator
    .init({
        proxy: '/api'
    })
    .setProduct('banner-510');
```

And to get the first option call the `getNextOption()` function.

```javascript
await (
    await window.connectConfigurator
        .init({
            proxy: '/api'
        })
        .setProduct('banner-510')
).getNextOption();
```

## Configuration

### Language

The default language of the configurator is Dutch. If another is needed, for example English, either add it in the `init` function:

```javascript
await window.connectConfigurator.init({
    proxy: '/api',
    language: 'en'
});
```

or with the `setLanguage` function.

```javascript
window.connectConfigurator.setLanguage('en');
```

Or as prop

```html
<connect-product-configurator language="en" />
```

The available languages are Dutch (nl), English (en) and German(de).

### Price types

If another price type is needed, or you want to add VAT set it via the init function:

```javascript
await window.connectConfigurator.init({
    proxy: '/api',
    priceType: 'sales_price'
});
```

or with the `setPriceType` function.

```javascript
window.connectConfigurator.setPriceType('sales_price', true);
```

The default is `purchase_price`, excluding VAT.

### Hiding the delivery section

To hide the delivery section at the end set the `hideDeliverysection` parameter to `true`.

### Passing a custom product ID

Add `internalProductId` to the init function or when using props as `internal-product-id`. It will be added as a parameter to the api URL and will be available in your proxy.

### Saving products locally

Because getting the products every time you search can be a lot, the `storeProductsLocally` parameter can store these in the user's session (so they will be removed when closing the tab).

```javascript
await window.connectConfigurator.init({
    storeProductsLocally: true
});
```

It's also available as a prop on the element.

## Overwriting API data

If there is a need to change a title, description or image of an option or product you can use the overwrites property.

```javascript
await window.connectConfigurator.init({
    proxy: '/api',
    overwrites: [
        {
            code: 'walltex-pro',
            overwrites: {
                title: 'Walltex pro',
                description: 'Naadloos behang met plaklaag',
                image: 'image.jpg'
            }
        }
    ]
});
```

Or maybe not showing a product at all, then you can hide it. It will not show up in search results.

```javascript
await window.connectConfigurator.init({
    proxy: '/api',
    overwrites: [
        {
            code: 'outdoor-mat',
            overwrites: {
                hide: true
            }
        }
    ]
});
```

Overwrites also have their own method, but can only be set on init.

```javascript
window.connectConfigurator.init().setOverwrites();
```

### Skipping steps

You are able to skip steps when setting `hide: true` and providing a default option to the overwrites.

```JSON
  {
    "code": "deco-fabric",
    "overwrites": {
      "steps": [
        {
          "code": "finishing-per-side-all-sides",
          "overwrites": {
            "hide": true,
            "selected": "finishing-all-sides"
          }
        }
      ]
    }
  },
```

### Overwriting with the editor

To make it easier to set overwrites for a specific product an editor is provided as a seperate component, see `connect-configurator-editor.js`.
This component is setup the same way as the configurator is, with the exception that the client exists on `window.connectConfiguratorEditor` and the modal mode is not available.

Every step in the editor has an edit button which opens a drawer where one can modify the information and options for that step.

### Getting the overwrites

If you have set overwrites for a product you can get them by calling `window.connectConfiguratorEditor.getOverwrites()`.

## Configuring by payload

The configurator can be set with an existing payload as follows:

```javascript
window.connectConfigurator.setFromPayload(payload);
```

The Payload can either be just a product:

```json
{
    "products": [
        {
            "code": "banner-510",
            "options": [
                {
                    "code": "width",
                    "value": 2000
                },
                {
                    "code": "height",
                    "value": 2000
                },
                {
                    "code": "amount",
                    "value": 4
                }
            ]
        }
    ]
}
```

Or can also contain the address, so the deliveries get fetched as well:

```json
{
    "deliveries": [
        {
            "address": {
                "companyName": "Probo",
                "firstName": "John",
                "lastName": "Doe",
                "street": "Fortuinweg",
                "houseNumber": "17",
                "postalCode": "9101 PE",
                "city": "Dokkum",
                "country": "NL",
                "email": "printprofessionals@probo.nl"
            }
        }
    ],
    "products": [
        {
            "code": "banner-510",
            "options": [
                {
                    "code": "width",
                    "value": 2000
                },
                {
                    "code": "height",
                    "value": 2000
                },
                {
                    "code": "amount",
                    "value": 4
                }
            ]
        }
    ]
}
```

### Option selected event

Whenever an option is selected the `connectConfigurator:option-selected` event is fired with the selected option available in the event.detail parameter.

### Finishing configuration

When a configuration is complete and can be used in an order, the `connectConfigurator:finished` event is dispatched on the window.

### Getting results

When the configuration is finished you call the `window.connectConfigurator.getResult()` to get the configuration and excerpt of the product.

Simple example output:

```json
{
    "excerpt": {
        "product": {
            "description": "5x banner-510 234x234",
            "description_options": "width: 234, height: 234, amount: 5, finishing-all-sides, cut, customer-supplied-file"
        }
    },
    "configuration": {
        "products": [
            {
                "code": "banner-510",
                "options": [
                    {
                        "code": "width",
                        "value": 234
                    },
                    {
                        "code": "height",
                        "value": 234
                    },
                    {
                        "value": 5,
                        "code": "amount"
                    },
                    {
                        "code": "finishing-all-sides"
                    },
                    {
                        "code": "cut"
                    },
                    {
                        "code": "customer-supplied-file"
                    }
                ]
            }
        ],
        "language": "en"
    }
}
```

### Storing the configuration

The `storeConfiguration()` method saves a single configuration.

Usage:

```javaScript
connectConfigurator.storeConfiguration("banner_510_100x100", {
  code: "banner-510",
  options: [
    {
      code: "width",
      value: "100",
    },
    {
      code: "height",
      value: "100",
    },
    {
      code: "amount",
      value: "1",
    },
    {
      code: "finishing-all-sides",
    },
    {
      code: "cut",
    },
    {
      code: "customer-supplied-file",
    },
  ],
});
```

If the config is omitted, the current configurated product is used.

### Updating a stored configuration

To update a stored configuration use the `connectConfigurator.updateConfiguration()` method.

### Creating an uploader session

With `connectConfigurator.getUploaderSession(callback_url)` you can get an uploader session for your configuration.

### Getting the upload data

Use `connectConfigurator.needsUpload()` to determine if an upload is needed.

And `connectConfigurator.getUploaderData()` to get the uploader data.

### Getting the raw payload

`connectConfigurator.getRaw()` returns the whole unmapped API payload;

### Clearing the config

By calling `connectConfigurator.clear()` all options are reset and the component should return to its initial state.

## Customizing the configurator

As the configurator is a web component, styling it directly is not possible. Therefore there are several CSS ::part selectors made available to style the configurator.

By selecting the part you can change the color of the background, font, etc. For most values you'll have to add the !important property to override the default styling.

```css
connect-product-configurator::part(configurator) {
    background-color: #324342 !important;
}
```

| Element                    | Part                    |
| -------------------------- | ----------------------- |
| configurator (container)   | configurator            |
| step (container)           | step                    |
| step title                 | step-title              |
| step subtitle              | step-subtitle           |
| open state indicator icon  | state-indicator-icon    |
| option card (container)    | option                  |
| option card selected state | option-selected         |
| option title               | option-title            |
| option description         | option-description      |
| delivery step              | delivery-step           |
| delivery step title        | delivery-step-title     |
| delivery step subtitle     | delivery-step-subtitle  |
| delivery option day        | delivery-option-day     |
| delivery option date       | delivery-option-date    |
| delivery option cost       | delivery-option-cost    |
| delivery option no cost    | delivery-option-no-cost |

## Reporting issues or requests

If you have issues or feature requests, please create a GitHub issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is designed to assist in visually configuring a Probo product and generating the corresponding payload. As the integrator of this configurator, you are responsible for ensuring the payload remains valid when used, for example, in the order payload.

Please note that configurations may sometimes become invalid due to unforeseen changes in the product setup. While Probo strives to minimize these issues and inform you in a timely manner, it is your responsibility to revalidate the payload before use. Revalidation can be done through this tool or other available methods.

The use of this tool does not grant any rights.

---

2024 Probo.
