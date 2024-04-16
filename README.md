# Probo Product Configurator

The Probo Product Configurator is a web component for customizing [probo.nl](https://probo.nl) print products. This configurator empowers users to personalize various print items so they can be ordered as the user pleases.

## Features

- **Dynamic Customization**: Users can dynamically customize their print products by selecting different options, including materials, sizes, quantities, etc.

- **Responsive Design**: The application is built with a responsive design to ensure a seamless experience across different devices and screen sizes.

- **Easy Integration**: Probo Product Configurator can be easily integrated into existing websites and e-commerce platforms as a web component, providing a consistent user experience.

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/ProboConnect/product-configurator.git
```

And include the web component:

```html
<script type="module" src="probo-product-configurator.js" rel="text/javascript"></script>
```

Or use the script on CDN:

```javascript
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/ProboConnect/product-configurator@0.1.1/probo-product-configurator.js"
  rel="text/javascript"
></script>
```

And include the component in your product

```html
<probo-product-configurator></probo-product-configurator>
```

### Proxy

To access the Probo API a proxy is needed. The proxy calls the Probo API `https://api.proboprints.com` and needs to accept the endpoints from the request `body.url`. See below for an example.

#### PHP

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

1. Call the `init` function on the proboConfigurator client and provide the proxy url.

```javaScript
await window.proboConfigurator
    .init({
        proxy: '/api',
    })
});
```

If you need deliveries you need to add an address as well.

```javaScript
await window.proboConfigurator
    .init({
        proxy: '/api',
        address: {
        companyName: 'Probo',
        firstName: 'John',
        lastName: 'Doe',
        street: 'Keizersgracht',
        houseNumber: '123',
        postalCode: '1015 CJ',
        city: 'Amsterdam',
        country: 'NL',
        email: 'probo@probo.nl',
        },
    })
});
```

2. Call the `openSearch` function to open the search modal. Either chained with the `init` function:

```javaScript
await window.proboConfigurator
    .init({
        proxy: '/api',
    })
}).openSearch();
```

Or after:

```javascript
window.proboConfigurator.openSearch()
```

### Language

The default language of the configurator is Dutch. If another is needed, for example English, either add it in the `init` function:

```javascript
await window.proboConfigurator
    .init({
        proxy: '/api',
        language: 'en',
    })
});
```

or with the `setLanguage` function.

```javascript
window.proboConfigurator.setLanguage('en')
```

The available languages are Dutch, English and German.

### Price types

If another price type is needed or you want to add VAT set it via the init function:

```javascript
await window.proboConfigurator
    .init({
        proxy: '/api',
        priceType: 'sales_price',
    })
});
```

or with the `setPriceType` function.

```javascript
window.proboConfigurator.setPriceType('sales_price', true)
```

The default is `purchase_price`, excluding VAT.

### Configuring by payload

The configurator can be setup with an existing payload as follows:

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
                },
                ...
            ]
        }
    ]
}
```

Or also contain the address, so the deliveries get fetched as well:

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
            },
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
                },
                ...
            ]
        }
    ]
}
```

### Finishing configuration

When the configuration is finished the `proboConfigurator:finished` event is dispatched.

### Getting results

When the configuration is finished you call the `window.proboConfigurator.getResults()` to get the configuration and excerpt of the product.

Simple example output:

```
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

### Clearing the config

By calling `configurator.clear()` all options are reset and the component should return to it's initial state.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

2024 Probo.nl.
