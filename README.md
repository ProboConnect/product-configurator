# Probo Product Configurator

The Probo Product Configurator is a webcomponent that allows your customers to effortlessly customize Probo Products within your application.
The configurator is a wrapper for the /products/configure endpoint of the [Probo API](https://apidocs.proboprints.com/)

## Features

- **Dynamic Customization**: Users can customize their print products by selecting different options, including materials, sizes, quantities, etc.

- **Responsive Design**: The application is built with a responsive design to ensure a seamless experience across different devices and screen sizes.

- **Easy Integration**: Probo Product Configurator can be easily integrated into existing websites and e-commerce platforms as a web component, providing a consistent user experience.

## About Probo
Probo is one of the largest Printing on Demand suppliers in Western Europe and a market leader in the BeNeLux.
- [Probo Nederland](https://www.probo.nl)
- [Probo Deutschland](https://www.probo.de)
- [Probo International](https://www.probo.eu)

## Getting Started
Before you get started you need to have an Probo account and  API token for the ProboAPI. You can request this on your Probo platform.

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
<script type="module" src="probo-product-configurator.js" rel="text/javascript"></script>
```

#### Via CDN 
```javascript
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/ProboConnect/product-configurator@v1/probo-product-configurator.js"
  rel="text/javascript"
></script>
```

### Proxy
Due to security, you need a proxy to make the calls to Probo, from your front-end to the Probo API.  Some examples are added.
The proxy calls the Probo API `https://api.proboprints.com` and needs to accept the endpoints from the request `body.url`. See below for an example.

#### PHP example

```php
<?php

$rawData = file_get_contents('php://input');

$decodedData = json_decode($rawData, true);

$baseUrl = 'https://api.proboprints.com';
$token = 'YOURAPITOKEN';

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

### Initializing first steps


#### Choose the variant
There are two ways to use the configurator.
With product search and in a modal:

```html
<probo-product-configurator modal></probo-product-configurator>
```

Just the configurator

```html
<probo-product-configurator></probo-product-configurator>
```

#### Initialization
1. Call either the `init` function on the proboConfigurator client and provide the proxy URL.

```javaScript
await window.proboConfigurator
    .init({
        proxy: '/api',
});
```

Or add the props to the component and it will call the init function within.
```javaScript
  <probo-product-configurator
    proxy="/api"
    product-code="banner-510"
  />
```

If you need deliveries you need to add an address as well. Due to web component limitations, this cannot be done by prop.

```javaScript
await window.proboConfigurator
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
window.proboConfigurator.setAddress({
    companyName: 'Probo',
    firstName: 'John',
    lastName: 'Doe',
    street: 'Fortuinweg',
    houseNumber: '17',
    postalCode: '9101 PE',
    city: 'Dokkum',
    country: 'NL',
    email: 'probo@probo.nl',
})
```

2. When using the search functionality call the `openSearch` function to open the search modal. Either chained with the `init` function:

```javaScript
await window.proboConfigurator
    .init({
        proxy: '/api',
    }).openSearch();
```

Or after:

```javascript
window.proboConfigurator.openSearch()
```

3. Or when using the configurator without search (or product-code prop) set the product with the `setProduct` function and API code:

```javascript
await window.proboConfigurator
    .init({
        proxy: '/api',
    }).setProduct('banner-510');
```

And to get the first option call the `getNextOption()` function.

### Language

The default language of the configurator is Dutch. If another is needed, for example English, either add it in the `init` function:

```javascript
await window.proboConfigurator
    .init({
        proxy: '/api',
        language: 'en',
    });
```

or with the `setLanguage` function.

```javascript
window.proboConfigurator.setLanguage('en')
```

Or as prop

```javaScript
  <probo-product-configurator
    ...
    language="en"
  />
```

The available languages are Dutch (nl), English (en) and German(de).

### Price types

If another price type is needed or you want to add VAT set it via the init function:

```javascript
await window.proboConfigurator
    .init({
        proxy: '/api',
        priceType: 'sales_price',
    });
```

or with the `setPriceType` function.

```javascript
window.proboConfigurator.setPriceType('sales_price', true)
```

The default is `purchase_price`, excluding VAT.

### Configuring by payload

The configurator can be set with an existing payload as follows:

```javascript
window.proboConfigurator.setFromPayload(payload)
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

### Finishing configuration

When a configuration is orderable the `proboConfigurator:finished` event is dispatched on the window.

### Getting results

When the configuration is finished you call the `window.proboConfigurator.getResult()` to get the configuration and excerpt of the product.

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

### Getting the upload data
 
Use `proboConfigurator.needsUpload()` to determine if an upload is needed.

And `proboConfigurator.getUploaderData()` to get the uploader data.

### Getting the raw payload

`proboConfigurator.getRaw()` returns the whole unmapped API payload;

### Clearing the config

By calling `proboConfigurator.clear()` all options are reset and the component should return to its initial state.

## Reporting issues or requests
If you have issues or feature requests, please create a GitHub issue.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

2024 Probo.
