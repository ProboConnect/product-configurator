# Probo Product Configurator

Version 0.0.0

## Overview

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
<script src="probo-product-configurator.js" rel="text/javascript"></script>
```

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
$token = 'yourtoken';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, sprintf('%s%s', $baseUrl, $decodedData['url']));
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'Authorization: Basic ' . $token
]);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($decodedData['data']));

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;

```

### Initializing first steps

1. Set API client with a link to the proxy.

```javaScript
const configurator = new ProboClient({ proxy: '/api' });
```

2. Set a product with the product code via the client. This will fetch the first step(s) for this product.

```javaScript
configurator.setProduct('banner-510');
```

3. If needed set the priceType and address before setting the product

```javaScript
configurator.setPriceType('sales_price', false).setAddress(address).setProduct('banner-510');
```

### Setting and getting options

1. Add an eventlistener for the model value of the component.

2. Set the option returned from the listener and get the next option

```javascript
configurator.setOption(newValue).getNextOption()
```

#### By payload

The configurator can be setup with an existing payload as follows:

```javascript
configurator.setFromPayload(payload)
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

### Clearing the config

By calling `configurator.clear()` all options are reset and the component should return to it's initial state.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2023 Probo.nl.
